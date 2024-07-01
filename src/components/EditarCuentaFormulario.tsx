"use client";

import { ChangeEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import LoadingComponent from "./LoadingComponent";
import { Button } from "./ui/button";

export default function EditarCuentaFormulario({
  userName,
  firstName,
  lastName,
  bio,
  saveChanges,
  requiredUsername,
  requiredName,
  requiredLastName,
  user,
  updatingData,
}: {
  userName: string;
  firstName: string;
  lastName: string;
  bio: string;
  saveChanges: string;
  requiredUsername: string;
  requiredName: string;
  requiredLastName: string;
  user: any;
  updatingData: any;
}) {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const router = useRouter();

  const [valor, setValor] = useState("");
  const [actualizando, setActualizando] = useState(false);
  const [modal, setModal] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setValor(event.target.value);
  };
  const modalUserUpdatedRef = document.getElementById("modalUpdated");

  const onSubmit = handleSubmit(async (data) => {
    setActualizando(true);
    const newData = { ...data, id_usuario: user.id_usuario };
    try {
      const res = await fetch("http://localhost:3000/api/user", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newData),
      });

      if (!res.ok) {
        throw new Error("Error trying to update user");
      }

      setModal((prevState) => !prevState);
      const resData = await res.json();
      setActualizando(false);
      console.log(resData);
    } catch (error) {
      console.error("Error al cargar el archivo:", error);
    }
  });

  useEffect(() => {
    setValue("nombre_usuario", user.nombre_usuario);
    setValue("nombre", user.nombre);
    setValue("apellidos", user.apellidos);
    setValue("bio", user.bio);
  }, [setValue]);

  useEffect(() => {
    if (modalUserUpdatedRef) {
      modalUserUpdatedRef.classList.toggle("hidden");
      modalUserUpdatedRef.classList.toggle("flex");
    }
  }, [modal]);

  return (
    <>
      <form onSubmit={onSubmit} noValidate>
        <div className="grid gap-2 mt-8 md:mt-10">
          {errors.nombre_usuario && (
            <span className="text-red-600">
              {errors.nombre_usuario.message}
            </span>
          )}
          <Label className="text-xs md:text-base" htmlFor="nombre_usuario">
            {userName}
          </Label>
          <Input
            {...register("nombre_usuario", {
              required: {
                value: true,
                message: requiredUsername,
              },
            })}
            className="text-xs md:text-base text-muted-foreground"
            type="text"
          />
        </div>
        <div className="grid gap-2 mt-3 md:mt-5">
          {errors.nombre && (
            <span className="text-red-600">{errors.nombre.message}</span>
          )}
          <Label className="text-xs md:text-base" htmlFor="nombre">
            {firstName}
          </Label>
          <Input
            className="text-xs md:text-base text-muted-foreground"
            {...register("nombre", {
              required: {
                value: true,
                message: requiredName,
              },
            })}
            type="text"
          />
        </div>
        <div className="grid gap-2 mt-3 md:mt-5">
          {errors.apellidos && (
            <span className="text-red-600">{errors.apellidos.message}</span>
          )}
          <Label className="text-xs md:text-base" htmlFor="apellidos">
            {lastName}
          </Label>
          <Input
            className="text-xs md:text-base text-muted-foreground"
            {...register("apellidos", {
              required: {
                value: true,
                message: requiredLastName,
              },
            })}
            type="text"
          />
        </div>
        <div className="grid gap-2 mt-3 mb-14 md:mb-0 md:mt-5 h-auto">
          <Label className="text-xs md:text-base" htmlFor="bio">
            {bio}
          </Label>
          <div
            className={`p-2 flex flex-row w-full rounded-md border border-input bg-background ring-offset-background ${
              valor.length > 150
                ? "focus-within:ring-red-600 border-red-600"
                : "focus-within:ring-ring"
            } focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50`}>
            <textarea
              className="h-24 md:h-36 py-2 w-full resize-none text-muted-foreground text-sm md:text-base lg:text-lg bg-transparent border-transparent focus:outline-none"
              {...register("bio")}
              onChange={handleChange}
            />
            <div
              className={`flex items-end text-xs md:text-base ${
                valor.length > 150 ? "text-red-600" : ""
              }`}>
              <span>{valor.length}/150</span>
            </div>
          </div>
          <div className="w-full flex justify-end mt-8 ">
            <Button
              className="w-auto md:w-1/3"
              disabled={actualizando ? true : false}>
              {actualizando ? (
                <LoadingComponent text={updatingData} />
              ) : (
                saveChanges
              )}
            </Button>
          </div>
        </div>
      </form>
    </>
  );
}
