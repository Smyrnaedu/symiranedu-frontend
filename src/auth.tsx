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
type LoginPayload = {
  email: string;
  password: string;
};

// NextAuth config yapısı
const config: NextAuthConfig = {
  // Kullanıcı girişi için özel Credential Provider
  providers: [
    CredentialsProvider({
      authorize: async (
        credentials: Record<"email" | "password", string> | undefined
      ) => {
        if (!credentials) return null;

        const payload: LoginPayload = {
          email: credentials.email,
          password: credentials.password,
        };

        const res = await login(payload);
        console.log("response",res);
        const data = await res.json();

        if (!data.ok) return null;

        console.log("data:", data);

        const response = {
          user:{...data},
          accessToken: data.token,
        };
        delete response.user.token;
        return response;
        },
      }),
  ],

  // Yetkilendirme kontrolü (middleware fonksiyonu gibi)
  callbacks: {/* 
    authorized({auth, request}){

    },
    async jwt({token, user}){
      return {...token, ...user};
    },
    async session({session, token}){

      const { accessToken, user } = token;
     
      session.user = user;
      session.accessToken = accessToken;

      return session;
    }, */

  },
  pages: {
    signIn: "/login",
  },

  // Geliştirme ortamında güvenilir host ayarı
  trustHost: true,
};

// NextAuth handler ve yardımcı fonksiyonlar export edilir
export const { handlers, signIn, signOut, auth } = NextAuth(config);
