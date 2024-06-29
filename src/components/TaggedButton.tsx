"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import TaggedSVG from "./svg/TaggedSVG";

export default function TaggedButton({ linkRef }: { linkRef: string }) {
  const pathName = usePathname();

  return (
    <>
      <Link
        href={linkRef}
        className={`w-1/3 flex justify-center items-center py-3 ${
          pathName.includes("tagged")
            ? "border-b-2 md:border-b-4 border-current"
            : ""
        } `}>
        <TaggedSVG />
      </Link>
    </>
  );
}
