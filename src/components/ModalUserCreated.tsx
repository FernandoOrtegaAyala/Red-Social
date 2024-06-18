"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { GrStatusGood } from "react-icons/gr";

export default function ModalUserCreated({
  accountCreated,
  goToLogin,
}: {
  accountCreated: string;
  goToLogin: string;
}) {
  const [modal, setModal] = useState(false);

  const modalCreatedRef = useRef<HTMLDivElement>(null);

  const handleModalUploaded = () => {
    setModal(false);
  };

  useEffect(() => {
    if (modalCreatedRef.current) {
      modalCreatedRef.current.classList.toggle("hidden");
      modalCreatedRef.current.classList.toggle("flex");
    }
  }, [modal]);

  return (
    <>
      <div
        id="modalCreated"
        ref={modalCreatedRef}
        className="hidden w-full h-full z-[350] bg-black bg-opacity-60 absolute inset-0 justify-center items-end md:items-center pb-80 md:pb-0">
        <div className="w-full mx-4 md:w-3/5 md:mx-0 lg:w-[400px] z-[400] h-auto bg-background rounded-md flex flex-col items-center justify-center gap-5 py-6 px-4 border border-border">
          <p className="text-2xl font-semibold text-center">{accountCreated}</p>
          <GrStatusGood className="text-green-700 w-16 h-16 animate-rotate-y animate-twice animate-ease-out" />
          <Link
            href={"/"}
            className="font-normal px-5 py-2 text-lg bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center whitespace-nowrap rounded-md ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
            onClick={handleModalUploaded}>
            {goToLogin}
          </Link>
        </div>
      </div>
    </>
  );
}
