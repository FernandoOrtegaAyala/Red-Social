"use client";

import { ChangeEvent, useCallback, useEffect, useRef, useState } from "react";
import { useDropzone } from "react-dropzone";
import { FaPhotoVideo } from "react-icons/fa";

import { Button } from "@/components/ui/button";
import { LayoutGrid } from "@/components/ui/layout-grid";

import LoadingComponent from "./LoadingComponent";
import ModalCancelBtn from "./ModalCancelBtn";

const windowWidth = window.innerWidth;

export default function ModalCreatePost({
  createPost,
  shareWhatYou,
  dragAndDrop,
  maxImg,
  share,
  drop,
  discardChanges,
  youllNeedReload,
  cancel,
  discard,
  uploading,
}: {
  createPost: string;
  shareWhatYou: string;
  dragAndDrop: string;
  maxImg: string;
  share: string;
  drop: string;
  discardChanges: string;
  youllNeedReload: string;
  cancel: string;
  discard: string;
  uploading: string;
}) {
  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
    if (acceptedFiles.length >= 1) {
      setDeshabilitar(true);
      setOnDropError(false);
    } else {
      setOnDropError(true);
    }
  }, []);
  const [deshabilitar, setDeshabilitar] = useState(false);
  const { getRootProps, getInputProps, isDragActive, acceptedFiles } =
    useDropzone({ onDrop, maxFiles: 4, disabled: deshabilitar });
  const [subiendo, setSubiendo] = useState(false);
  const [valor, setValor] = useState("");
  const [modal, setModal] = useState(false);
  const [onDropError, setOnDropError] = useState(false);
  const [objectURLs, setObjectURLs] = useState<
    { url: string; revoke: () => void }[]
  >([]);

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
        setSubiendo(true);
        const res = await fetch(
          "https://api.cloudinary.com/v1_1/duan4ka5v/image/upload",
          {
            method: "POST",
            body: formData,
          }
        );

        if (!res.ok) {
          throw new Error("Error en la solicitud de carga");
        }

        const data = await res.json();
        console.log(data);
        handleRemoveAllURLs();
        postCreado();
        setSubiendo(false);
      } catch (error) {
        console.error("Error al cargar el archivo:", error);
      }
    });
  };

  const modalContainerRef = useRef<HTMLDivElement>(null);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const modalUploadedRef = document.getElementById("modalUploaded");

  const handleSetObjectURL = useCallback(
    (url: string, revokeUrl: () => void) => {
      setObjectURLs((prev) => [...prev, { url, revoke: revokeUrl }]);
    },
    []
  );

  const handleRemoveAllURLs = () => {
    objectURLs.forEach((item) => item.revoke());
    setObjectURLs([]);
    setModal((prevstate) => !prevstate);
    acceptedFiles.splice(0, acceptedFiles.length);
    setDeshabilitar(false);
    setOnDropError(false);
    setValor("");
    clearTextArea();
  };

  const clearTextArea = () => {
    if (textAreaRef.current !== null && textAreaRef.current !== undefined) {
      textAreaRef.current.value = "";
    }
  };

  const postCreado = () => {
    if (modalUploadedRef) {
      modalUploadedRef.classList.toggle("hidden");
      modalUploadedRef.classList.toggle("flex");
    }
  };

  useEffect(() => {
    if (modalContainerRef.current) {
      modalContainerRef.current.classList.toggle("hidden");
      modalContainerRef.current.classList.toggle("flex");
    }
  }, [modal]);

  return (
    <>
      <div
        id="modalContainer"
        ref={modalContainerRef}
        className="hidden z-[60] w-full h-screen fixed inset-0 justify-center items-center overflow-hidden">
        <div
          onClick={handleRemoveAllURLs}
          className="h-screen w-full absolute bg-black bg-opacity-70 inset-0"></div>
        <form
          onSubmit={handleSubmit}
          className={`w-full z-50 lg:w-2/3 lg:max-w-[600px] lg:max-h-[600px] lg:mx-0  flex flex-col items-center justify-center bg-card rounded-lg ${deshabilitar && windowWidth < 768 ? "mx-0 h-full" : "h-2/3 mx-4 md:mx-20  border border-border"} ${onDropError || valor.length > 500 ? "border-red-800 border-2" : ""}`}>
          <div className="relative w-full flex flex-row items-center justify-center">
            <ModalCancelBtn
              handleRemoveAllURLs={handleRemoveAllURLs}
              discardChanges={discardChanges}
              youllNeedReload={youllNeedReload}
              cancel={cancel}
              discard={discard}
            />
            <h3 className="text-2xl font-bold mt-5 mb-3">{createPost}</h3>
          </div>
          <div
            className={`p-4 md:px4 md:pt-0 flex relative pb-5 flex-row w-full bg-card ring-offset-background ${
              valor.length > 500
                ? "border focus-within:ring-red-600 border-red-600"
                : "focus-within:ring-ring"
            } disabled:cursor-not-allowed disabled:opacity-50`}>
            <textarea
              className="h-20 md:h-28 py-2 md:pt-6 w-full resize-none placeholder:text-muted-foreground text-lg font-medium md:text-xl lg:text-lg bg-transparent border-transparent focus:outline-none"
              id="post"
              ref={textAreaRef}
              placeholder={shareWhatYou}
              onChange={handleChange}
            />
            <div
              className={`flex items-end text-xs md:text-base ${
                valor.length > 500 ? "text-red-600" : ""
              }`}>
              <span className="absolute right-2 md:right-4 bottom-0">
                {valor.length}/500
              </span>
            </div>
          </div>
          <div
            className={`bg-card w-full h-full flex flex-col items-center justify-center hover:cursor-pointer ${deshabilitar ? "dropzone disabled" : "px-4"}`}
            {...getRootProps()}>
            <input {...getInputProps()} />
            {deshabilitar ? "" : <FaPhotoVideo className="w-20 h-20" />}
            {!isDragActive ? (
              !deshabilitar ? (
                <div className="flex flex-col">
                  <p className="text-center">{dragAndDrop}</p>
                  <p
                    className={`${onDropError ? "text-red-800 text-xl font-bold" : ""} text-center`}>
                    {maxImg}
                  </p>
                </div>
              ) : (
                ""
              )
            ) : (
              <p>{drop}</p>
            )}
            {deshabilitar ? (
              <LayoutGrid
                cards={acceptedFiles}
                handleSetObjectURL={handleSetObjectURL}
              />
            ) : (
              ""
            )}
          </div>
          <Button
            disabled={
              onDropError || subiendo || valor.length > 500 || !valor
                ? true
                : false
            }
            className={`text-xl font-semibold lg:mb-6 ${deshabilitar ? "mb-5" : "mb-3"}`}
            variant={"default"}>
            {subiendo ? <LoadingComponent text={uploading} /> : share}
          </Button>
        </form>
      </div>
    </>
  );
}
