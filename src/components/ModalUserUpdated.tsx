"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { GrStatusGood } from "react-icons/gr";

import { Button } from "./ui/button";

export default function ModalUserUpdated({
  userUpdated,
  accept,
}: {
  userUpdated: string;
  accept: string;
}) {
  const [modal, setModal] = useState(false);
  const router = useRouter();

  const modalUpdatedRef = useRef<HTMLDivElement>(null);

  const handleModalUploaded = () => {
    setModal((prevState) => !prevState);
    router.refresh();
  };

  useEffect(() => {
    if (modalUpdatedRef.current) {
      modalUpdatedRef.current.classList.toggle("hidden");
      modalUpdatedRef.current.classList.toggle("flex");
    }
  }, [modal]);

  return (
    <>
      <div
        id="modalUpdated"
        ref={modalUpdatedRef}
        className="hidden w-full h-full z-[350] bg-black bg-opacity-60 fixed inset-0 justify-center items-center">
        <div className="w-full mx-4 md:w-3/5 md:mx-0 lg:w-[600px] z-[400] h-auto bg-background rounded-md flex flex-col items-center justify-center gap-5 py-6 px-4 border border-border">
          <p className="text-2xl lg:text-3xl font-semibold text-center">
            {userUpdated}
          </p>
          <GrStatusGood className="text-green-700 w-16 h-16 animate-rotate-y animate-twice animate-ease-out" />
          <Button
            className="font-normal px-4 py-2 text-lg bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center whitespace-nowrap rounded-md ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
            onClick={handleModalUploaded}>
            {accept}
          </Button>
        </div>
      </div>
    </>
  );
}
