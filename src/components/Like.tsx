"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function Like({
  id,
  user,
  somethingWrong,
}: {
  id: string;
  user: any;
  somethingWrong: string;
}) {
  const [liked, setLiked] = useState(false);
  const router = useRouter();

  const handleClick = (event) => {
    event.stopPropagation();
  };

  async function registerLike() {
    if (!liked) {
      try {
        const response = await fetch("/api/like", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id_post: parseInt(id, 10),
            id_usuario: parseInt(user.id_usuario, 10),
          }),
        });

        if (response.ok) {
          console.log("Like registered!");
          router.refresh();
          setLiked(true);
        } else {
          console.error(somethingWrong);
          toast.error(somethingWrong);
        }
      } catch (error) {
        console.error(error);
        toast.error(somethingWrong);
      }
    } else {
      try {
        const response = await fetch("/api/like", {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id_usuario: parseInt(user.id_usuario, 10),
          }),
        });

        if (response.ok) {
          console.log("Like deleted!");
          setLiked(false);
          router.refresh();
        } else {
          console.error("Error deleting like");
          toast.error(somethingWrong);
        }
      } catch (error) {
        console.error("Error deleting like");
        toast.error(somethingWrong);
      }
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/like?idUsuario=42", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!response.ok) {
          toast.error("Network response was not ok");
        }
        const result = await response.json();
        if (result) {
          setLiked(true);
        } else {
          setLiked(false);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    console.log(liked);
  }, [liked]);

  return (
    <>
      <div
        onClick={registerLike}
        className="w-auto h-auto z-10 absolute left-0 top-0">
        <button onClick={handleClick} className="like-button">
          <div className="like-wrapper">
            <div className="ripple"></div>
            <svg className="heart" width="24" height="24" viewBox="0 0 24 24">
              <path
                fill={liked ? "#ea442b" : "transparent"}
                d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"></path>
            </svg>
          </div>
        </button>
      </div>
    </>
  );
}
