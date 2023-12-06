import { DefaultSession } from "next-auth";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface User {
    phoneNumber?: number;
    stylePreference?: string;
    userId?: string;
    firstName?: string;
    lastName?: string;
    token?: string;
    image?: string;
    adminId?: string;
    role?: string;
    userName?: string;
  }

  interface Session extends DefaultSession {
    user: User;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    phoneNumber?: number;
    stylePreference?: string;
    userId?: string;
    strategy?: keyof typeof AUTH_STRATEGY;
    image?: string;
    role?: string;
    userName?: string;
  }
}
