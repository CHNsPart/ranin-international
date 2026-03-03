import createMiddleware from "next-intl/middleware";
import { routing } from "@/src/i18n/routing";

export default createMiddleware(routing);

export const config = {
  matcher: [
    // Match all pathnames except those starting with:
    // - /cms (CMS admin)
    // - /api (API routes)
    // - /inhouse (internal assets)
    // - /_next (Next.js internals)
    // - files with extensions (static assets)
    "/((?!cms|api|inhouse|_next|.*\\..*).*)",
  ],
};
