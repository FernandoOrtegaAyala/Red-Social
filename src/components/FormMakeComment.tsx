"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { BsArrowUpCircleFill } from "react-icons/bs";
import { toast } from "sonner";

import LoadingComponent from "./LoadingComponent";

export default function FormMakeComment({
  addComment,
  somethingWrong,
  id,
  user,
}: {
  addComment: string;
  somethingWrong: string;
  id: string;
  user: any;
}) {
  const [uploading, setUploading] = useState<boolean>(false);
  const { register, handleSubmit, reset } = useForm();
  const router = useRouter();
  const commentsContainer = document.getElementById("comments");

  const onSubmit = handleSubmit(async (data) => {
    setUploading(true);
    const newData = {
      ...data,
      id_post: parseInt(id, 10),
      id_usuario: user.id_usuario,
    };
    try {
      const response = await fetch("/api/comment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newData),
      });

      if (response.ok) {
        console.log("Comment registered!");
        router.refresh();
        setUploading(false);
        reset();
      } else {
        console.error(somethingWrong);
        toast.error(somethingWrong);
        setUploading(false);
      }
    } catch (error) {
      console.error(error);
      toast.error(somethingWrong);
    }
  });

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      onSubmit();
      reset();
    }
  };

  useEffect(() => {
    if (commentsContainer) {
      setTimeout(() => {
        commentsContainer.scrollTop = commentsContainer.scrollHeight;
      }, 1000);
    }
  }, [uploading]);

  return (
    <>
      <form
        onSubmit={onSubmit}
        className="flex items-center w-full border border-border rounded-md ring-offset-background focus-visible:outline-none focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2">
        <textarea
          {...register("makeComment", {
            required: true,
          })}
          id="makeComment"
          onKeyDown={handleKeyPress}
          placeholder={addComment}
          className="h-12 md:h-16 lg:h-24 resize-none lg:text-lg w-full bg-transparent px-2 py-1 focus:outline-none focus:ring-0 focus:border-transparent "
        />
        <button className="w-8 h-8 lg:w-10 lg:h-10 mx-4">
          {uploading ? (
            <LoadingComponent text="" />
          ) : (
            <BsArrowUpCircleFill className="text-primary w-full h-full" />
          )}
        </button>
      </form>
    </>
  );
}
