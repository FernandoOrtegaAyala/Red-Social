"use client";

import { useEffect, useState } from "react";

import CommentSVG from "./svg/CommentSVG";

export default function Comment({ comment }: { comment: string }) {
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
      <button
        onClick={handleClick}
        className="w-7 h-7 mx-2 flex items-center justify-center">
        <CommentSVG comment={comment} color="currentColor" />
      </button>
    </>
  );
}
