"use client"

import { FaPhotoVideo } from "react-icons/fa";
import { useCallback, useState, ChangeEvent, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { Cross1Icon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { LayoutGrid } from "@/components/ui/layout-grid";

const windowWidth = window.innerWidth;

export default function ModalCreatePost() {
  const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
    setDeshabilitar(true)
  }, [])
  const [deshabilitar, setDeshabilitar] = useState(false);
  const {getRootProps, getInputProps, isDragActive, acceptedFiles} = useDropzone({onDrop, maxFiles:4, disabled: deshabilitar})
  const [valor, setValor] = useState("");
  const [modal, setModal] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setValor(event.target.value);
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    acceptedFiles.forEach(async (file) => {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "jwc0oyua");
      formData.append("api_key", process.env.API_KEY);

      try {
        const res = await fetch("https://api.cloudinary.com/v1_1/duan4ka5v/image/upload", {
          method: "POST",
          body: formData,
        });

        if (!res.ok) {
          throw new Error("Error en la solicitud de carga");
        }

        const data = await res.json();
        console.log(data);
      } catch (error) {
        console.error("Error al cargar el archivo:", error);
      }
    });
  };

  const modalContainer = document.getElementById("modalContainer");

  const handleCreateBtn = () => {
    setModal(prevState => !prevState)
  }
  
  useEffect(() => {
    if (modalContainer) {
      modalContainer?.classList.toggle("hidden");
      modalContainer?.classList.toggle("flex");
    }
  }, [modal]);

  return (
    <>
      <div id="modalContainer" className="hidden z-10 w-full h-screen absolute inset-0 justify-center items-center overflow-hidden">
        <div onClick={handleCreateBtn} className="h-screen w-full absolute bg-black bg-opacity-70 inset-0">

        </div>
        <form onSubmit={handleSubmit} className={`w-full z-50 lg:w-2/3 lg:max-w-[600px] lg:max-h-[600px] lg:mx-0  flex flex-col items-center justify-center bg-card rounded-lg ${deshabilitar && windowWidth < 768 ? "mx-0 h-full" : "h-2/3 mx-4 md:mx-20  border border-border"}`}>
          <div className="relative w-full flex flex-row items-center justify-center">
            <button onClick={handleCreateBtn} className="w-6 h-6 absolute top-5 right-5">
              <Cross1Icon className="w-full h-full"/>
            </button>
            <h3 className="text-2xl font-bold mt-5 mb-3">Crear post</h3>
          </div>
          <div
            className={`p-4 md:px4 md:pt-0 flex relative pb-5 flex-row w-full bg-card ring-offset-background ${
              valor.length > 500
                ? "border focus-within:ring-red-600 border-red-600"
                : "focus-within:ring-ring"
            } disabled:cursor-not-allowed disabled:opacity-50`}>
            <textarea
              className="h-20 md:h-28 py-2 md:pt-6 w-full resize-none placeholder:text-muted-foreground text-lg font-medium md:text-xl lg:text-lg bg-transparent border-transparent focus:outline-none"
              id="biografía"
              placeholder="Comparte lo que sientes"
              onChange={handleChange}
            />
            <div
              className={`flex items-end text-xs md:text-base ${
                valor.length > 500 ? "text-red-600" : ""
              }`}>
              <span className="absolute right-2 bottom-0">{valor.length}/500</span>
            </div>
          </div>
          <div className={`bg-card w-full h-full flex flex-col items-center justify-center hover:cursor-pointer ${deshabilitar ? "dropzone disabled" : "px-4"}`} {...getRootProps()}>
            <input {...getInputProps()} />
            {
              deshabilitar ? "" : <FaPhotoVideo className="w-20 h-20"/>
            }
            {
              !isDragActive ? (
                !deshabilitar ? (<div className="flex flex-col">
                  <p className="text-center">Drag and drop files here, or click to select files.</p>
                  <p className="text-center">4 imagenes maximo</p>
                </div>): ""
              ): (
                <p>Drop the files here ...</p>
              )
            }
            {deshabilitar ? (
              <LayoutGrid cards={acceptedFiles} />
            ) : ""}
          </div>
          <Button className={`text-xl font-semibold lg:mb-6 ${deshabilitar ? "mb-5" : "mb-3"}`} variant={"default"}>Compartir</Button>
        </form>
      </div>
    </>
  )
}