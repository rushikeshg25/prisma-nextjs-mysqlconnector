import authConfig from "./auth.config"
import NextAuth from "next-auth"
 const { auth  } = NextAuth(authConfig)
 import {authRoutes,apiAuthPrefix,DEFAULT_LOGIN_REDIRECT,publicRoutes} from "@/routes"
 
export default auth((req) => {
  // req.auth
  console.log(req)
})

export const config = {
    matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
  };