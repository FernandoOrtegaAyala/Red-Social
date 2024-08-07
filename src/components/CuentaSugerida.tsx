"use client";

import { useState } from "react";
import Link from "next/link";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function CuentaSugerida({
  textoCuentaSugerida,
}: {
  textoCuentaSugerida: string;
}) {
  const [siguiendo, setSiguiendo] = useState(false);

  function handleSiguiendo() {
    setSiguiendo((prevState) => !prevState);
  }

  return (
    <>
      <div className="flex justify-between px-2 py-2 mb-3 flex-wrap ">
        <div className="flex flex-row">
          <Link
            href="/"
            className="w-12 h-12 mr-2 flex items-center justify-center">
            <Avatar className="w-full h-full">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </Link>
          <Link href="/" className="font-semibold flex items-center">
            {textoCuentaSugerida}
          </Link>
        </div>
        <button
          onClick={handleSiguiendo}
          className={`pr-3 hover:text-current ${
            siguiendo
              ? "text-primary font-normal text-sm"
              : "font-bold text-blue-500"
          } `}>
          {siguiendo ? "Siguiendo" : "Seguir"}
        </button>
      </div>
    </>
  );
}
