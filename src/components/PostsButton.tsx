"use client";

import { Link, usePathname } from "@/navigation";

import PostsSVG from "@/components/svg/PostsSVG";

export default function PostsButton() {
  const pathName = usePathname();

  return (
    <>
      <Link
        href="/feed/profile"
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
