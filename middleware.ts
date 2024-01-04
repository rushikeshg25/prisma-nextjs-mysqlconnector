import authConfig from "./auth.config"
import NextAuth from "next-auth"
 const { auth  } = NextAuth(authConfig)

export default auth((req) => {
  // req.auth
//   console.log(req)
})

export const config = {
    matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
  };