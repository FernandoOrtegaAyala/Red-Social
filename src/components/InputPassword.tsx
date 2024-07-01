"use client";

import { useState } from "react";
import { EyeNoneIcon, EyeOpenIcon } from "@radix-ui/react-icons";
import { Label } from "@radix-ui/react-label";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

export default function InputPassword({
  txt,
  htmlForTxt,
  mensaje,
  register,
  errors,
}: {
  txt: string;
  htmlForTxt: string;
  mensaje: string;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
}) {
  const [showPassword, setShowPassword] = useState(false);
  const [inputType, setInputType] = useState("password");

  const togglePasswordVisibility = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    setInputType((prevInputType) =>
      prevInputType === "password" ? "text" : "password"
    );
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <>
      <div className="grid gap-2">
        {errors[htmlForTxt] && (
          <span className="text-red-600">{errors[htmlForTxt]?.message}</span>
        )}
        <Label htmlFor={htmlForTxt}>{txt}</Label>
        <div
          id="contraseñaContenedor"
          className="flex flex-row items-center
            rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-within:outline-none focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full ">
          <input
            className="w-full bg-transparent border-transparent focus:outline-none"
            type={inputType}
            id={htmlForTxt}
            {...register(htmlForTxt, {
              required: {
                value: true,
                message: mensaje,
              },
            })}
          />
          <div className="w-4 h-4">
            <button
              className="inline-block w-5"
              onClick={togglePasswordVisibility}>
              <EyeOpenIcon
                id="ojoAbierto"
                className={`h-[1.2rem] w-[1.2rem] rotate-0 scale-0 transition-all ${
                  showPassword ? "rotate-180 scale-100" : "hidden"
                }`}
              />
              <EyeNoneIcon
                id="ojoCerrado"
                className={`h-[1.2rem] w-[1.2rem] rotate-0 scale-0 transition-all ${
                  !showPassword ? "rotate-180 scale-100" : "hidden"
                }`}
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
