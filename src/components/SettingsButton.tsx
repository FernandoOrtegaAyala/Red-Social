"use client";

import Link from "next/link";
import { isMobile } from "@/helpers/knowDevice";

import GearSVG from "@/components/svg/GearSVG";

export default function SettingsButton({ settings1 }: { settings1: string }) {
  const enDispositivoMovil = isMobile();
  return (
    <>
      <Link
        href={enDispositivoMovil ? "/feed/settings" : "/feed/settings/edit"}
        className="w-6 h-6 mx-3 lg:mx-0 lg:py-2 lg:ml-2 lg:w-full lg:h-auto md:transform md:-rotate-90 lg:rotate-0 lg:flex lg:flex-row lg:items-end lg:justify-start lg:hover:bg-ring lg:hover:text-white lg:hover:rounded-md">
        <GearSVG />
        <span className="hidden lg:inline-block lg:ml-2 lg:text-base">
          {settings1}
        </span>
      </Link>
    </>
  );
}
