"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import PostsSVG from "@/components/svg/PostsSVG";

export default function PostsButton({ linkRef }: { linkRef: string }) {
  const pathName = usePathname();

  return (
    <>
      <Link
        href={linkRef}
        className={`w-1/3 flex justify-center items-center py-3 ${
          pathName === "/feed/profile"
            ? "border-b-2 md:border-b-4 border-current"
            : ""
        } `}>
        <PostsSVG />
      </Link>
    </>
  );
}
