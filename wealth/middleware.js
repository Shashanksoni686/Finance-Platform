import { clerkMiddleware,createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher([// this is creates so the user can only access these routes when they are signed in.
    "/dashboard(.*)",
    "/account(.*)",
    "/transactions(.*)",
])

export default clerkMiddleware(async(auth,req)=>{
    if (isProtectedRoute(req)) {
        await auth.protect();
      }
      return;
});
export const config = {
  matcher: ["/((?!_next|.*\\..*).*)", "/(api|trpc)(.*)"],
};
