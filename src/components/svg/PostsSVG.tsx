"use client";

import { usePathname } from "next/navigation";

export default function PostsSVG() {
  const pathName = usePathname();
  return (
    <>
      <svg
        aria-label="Publicaciones"
        fill="currentColor"
        className="w-7 h-7"
        height="24"
        role="img"
        viewBox="0 0 24 24"
        width="24">
        <rect
          fill="none"
          height="18"
          stroke={
            pathName.endsWith("profile") ? "rgb(0, 192, 240)" : "currentColor"
          }
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          width="18"
          x="3"
          y="3"></rect>
        <line
          fill="none"
          stroke={
            pathName.endsWith("profile") ? "rgb(0, 192, 240)" : "currentColor"
          }
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          x1="9.015"
          x2="9.015"
          y1="3"
          y2="21"></line>
        <line
          fill="none"
          stroke={
            pathName.endsWith("profile") ? "rgb(0, 192, 240)" : "currentColor"
          }
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          x1="14.985"
          x2="14.985"
          y1="3"
          y2="21"></line>
        <line
          fill="none"
          stroke={
            pathName.endsWith("profile") ? "rgb(0, 192, 240)" : "currentColor"
          }
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          x1="21"
          x2="3"
          y1="9.015"
          y2="9.015"></line>
        <line
          fill="none"
          stroke={
            pathName.endsWith("profile") ? "rgb(0, 192, 240)" : "currentColor"
          }
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          x1="21"
          x2="3"
          y1="14.985"
          y2="14.985"></line>
      </svg>
    </>
  );
}
