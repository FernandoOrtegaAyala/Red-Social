"use client";

import { useSession } from "next-auth/react";

export default function Prueba() {
  const { data: session, status } = useSession();
  console.log(session, status);

  return (
    <>
      <div className="bg-green-700 w-full h-screen"></div>
    </>
  );
}
