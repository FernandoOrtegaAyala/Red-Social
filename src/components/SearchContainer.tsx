"use client";

import { useState } from "react";

import SearchButton from "./SearchButton";

export default function SearchContainer() {
  const [keyValue, setKeyValue] = useState(0);

  return (
    <>
      <div
        id="contenedorBusqueda"
        className="hidden z-50 bg-background overflow-y-auto w-72 h-screen  md:fixed top-0 left-16 lg:left-40">
        <div className="w-full h-full">
          <div className="hidden md:flex">
            <h2 className="w-full my-6 text-center font-semibold text-2xl">
              Buscar
            </h2>
          </div>
          <div className="w-full  " key={keyValue}>
            <SearchButton
              setKeyValue={setKeyValue}
              clases="h-full rounded-none"
            />
          </div>
        </div>
      </div>
    </>
  );
}
