"use client";

import Link from "next/link";
import { AvatarIcon } from "@radix-ui/react-icons";

import CommentFilled from "@/components/svg/CommentFilled";
import LikeFilledSVG from "@/components/svg/LikeFilledSVG";

export default function Notification({
  type,
  usuario,
  timeAgo,
}: {
  type: string;
  usuario: string;
  timeAgo: string;
}) {
  return (
    <>
      <Link
        href="/feed"
        className="flex flex-row justify-start items-center px-2 mb-3 hover:bg-grisFondo hover:rounded-md">
        <div className="relative w-16 h-16 md:w-10 md:h-10 mr-2 flex items-center justify-center shrink-0">
          <AvatarIcon className="w-full h-auto " />
          <div
            className={`absolute bottom-1 md:bottom-0 md:right-0 right-1 md:w-5 md:h-5 ${
              type === "like" ? "text-red-800" : "text-primary"
            }`}>
            {type === "like" ? <LikeFilledSVG /> : <CommentFilled />}
          </div>
        </div>
        <div className="">
          <div className="mr-2 font-bold items-center inline-flex md:text-sm">
            @{usuario}
          </div>
          <span className="md:text-sm">
            {type === "like" ? "liked to a photo" : "commented a photo"}
          </span>
          <span className="ml-2 text-sm md:text-xs text-muted-foreground">
            {timeAgo}
          </span>
        </div>
      </Link>
    </>
  );
}
