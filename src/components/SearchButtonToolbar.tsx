"use client";

import { useEffect, useState } from "react";
import { Search } from "lucide-react";

export default function SearchButtonToolbar({ search }: { search: string }) {
  const [busqueda, setBusqueda] = useState(false);
  const contenedorBusqueda = document.getElementById("contenedorBusqueda");
  const contenedorNotificaciones = document.getElementById(
    "contenedorNotificaciones"
  );

  const handleSearch = () => {
    setBusqueda((prevBusqueda) => !prevBusqueda);
  };

  useEffect(() => {
    if (contenedorBusqueda) {
      contenedorBusqueda.classList.toggle("hidden");
      if (!contenedorNotificaciones?.classList.contains("hidden")) {
        contenedorNotificaciones?.classList.add("hidden");
      }
    }
  }, [busqueda]);
  return (
    <>
      <button
        onClick={handleSearch}
        className="hidden md:flex w-6 h-6 mx-3 lg:mx-0 lg:py-2 lg:ml-2 lg:w-full lg:h-auto md:transform md:-rotate-90 lg:rotate-0 lg:flex lg:flex-row lg:items-end lg:justify-start lg:hover:bg-ring lg:hover:text-white lg:hover:rounded-md">
        <Search className="w-full h-full lg:w-6 lg:h-6" />
        <span className="hidden lg:inline-block lg:ml-2 lg:text-base">
          {search}
        </span>
      </button>
    </>
  );
}
