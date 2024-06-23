"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Link } from "@/navigation";
import { signIn } from "next-auth/react";
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

import InputPassword from "./InputPassword";
import LoadingComponent from "./LoadingComponent";

export default function FormInicio({
  validatingData,
  emailNotRegistered,
  wrongPassword,
  login,
  email,
  emailExample,
  requiredEmail,
  requiredFormatEmail,
  password,
  requiredPassword,
  recoverPassword,
  signInn,
  signUp,
  signUpAlternative,
  guest,
}: {
  validatingData: string;
  emailNotRegistered: string;
  wrongPassword: string;
  login: string;
  email: string;
  emailExample: string;
  requiredEmail: string;
  requiredFormatEmail: string;
  password: string;
  requiredPassword: string;
  recoverPassword: string;
  signInn: string;
  signUp: string;
  signUpAlternative: string;
  guest: string;
}) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const path = usePathname();
  const router = useRouter();
  const [errorPassword, setErrorPassword] = useState<string>("");
  const [errorEmail, setErrorEmail] = useState<string>("");
  const [validando, setValidando] = useState<boolean>(false);

  const onSubmit = handleSubmit(async (data) => {
    setValidando(true);
    const res = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });
    if (res.error) {
      if (res.error == "Wrong password") {
        setValidando(false);
        setErrorPassword(wrongPassword);
      }
      if (res.error == "No user found") {
        setValidando(false);
        setErrorEmail(emailNotRegistered);
        setErrorPassword("");
      }
    } else {
      router.push(`${path}/feed`);
      setValidando(false);
    }
  });

  return (
    <Card>
      <form onSubmit={onSubmit}>
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl text-center">{login}</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            {errorEmail && <span className="text-red-600">{errorEmail}</span>}
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
          <div className="grid gap-2">
            {errorPassword && (
              <span className="text-red-600">{errorPassword}</span>
            )}
            <InputPassword
              txt={password}
              htmlForTxt="password"
              register={register}
              errors={errors}
              mensaje={requiredPassword}
            />
            <Link
              href="/recuperar-password"
              className="underline-offset-4 hover:text-primary text-sky-700 text-sm text-right">
              {recoverPassword}
            </Link>
          </div>
          <CardFooter>
            <Button
              disabled={validando ? true : false}
              variant="default"
              className="w-full">
              {validando ? <LoadingComponent text={validatingData} /> : signInn}
            </Button>
            <CardDescription className="pt-3 underline underline-offset-4 hover:text-primary">
              <Link
                href="/auth/sign-up"
                className={cn("w-full", buttonVariants({ variant: "ghost" }))}>
                {signUp}
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
  );
}
