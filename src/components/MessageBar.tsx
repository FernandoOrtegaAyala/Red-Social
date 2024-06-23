"use client";

import { useState } from "react";
import Link from "next/link";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function MessageBar() {
  const [nuevo, setNuevo] = useState(false);

  return (
    <>
      <Link
        href="/feed"
        className="h-16 flex flex-row justify-between px-2 mb-4 hover:bg-grisFondo">
        <div className="w-16 h-full flex items-center justify-center shrink-0">
          <Avatar className="w-full h-auto">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex flex-col px-2 justify-center w-full h-full whitespace-nowrap overflow-hidden text-ellipsis">
          <span className="font-semibold">@username123</span>
          <div className="flex flex-row gap-1">
            <span className="text-muted-foreground whitespace-nowrap overflow-hidden text-ellipsis">
              You: ultimo mensajeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            </span>
            <p className="">.</p>
            <div className="w-auto h-full flex items-end">
              <span className="text-muted-foreground h-auto text-sm">
                24 min
              </span>
            </div>
          </div>
        </div>
        <div className="w-3 h-full flex items-center justify-center">
          {nuevo ? (
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
            </span>
          ) : (
            ""
          )}
        </div>
      </Link>
    </>
  );
}
