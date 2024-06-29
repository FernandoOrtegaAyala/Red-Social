"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { useSession } from "next-auth/react";

import LogoNombre from "./LogoNombre";
import NotificationButton from "./NotificationButton";
import SearchButton from "./SearchButton";

export default function HeaderMobile() {
  const [visibility, setVisibility] = useState(true);
  const [keyValue, setKeyValue] = useState(0);

  const { data: session, status } = useSession();
  console.log(session, status);

  const handleSearchVisibility = () => setVisibility(false);
  return (
    <>
      <header className="md:hidden">
        <div className="z-50 fixed top-0 right-0 px-3 py-2 w-full flex flex-row items-center justify-between h-12 border-b shadow-2xl bg-background">
          <div className="w-auto shrink-0">
            <LogoNombre
              textoOculto="hidden"
              posicion=" "
              referencia="/feed"
              texto=""
            />
          </div>
          <div
            key={keyValue}
            className={`w-full mx-4 relative ${!visibility ? "" : "hidden"} `}>
            <SearchButton
              setKeyValue={setKeyValue}
              clases="-top-4 rounded-md h-80"
            />
          </div>
          <div className=" flex flex-row items-center justify-center">
            {visibility ? (
              <button className="w-6 h-6 mr-3" onClick={handleSearchVisibility}>
                <Search className="w-full h-full" />
              </button>
            ) : (
              ""
            )}
            <NotificationButton clases="" notifications="" />
          </div>
        </div>
      </header>
    </>
  );
}
