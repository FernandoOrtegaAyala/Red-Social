"use client";

import { useRouter } from "next/navigation";
import { Label } from "@radix-ui/react-label";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function PruebaReg() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();

  const onSubmit = handleSubmit(async (data) => {
    if (data.password !== data.confirmPassword) {
      return alert("Las contraseñas no coinciden");
    }

    const res = await fetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify({
        username: data.username,
        email: data.email,
        password: data.password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.ok) {
      router.push("/");
    }
  });

  return (
    <>
      <div className="h-screen w-full bg-background flex items-center justify-center">
        <form
          onSubmit={onSubmit}
          className="w-auto h-auto gap-4 flex flex-col items-center justify-center">
          <Label htmlFor="username">Username</Label>
          <Input
            type="text"
            {...register("username", {
              required: {
                value: true,
                message: "Campo requerido",
              },
            })}
          />
          {errors.username && (
            <span className="text-red-600">{errors.username.message}</span>
          )}
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            {...register("email", {
              required: true,
            })}
          />
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            {...register("password", {
              required: true,
            })}
          />
          <Label htmlFor="confirmPassword">Confirm password</Label>
          <Input
            type="password"
            {...register("confirmPassword", {
              required: true,
            })}
          />
          <Button>Registrar</Button>
        </form>
      </div>
    </>
  );
}
