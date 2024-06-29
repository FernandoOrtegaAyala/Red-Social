"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import ReelsSVG from "./svg/ReelsSVG";

export default function ReelsButton({ linkRef }: { linkRef: string }) {
  const pathName = usePathname();

  return (
    <>
      <Link
        href={linkRef}
        className={`w-1/3 flex justify-center items-center py-3 ${
          pathName.includes("reels")
            ? "border-b-2 md:border-b-4 border-current"
            : ""
        } `}>
        <ReelsSVG />
      </Link>
    </>
  );
}
