"use client";

import { useEffect, useState } from "react";
import { GoCommentDiscussion } from "react-icons/go";

export default function EmptyComments({
  emptyComments,
}: {
  emptyComments: String;
}) {
  const [click, setClick] = useState(false);
  const makeCommentRef = document.getElementById("makeComment");

  const handleClick = () => {
    setClick((prevState) => !prevState);
  };

  useEffect(() => {
    makeCommentRef?.focus();
  }, [click]);

  return (
    <>
      <div
        onClick={handleClick}
        className="w-full h-40 px-10 bg-background flex flex-col justify-center items-center text-center gap-2 hover:cursor-pointer select-none">
        <p className="text-base lg:text-lg">{emptyComments}</p>
        <GoCommentDiscussion className="w-10 h-10" />
      </div>
    </>
  );
}
