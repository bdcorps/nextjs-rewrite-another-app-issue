import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  console.log("Middleware", { pathname });

  const rewrite = new URL(pathname, "https://chakra-ui-info-product.vercel.app"); // or https://chakra-ui-blog.vercel.app

  return NextResponse.rewrite(rewrite);
}