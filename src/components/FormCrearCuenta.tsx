"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { RiShieldUserFill } from "react-icons/ri";

import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import ModalUserCreated from "@/components/ModalUserCreated";

import InputPassword from "./InputPassword";
import LoadingComponent from "./LoadingComponent";
import SelectsNacimiento from "./SelectsNacimiento";

export default function FormCrearCuenta({
  goToLogin,
  accountCreated,
  emailAlreadyExists,
  userAlreadyExists,
  signUp,
  firstName,
  lastName,
  userName,
  userNamePlaceholder,
  email,
  emailExample,
  password,
  alreadyHaveAccount,
  signUpAlternative,
  confirmPassword,
  guest,
  birthday,
  year,
  month,
  january,
  february,
  march,
  april,
  may,
  june,
  july,
  august,
  september,
  october,
  november,
  december,
  day,
  requiredName,
  requiredLastName,
  requiredUsername,
  requiredEmail,
  requiredFormatEmail,
  requiredPassword,
  requiredConfirmPassword,
  requiredYear,
  requiredMonth,
  requiredDay,
  passwordsDontMatch,
  creatingAccount,
}: {
  goToLogin: string;
  accountCreated: string;
  emailAlreadyExists: string;
  userAlreadyExists: string;
  signUp: string;
  firstName: string;
  lastName: string;
  userName: string;
  userNamePlaceholder: string;
  email: string;
  emailExample: string;
  password: string;
  alreadyHaveAccount: string;
  signUpAlternative: string;
  guest: string;
  birthday: string;
  year: string;
  confirmPassword: string;
  month: string;
  january: string;
  february: string;
  march: string;
  april: string;
  may: string;
  june: string;
  july: string;
  august: string;
  september: string;
  october: string;
  november: string;
  december: string;
  day: string;
  requiredName: string;
  requiredLastName: string;
  requiredUsername: string;
  requiredEmail: string;
  requiredFormatEmail: string;
  requiredPassword: string;
  requiredConfirmPassword: string;
  requiredYear: string;
  requiredMonth: string;
  requiredDay: string;
  passwordsDontMatch: string;
  creatingAccount: string;
}) {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const [passwordsDiferentes, setPasswordsDiferentes] = useState(false);
  const [userExists, setUserExists] = useState(false);
  const [emailExists, setEmailExists] = useState(false);
  const [creando, setCreando] = useState(false);
  const [modal, setModal] = useState(false);

  const modalCreatedRef = document.getElementById("modalCreated");

  const onSubmit = handleSubmit(async (data) => {
    setCreando(true);

    if (data.password !== data.confirmarContraseña) {
      setPasswordsDiferentes(true);
      setCreando(false);
    }
    setPasswordsDiferentes(false);
    const formattedDateString = `${data.año}-${data.mes}-${data.dia}`;
    const formattedDate = new Date(formattedDateString).toISOString();
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify({
        nombre_usuario: data.nombre_usuario,
        nombre: data.nombre,
        apellidos: data.apellidos,
        email: data.email,
        password: data.password,
        cumpleanos: formattedDate,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const resJson = await res.json();
    setCreando(false);
    console.log(resJson);
    switch (res.status) {
      case 200:
        setModal(true);
        setUserExists(false);
        setEmailExists(false);

        break;
      case 422:
        setUserExists(true);
        setEmailExists(false);

        break;
      case 409:
        setEmailExists(true);
        setUserExists(false);

        break;

      default:
        setUserExists(false);
        setEmailExists(false);
        break;
    }
  });
  useEffect(() => {
    if (modalCreatedRef) {
      modalCreatedRef.classList.toggle("hidden");
      modalCreatedRef.classList.toggle("flex");
    }
  }, [modal]);

  return (
    <div className="w-full h-full ">
      <ModalUserCreated goToLogin={goToLogin} accountCreated={accountCreated} />
      <Card className="">
        <form onSubmit={onSubmit} noValidate>
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl text-center">{signUp}</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="flex flex-col">
              {errors.nombre && (
                <span className="text-red-600">{errors.nombre.message}</span>
              )}
              {errors.apellidos && (
                <span className="text-red-600">{errors.apellidos.message}</span>
              )}
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="nombre">{firstName}</Label>
                <Input
                  type="text"
                  id="nombre"
                  placeholder={firstName}
                  {...register("nombre", {
                    required: {
                      value: true,
                      message: requiredName,
                    },
                  })}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="apellidos">{lastName}</Label>
                <Input
                  type="text"
                  placeholder={lastName}
                  {...register("apellidos", {
                    required: {
                      value: true,
                      message: requiredLastName,
                    },
                  })}
                />
              </div>
            </div>
            <div className="grid gap-2">
              {errors.nombre && (
                <span className="text-red-600">
                  {errors.nombre_usuario.message}
                </span>
              )}
              {userExists ? (
                <span className="text-red-600">{userAlreadyExists}</span>
              ) : null}
              <Label htmlFor="nombre_usuario">{userName}</Label>
              <Input
                type="text"
                placeholder={userNamePlaceholder}
                {...register("nombre_usuario", {
                  required: {
                    value: true,
                    message: requiredUsername,
                  },
                })}
              />
            </div>
            <div className="grid gap-2">
              {emailExists && (
                <span className="text-red-600">{emailAlreadyExists}</span>
              )}
              {errors.email && (
                <span className="text-red-600">{errors.email.message}</span>
              )}
              <Label htmlFor="email">{email}</Label>
              <Input
                type="email"
                placeholder={emailExample}
                {...register("email", {
                  required: {
                    value: true,
                    message: requiredEmail,
                  },
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: requiredFormatEmail,
                  },
                })}
              />
            </div>
            {passwordsDiferentes && (
              <span className="text-red-600">{passwordsDontMatch}</span>
            )}
            <InputPassword
              txt={password}
              htmlForTxt="password"
              register={register}
              errors={errors}
              mensaje={requiredPassword}
            />
            <InputPassword
              txt={confirmPassword}
              htmlForTxt="confirmarContraseña"
              register={register}
              errors={errors}
              mensaje={requiredConfirmPassword}
            />
            <SelectsNacimiento
              setValue={setValue}
              birthday={birthday}
              year={year}
              month={month}
              january={january}
              february={february}
              march={march}
              april={april}
              may={may}
              june={june}
              july={july}
              august={august}
              september={september}
              october={october}
              november={november}
              december={december}
              day={day}
              register={register}
              errors={errors}
              requiredYear={requiredYear}
              requiredMonth={requiredMonth}
              requiredDay={requiredDay}
            />
            <CardFooter className="gap-4 mt-2">
              <Button
                disabled={creando ? true : false}
                variant="default"
                className="w-full">
                {creando ? <LoadingComponent text={creatingAccount} /> : signUp}
              </Button>
              <CardDescription className="underline underline-offset-4 hover:text-primary">
                <Link
                  href="/"
                  className={cn(
                    "w-full",
                    buttonVariants({ variant: "ghost" })
                  )}>
                  {alreadyHaveAccount}
                </Link>
              </CardDescription>
            </CardFooter>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  {signUpAlternative}
                </span>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Button
                className="flex items-center justify-center gap-2"
                variant="outline">
                <RiShieldUserFill className="h-6 w-6" />
                {guest}
              </Button>
            </div>
          </CardContent>
        </form>
      </Card>
    </div>
  );
}
