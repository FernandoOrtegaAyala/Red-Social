"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

import LoadingComponent from "./LoadingComponent";
import { Button } from "./ui/button";

export default function ChangePhoto({
  changePhoto,
  uploading,
  uploadingError,
  user,
}: {
  changePhoto: string;
  uploading: string;
  uploadingError: string;
  user: any;
}) {
  const fileInputRef = useRef(null);

  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("");
  const [subiendo, setSubiendo] = useState(false);
  const [error, setError] = useState(false);
  const router = useRouter();

  const handleFileChange = async (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setSubiendo(true);
      setFile(selectedFile);
      setFileName(selectedFile.name);
      const formData = new FormData();
      formData.append("file", selectedFile);
      formData.append("upload_preset", "jwc0oyua");
      formData.append("api_key", process.env.API_KEY);
      try {
        const res = await fetch(
          "https://api.cloudinary.com/v1_1/duan4ka5v/image/upload",
          {
            method: "POST",
            body: formData,
          }
        );

        if (!res.ok) {
          setError(true);
        }

        const data = await res.json();
        // console.log(data.secure_url);
        setSubiendo(false);
        try {
          const resMyAPI = await fetch("http://localhost:3000/api/user", {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              id_usuario: user.id_usuario,
              avatar: data.secure_url,
            }),
          });

          if (!resMyAPI.ok) {
            setError(true);
          }

          const resData = await resMyAPI.json();
          // console.log(resData);
          router.refresh();
        } catch (error) {
          setError(true);
          console.error("Error de la API:", error);
        }
      } catch (error) {
        setError(true);
        console.error("Error al cargar el archivo:", error);
      }
    } else {
      setFile(null);
      setFileName("No se ha seleccionado ningún archivo");
    }
  };

  useEffect(() => {
    console.log(file);
    console.log(fileName);
  }, [file]);

  return (
    <>
      <input
        ref={fileInputRef}
        className="hidden"
        id="fileInput"
        type="file"
        accept="image/*"
        onChange={handleFileChange}
      />
      {error ? (
        <p className="text-red-600 ml-4 md:absolute md:-top-6 md:right-0 md:ml-0 lg:static ">
          {uploadingError}
        </p>
      ) : null}
      <Button
        disabled={subiendo ? true : false}
        className="md:mr-4"
        onClick={() => fileInputRef.current?.click()}>
        {subiendo ? <LoadingComponent text={uploading} /> : changePhoto}
      </Button>
    </>
  );
}
