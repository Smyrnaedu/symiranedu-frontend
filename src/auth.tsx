import NextAuth, { NextAuthConfig, Session, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { NextRequest, NextResponse } from "next/server";
import { login } from "./services/auth-service";
import { getIsTokenValid, getIsUserAuthorized } from "./helpers/auth-helper";
import { JWT } from "next-auth/jwt";

// Session objesine accessToken alanını ekliyoruz
declare module "next-auth" {
  interface Session {
    accessToken?: string;
  }
}

// API'den dönen kullanıcı tipi (role + token içerir)
interface AppUser extends Record<string, unknown> {
  id: string;
  email: string;
  name: string;
  role: string;
  token?: string;
}

// NextAuth config yapısı
const config: NextAuthConfig = {
  // Kullanıcı girişi için özel Credential Provider
  providers: [
    CredentialsProvider({
      // Giriş yapan kullanıcının verileri burada kontrol edilir
      async authorize(credentials) {
        const { username, password } = credentials as {
          username?: string;
          password?: string;
        };
        if (!username || !password) return null;

        const res = await login({ username, password }); // API login
        const data = await res.json();

        if (!res.ok) return null; // login başarısız

        const { token, ...userWithoutToken } = data;
        return userWithoutToken as AppUser; // user döndürülür
      },
    }),
  ],

  // Yetkilendirme kontrolü (middleware fonksiyonu gibi)
  callbacks: {
    // Kullanıcı belirli bir sayfaya erişmek istediğinde kontrol burada yapılır
    authorized({
      request,
      auth,
    }: {
      request: NextRequest;
      auth: Session | null;
    }) {
      const { pathname, searchParams, origin } = request.nextUrl;

      const user = auth?.user as AppUser | undefined;
      const accessToken = (auth as any)?.accessToken as string | undefined;

      const userRole = user?.role;
      const isLoggedIn = Boolean(userRole);
      const isInLoginPage = pathname.startsWith("/login");
      const isInDashboardPages = pathname.startsWith("/dashboard");
      const isAPITokenValid = getIsTokenValid(accessToken);

      // Kullanıcı login olduysa ve token geçerliyse
      if (isLoggedIn && isAPITokenValid) {
        // Login olan biri login sayfasına dönmeye çalışırsa → redirect dashboard
        if (isInLoginPage) {
          const url = searchParams.get("callbackUrl") || `${origin}/dashboard`;
          return NextResponse.redirect(url);
        }

        // Dashboard erişimi varsa → rol kontrolü yapılır
        if (isInDashboardPages) {
          const isUserAuthorized = getIsUserAuthorized(userRole!, pathname);
          if (!isUserAuthorized) {
            return NextResponse.redirect(`${origin}/unauthorized`);
          }
        }
      }
      // Login olmayan biri dashboard’a gitmeye çalışıyorsa → erişim engeli
      else if (isInDashboardPages) {
        return false;
      }

      // Diğer sayfalar herkese açık
      return true;
    },

    // JWT token üretimi ve oturum yönetimi
    async jwt({ token, user }: { token: JWT; user?: User }) {
      // Kullanıcı varsa token’a kullanıcı bilgisi eklenir
      if (user) {
        // Eğer user, AppUser ise (rol varsa) onu ekle, yoksa User’dan türet
        const appUser = (user as AppUser).role
          ? (user as AppUser)
          : {
              id: user.id,
              email: user.email,
              name: user.name,
              role: undefined,
            };

        token.user = appUser;
        token.accessToken =
          (appUser as AppUser).token ?? (token as any).accessToken;
      }

      // Token süresi dolmuşsa → logout yapılır
      if (!getIsTokenValid((token as any).accessToken)) {
        return null;
      }

      return token;
    },

    // Oturum oluşturulurken session içine token ve user bilgileri eklenir
    async session({ session, token }: { session: Session; token: JWT }) {
      session.user = token.user as AppUser;
      session.accessToken = token.accessToken as string;
      return session;
    },
  },

  // Login sayfası özel tanım
  pages: {
    signIn: "/login",
  },

  // Geliştirme ortamında güvenilir host ayarı
  trustHost: true,
};

// NextAuth handler ve yardımcı fonksiyonlar export edilir
export const { handlers, signIn, signOut, auth } = NextAuth(config);
