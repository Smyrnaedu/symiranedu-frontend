import "next-auth";
import "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    accessToken?: string;
    user: {
      id?: string;
      name?: string | null;
      email?: string | null;
      role?: string;
    };
  }

  interface User {
    id?: string;
    name?: string | null;
    email?: string | null;
    role?: string;
    token?: string;
    emailVerified?: Date | null;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id?: string;
    name?: string | null;
    email?: string | null;
    role?: string;
    accessToken?: string;
  }
}
