"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";

export default function FollowButtons({message, follow, following}: {message: string; follow: string; following: string}) {
  const [siguiendo, setSiguiendo] = useState(false);

  function handleFollow() {
    setSiguiendo((prevState) => !prevState);
  }

  return (
    <>
      <div className="px-2 mt-2 flex justify-start items-center gap-3">
        <Button
          className="w-1/2 px-0 h-9 font-bold"
          onClick={handleFollow}
          variant={siguiendo ? "secondary" : "default"}>
          {siguiendo ? following : follow}
        </Button>
        <Button className="w-1/2 px-0 h-9 font-bold" variant="outline">
          {message}
        </Button>
      </div>
    </>
  );
}
