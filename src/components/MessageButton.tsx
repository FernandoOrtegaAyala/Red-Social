"use client";

import { useEffect, useState } from "react";
import { Link } from "@/navigation";
import { EnvelopeClosedIcon } from "@radix-ui/react-icons";

export default function MessageButton({ messages }: { messages: string }) {
  //CODIGO PARA OBTENER SI SE HA RECIBIDO
  //UNA NOTIFICACIONz
  const [notificacion, setNotificacion] = useState(true);

  const funcionEventual = () => {
    setNotificacion((prevShowPassword) => !prevShowPassword);
  };

  return (
    <>
      <Link
        href="/feed/messages"
        onClick={funcionEventual}
        className="relative w-6 h-6 mx-3 lg:mx-0 lg:py-2 lg:ml-2 lg:w-full lg:h-auto md:transform md:-rotate-90 lg:rotate-0 lg:flex lg:flex-row lg:items-center lg:justify-start lg:hover:bg-ring lg:hover:text-white lg:hover:rounded-md">
        {notificacion ? (
          <div className="absolute top-0 -right-1 md:left-5 md:-top-1 lg:top-2">
            <div>
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-700"></span>
              </span>
            </div>
          </div>
        ) : (
          ""
        )}
        <EnvelopeClosedIcon className="w-full h-full lg:w-6 lg:h-6" />
        <span className="hidden lg:inline-block lg:ml-2 lg:text-base">
          {messages}
        </span>
      </Link>
    </>
  );
}
