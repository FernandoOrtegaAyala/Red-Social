"use client"
import { FaPhotoVideo } from "react-icons/fa";
import { useCallback, useState, ChangeEvent } from "react";
import { useDropzone } from "react-dropzone";
import { Cross1Icon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
export default function Prueba() {
  const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
    console.log(acceptedFiles)
  }, [])
  const {getRootProps, getInputProps, isDragActive, acceptedFiles} = useDropzone({onDrop, maxFiles:3})
  const [valor, setValor] = useState("");

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

  
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center bg-background">
        <form onSubmit={handleSubmit} className="w-full mx-4 h-2/3 flex flex-col items-center justify-center bg-card border border-border rounded-lg">
          <div className="relative w-full flex flex-row items-center justify-center">
            <Cross1Icon className="w-6 h-6 absolute top-5 right-5"/>
            <h3 className="text-2xl font-bold mt-5 mb-3">Crear post</h3>
          </div>
          <div
            className={`p-4 flex relative pb-5 flex-row w-full bg-card ring-offset-background ${
              valor.length > 500
                ? "border focus-within:ring-red-600 border-red-600"
                : "focus-within:ring-ring"
            } disabled:cursor-not-allowed disabled:opacity-50`}>
            <textarea
              className="h-24 md:h-36 py-2 w-full resize-none placeholder:text-muted-foreground text-lg md:text-base lg:text-lg bg-transparent border-transparent focus:outline-none"
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
          <div className="bg-card w-full h-full flex flex-col items-center justify-center" {...getRootProps()}>
            <input {...getInputProps()} />
            <FaPhotoVideo className="w-20 h-20"/>
            {
              isDragActive ?
                <p>Drop the files here ...</p> :
                <p className="text-center">Drag and drop files here, or click to select files</p>
            }
          </div>
          {acceptedFiles && (
            acceptedFiles.map(file => (<img src={URL.createObjectURL(file)} alt="" 
            style={{
              width: '300px',
              height: '300px'
            }}
          />)

            )

          
        )}
          <Button className="text-xl mt-10 mb-5 font-semibold" variant={"default"}>Publicar</Button>
        </form>
      </div>
    </>
  )
}