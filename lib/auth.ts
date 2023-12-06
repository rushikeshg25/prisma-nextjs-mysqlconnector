import {
    getServerSession,
    type DefaultSession,
    type NextAuthOptions,
  } from "next-auth";
  import GoogleProvider from "next-auth/providers/google";
  
  
  export const authOptions: NextAuthOptions = {
    
  
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID!,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      }),
    ],
  };
  
  
  export const getServerAuthSession = () => getServerSession(authOptions);