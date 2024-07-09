"use client";

import { useState } from "react";
import { useTheme } from "next-themes";
import { toast, Toaster } from "sonner";

import ShareSVG from "./svg/ShareSVG";

export default function ShareLink({
  share,
  linkCopied,
}: {
  share: string;
  linkCopied: string;
}) {
  const [copied, setCopied] = useState(false);
  const { theme } = useTheme();

  const copyToClipboard = () => {
    const currentUrl = window.location.href;
    navigator.clipboard
      .writeText(currentUrl)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
        toast.success(linkCopied);
      })
      .catch((err) => console.error("Error al copiar la URL: ", err));
  };

  return (
    <>
      <button
        onClick={copyToClipboard}
        className="w-7 h-7 mx-2 flex items-center justify-center.">
        <ShareSVG share={share} />
      </button>
      <Toaster position="top-center" theme={theme} richColors={true} />
    </>
  );
}
