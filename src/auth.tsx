import NextAuth, { NextAuthConfig } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { login } from "./services/auth-service";
import { getIsTokenValid, getIsUserAuthorized } from "./helpers/auth-helper";
import { NextResponse } from "next/server";

type LoginPayload = {
  email: string;
  password: string;
};
type AuthUser = {
  id: string;
  name: string;
  email: string;
  role: string;
  emailVerified: null;
};


const config: NextAuthConfig = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        console.log("[AUTH] Credentials received:", credentials);

        if (
          typeof credentials?.email !== "string" ||
          typeof credentials?.password !== "string"
        ) {
          console.error("[AUTH] Invalid credential types.");
          return null;
        }

        const payload: LoginPayload = {
          email: credentials.email,
          password: credentials.password,
        };

        try {
          const res = await login(payload);
          const data = await res.json();

          console.log("[AUTH] Login response status:", res.status);
          console.log("[AUTH] Login response data:", data);

          if (!res.ok || !data.object) {
            console.error("[AUTH] Login failed or response malformed.");
            return null;
          }

          const user = data.object;

          return {
            id: user.id.toString(),
            name: `${user.name} ${user.surname}`,
            email: user.email,
            role: user.role,
            token: user.token,
            emailVerified: null,
          };
        } catch (error) {
          console.error("[AUTH] Error during login:", error);
          return null;
        }
      },
    }),
  ],

  callbacks: {
    authorized({ auth, request }) {
      const { pathname, searchParams, origin } = request.nextUrl;

      const userRole = auth?.user?.role as string;
      const isLoggedIn = !!userRole;
      const isLoginPage = pathname.startsWith("/login");
      const isInDashboardPages = pathname.startsWith("/dashboard");
      const isAPITokenValid = getIsTokenValid(auth?.accessToken as string);

      if (isLoggedIn && isAPITokenValid) {
        if (isLoginPage) {
          const callbackUrl =
            searchParams.get("callbackUrl") || `${origin}/dashboard`;
          return NextResponse.redirect(callbackUrl);
        }

        if (isInDashboardPages && !getIsUserAuthorized(userRole, pathname)) {
          return NextResponse.redirect(`${origin}/unauthorized`);
        }
      } else if (isInDashboardPages) {
        return false; // kullanıcı dashboard’a erişemez
      }

      return true; // genel erişim (login dışı sayfalar vs.)
    },

    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
        token.role = user.role;
        token.accessToken = user.token;
      }
      return token;
    },

    async session({ session, token }) {
      const isAPITokenValid = getIsTokenValid(token.accessToken);

      if (!isAPITokenValid) {
        session.accessToken = undefined;
        session.user = {} as AuthUser;
        return session;
      }

      session.accessToken = token.accessToken as string;
      session.user = {
        id: token.id as string,
        name: token.name as string,
        email: token.email as string,
        role: token.role as string,
        emailVerified: null,
      };

      return session;
    },
  },

  pages: {
    signIn: "/login", // giriş sayfası
  },

  trustHost: true,
};

export const { handlers, signIn, signOut, auth } = NextAuth(config);
