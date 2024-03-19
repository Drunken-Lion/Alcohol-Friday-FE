import NextAuth from 'next-auth';
import { Member } from './member';

declare module 'next-auth' {
  /**
   * Session
   */
  interface Session {
    user: Member;
    accessToken?: string;
    refreshToken?: string;
  }

  /**
   * Account
   */
  interface Account {
    provider: string;
    accessToken: string;
    accessTokenExp: number;
    refreshToken: string;
    memberResponse: Member;
  }
}

declare module 'next-auth/jwt' {
  /**
   * JWT Token
   */
  interface JWT {
    accessToken?: string;
    accessTokenExp: number;
    refreshToken?: string;
    member: Member;
  }
}
