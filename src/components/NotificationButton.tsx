"use client";

import { useEffect, useState } from "react";
import { isMobile } from "@/helpers/knowDevice";
import { Link } from "@/navigation";
import { BellIcon } from "lucide-react";

export default function NotificationButton({
  notifications,
  clases,
}: {
  notifications: string;
  clases: string;
}) {
  const [notificacion, setNotificacion] = useState(true);

  const contenedorNotificaciones = document.getElementById(
    "contenedorNotificaciones"
  );

  const contenedorBusqueda = document.getElementById("contenedorBusqueda");
  //CODIGO PARA OBTENER SI SE HA RECIBIDO
  //UNA NOTIFICACION
  const funcionEventual = () => {
    setNotificacion((prevShowPassword) => !prevShowPassword);
  };

  useEffect(() => {
    if (contenedorNotificaciones) {
      contenedorNotificaciones.classList.toggle("hidden");
      if (!contenedorBusqueda?.classList.contains("hidden")) {
        contenedorBusqueda?.classList.add("hidden");
      }
    }
  }, [notificacion]);

  const enDispositivoMovil = isMobile();

  return (
    <>
      <Link
        href={enDispositivoMovil ? "/feed/notifications" : ""}
        onClick={funcionEventual}
        className={`${clases} md:flex relative w-6 h-6  lg:py-2 lg:ml-2 lg:mx-0 lg:w-full lg:h-auto md:transform md:-rotate-90 lg:rotate-0 lg:flex lg:flex-row lg:items-center lg:justify-start lg:hover:bg-ring lg:hover:text-white lg:hover:rounded-md`}>
        {notificacion ? (
          <div className="absolute top-0 -right-1 md:left-4 md:-top-1 lg:top-2 lg:left-3">
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
        <BellIcon className="w-full h-full lg:w-6 lg:h-6 shrink-0" />
        <span className="hidden lg:inline-block lg:ml-2 lg:text-base">
          {notifications}
        </span>
      </Link>
    </>
  );
}
