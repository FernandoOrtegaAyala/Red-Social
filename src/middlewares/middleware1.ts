import { NextFetchEvent, NextRequest, NextResponse } from "next/server";
import { i18n, Locale } from "@/i18n.config";
import { getToken } from "next-auth/jwt";
import { pathToRegexp } from "path-to-regexp";

import { CustomMiddleware } from "./chain";

// Define las rutas protegidas
const protectedPaths = ["/feed(.*)", "/dashboard(.*)"];

function getProtectedRoutes(protectedPaths: string[], locales: Locale[]) {
  let protectedPathsWithLocale = [...protectedPaths];

  protectedPaths.forEach((route) => {
    locales.forEach((locale) => {
      const localizedRoute = `/${locale}${route}`;
      protectedPathsWithLocale.push(localizedRoute);
    });
  });

  return protectedPathsWithLocale;
}

export function withAuthMiddleware(middleware: CustomMiddleware) {
  return async (request: NextRequest, event: NextFetchEvent) => {
    const response = NextResponse.next();
    const token = await getToken({ req: request });

    // @ts-ignore
    request.nextauth = request.nextauth || {};
    // @ts-ignore
    request.nextauth.token = token;
    const pathname = request.nextUrl.pathname;

    const protectedPathsWithLocale = getProtectedRoutes(protectedPaths, [
      ...i18n.locales,
    ]);

    const isProtectedPath = protectedPathsWithLocale.some((protectedPath) => {
      const regex = pathToRegexp(protectedPath);
      return regex.test(pathname);
    });

    if (!token && isProtectedPath) {
      const signInUrl = new URL("/", request.url);
      signInUrl.searchParams.set("callbackUrl", pathname);
      return NextResponse.redirect(signInUrl);
    }

    return middleware(request, event, response);
  };
}
