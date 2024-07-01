"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import InputPassword from "@/components/InputPassword";

import LoadingComponent from "./LoadingComponent";

export default function ChangePasswordForm({
  updatingData,
  errorConfirmNewPass,
  newPassword,
  confirmNewPassword,
  saveChanges,
  errorNewPass,
  errorPassDoesntMatch,
  session,
}: {
  updatingData: string;
  errorConfirmNewPass: string;
  newPassword: string;
  confirmNewPassword: string;
  saveChanges: string;
  errorNewPass: string;
  errorPassDoesntMatch: string;
  session: any;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [errorPass, setErrorPass] = useState(false);
  const [actualizando, setActualizando] = useState(false);
  const [modal, setModal] = useState(false);

  const modalUserUpdatedRef = document.getElementById("modalUpdated");

  const onSubmit = handleSubmit(async (data) => {
    setActualizando(true);
    const newData = { ...data, email: session?.user?.email };
    if (data.newPassword != data.confirmNewPassword) {
      setErrorPass(true);
    } else {
      try {
        const res = await fetch("http://localhost:3000/api/user", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newData),
        });

        if (!res.ok) {
          throw new Error("Error API");
        }

        setModal((prevState) => !prevState);
        const resData = await res.json();
        setActualizando(false);
        console.log(resData);
      } catch (error) {
        console.error("Error trying to update password", error);
      }
    }
  });

  useEffect(() => {
    if (modalUserUpdatedRef) {
      modalUserUpdatedRef.classList.toggle("hidden");
      modalUserUpdatedRef.classList.toggle("flex");
    }
  }, [modal]);

  return (
    <>
      <form onSubmit={onSubmit} noValidate>
        <div className="my-3">
          {errorPass ? (
            <p className="text-red-600 mb-2">{errorPassDoesntMatch}</p>
          ) : null}
          <InputPassword
            txt={newPassword}
            htmlForTxt="newPassword"
            register={register}
            errors={errors}
            mensaje={errorNewPass}
          />
        </div>
        <div className="my-3">
          <InputPassword
            txt={confirmNewPassword}
            htmlForTxt="confirmNewPassword"
            register={register}
            errors={errors}
            mensaje={errorConfirmNewPass}
          />
        </div>
        <div className="w-full my-10 flex justify-end">
          <Button disabled={actualizando ? true : false} className="">
            {actualizando ? (
              <LoadingComponent text={updatingData} />
            ) : (
              saveChanges
            )}
          </Button>
        </div>
      </form>
    </>
  );
}
