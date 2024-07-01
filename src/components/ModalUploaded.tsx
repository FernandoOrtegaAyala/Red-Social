"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { GrStatusGood } from "react-icons/gr";

import { Button } from "./ui/button";

export default function ModalUploaded({
  created,
  accept,
}: {
  created: string;
  accept: string;
}) {
  const [modal, setModal] = useState(false);
  const router = useRouter();

  const modalUploadedRef = useRef<HTMLDivElement>(null);

  const handleModalUploaded = () => {
    setModal((prevState) => !prevState);
    router.refresh();
  };

  useEffect(() => {
    if (modalUploadedRef.current) {
      modalUploadedRef.current.classList.toggle("hidden");
      modalUploadedRef.current.classList.toggle("flex");
    }
  }, [modal]);

  return (
    <>
      <div
        id="modalUploaded"
        ref={modalUploadedRef}
        className="hidden w-full h-screen z-[350] bg-black bg-opacity-60 fixed inset-0 justify-center items-center">
        <div className="w-full mx-4 md:w-2/5 md:mx-0 lg:w-[400px] z-[400] h-auto bg-background rounded-md flex flex-col items-center justify-center gap-5 py-6 px-4 border border-border">
          <p className="text-3xl font-bold text-center">{created}</p>
          <GrStatusGood className="text-green-700 w-16 h-16 animate-rotate-y animate-twice animate-ease-out" />
          <Button onClick={handleModalUploaded} variant={"outline"}>
            {accept}
          </Button>
        </div>
      </div>
    </>
  );
}
