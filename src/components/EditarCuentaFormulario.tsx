"use client";

import { ChangeEvent, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { Button } from "./ui/button";

export default function EditarCuentaFormulario({
  userName,
  firstName,
  lastName,
  bio,
  saveChanges,
}: {
  userName: string;
  firstName: string;
  lastName: string;
  bio: string;
  saveChanges: string;
}) {
  const [valor, setValor] = useState("");

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setValor(event.target.value);
  };


  return (
    <>
      <form method="POST">
        <div className="grid gap-2 mt-8 md:mt-10">
          <Label className="text-xs md:text-base" htmlFor="nombre_usuario">
            {userName}
          </Label>
          <Input
            className="text-xs md:text-base"
            id="nombre_usuario"
            type="text"
            placeholder="Nombre de usuario actual"
          />
        </div>
        <div className="grid gap-2 mt-3 md:mt-5">
          <Label className="text-xs md:text-base" htmlFor="nombre">
            {firstName}
          </Label>
          <Input
            className="text-xs md:text-base"
            id="nombre"
            type="text"
            placeholder="Nombre actual"
          />
        </div>
        <div className="grid gap-2 mt-3 md:mt-5">
          <Label className="text-xs md:text-base" htmlFor="apellidos">
            {lastName}
          </Label>
          <Input
            className="text-xs md:text-base"
            id="apellidos"
            type="text"
            placeholder="Apellidos actuales"
          />
        </div>
        <div className="grid gap-2 mt-3 mb-14 md:mb-0 md:mt-5 h-auto">
          <Label className="text-xs md:text-base" htmlFor="biografía">
            {bio}
          </Label>
          <div
            className={`p-2 flex flex-row w-full rounded-md border border-input bg-background ring-offset-background ${
              valor.length > 150
                ? "focus-within:ring-red-600 border-red-600"
                : "focus-within:ring-ring"
            } focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50`}>
            <textarea
              className="h-24 md:h-36 py-2 w-full resize-none placeholder:text-muted-foreground text-sm md:text-base lg:text-lg bg-transparent border-transparent focus:outline-none"
              id="biografía"
              placeholder="Biografía actual"
              onChange={handleChange}
            />
            <div
              className={`flex items-end text-xs md:text-base ${
                valor.length > 150 ? "text-red-600" : ""
              }`}>
              <span>{valor.length}/150</span>
            </div>
          </div>
          <div className="hidden w-full md:flex justify-end md:mt-8 ">
            <Button className="w-1/3">{saveChanges}</Button>
          </div>
        </div>
      </form>
    </>
  );
}
