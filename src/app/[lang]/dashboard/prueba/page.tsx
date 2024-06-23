"use client";

import { useSession } from "next-auth/react";

export default function Dashboard() {
  const { data: session, status } = useSession();
  console.log(session, status);

  return (
    <>
      <div className="bg-purple-600 flex items-center justify-center w-full h-screen">
        <p className="text-center w-auto h-auto text-5xl">Prueba</p>
      </div>
    </>
  );
}
