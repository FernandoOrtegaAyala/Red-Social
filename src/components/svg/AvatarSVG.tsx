"use client";

import { usePathname } from "next/navigation";

export default function AvatarSVG() {
  const pathName = usePathname();

  return (
    <>
      <svg
        className="w-full h-full lg:w-6 lg:h-6 group-hover:text-svgFondo"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24">
        <circle
          cx="12"
          cy="12"
          r="11"
          fill={pathName.includes("/profile") ? "currentColor" : "none"}
          stroke="currentColor"
          stroke-width="2"
        />
        <circle
          cx="12"
          cy="9"
          r="4"
          fill={
            pathName.includes("/profile")
              ? "var(--svg-color-secundario)"
              : "none"
          }
          stroke={
            pathName.includes("/profile")
              ? "var(--svg-color-secundario)"
              : "currentColor"
          }
          strokeWidth={pathName.includes("/profile") ? 1.0 : undefined}
        />
        <ellipse
          cx="12"
          cy="18.4"
          rx="6.949"
          ry="3.949"
          fill={
            pathName.includes("/profile")
              ? "var(--svg-color-secundario)"
              : "none"
          }
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        />
      </svg>
    </>
  );
}
