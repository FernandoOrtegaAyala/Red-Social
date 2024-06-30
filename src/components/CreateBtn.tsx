"use client";

import { useEffect, useState } from "react";
import { AlignCenterVerticallyIcon } from "@radix-ui/react-icons";

export default function CreateBtn({ create }: { create: string }) {
  const [modal, setModal] = useState(false);

  const modalContainer = document.getElementById("modalContainer");

  const handleCreateBtn = () => {
    setModal((prevState) => !prevState);
  };

  useEffect(() => {
    if (modalContainer) {
      modalContainer?.classList.toggle("hidden");
      modalContainer?.classList.toggle("flex");
    }
  }, [modal]);

  return (
    <>
      <button
        onClick={handleCreateBtn}
        className="w-6 h-6 mx-3 lg:mx-0 lg:py-2 lg:ml-2 lg:w-full lg:h-auto md:transform md:-rotate-90 lg:rotate-0 lg:flex lg:flex-row lg:items-end lg:justify-start lg:hover:bg-ring lg:hover:text-white lg:hover:rounded-md">
        <AlignCenterVerticallyIcon className="w-full h-full lg:w-6 lg:h-6" />
        <span className="hidden lg:inline-block lg:ml-2 lg:text-base">
          {create}
        </span>
      </button>
    </>
  );
}
