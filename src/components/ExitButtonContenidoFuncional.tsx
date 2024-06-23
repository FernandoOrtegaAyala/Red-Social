"use client";

import { signOut } from "next-auth/react";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export default function ExitButtonContenidoFuncional({
  logOut2,
  logOutConfirm,
  logOutText,
  cancel,
  logOut1,
}: {
  logOut2: string;
  logOutConfirm: string;
  logOutText: string;
  cancel: string;
  logOut1: string;
}) {
  return (
    <>
      <AlertDialog>
        <AlertDialogTrigger className="w-full h-auto flex flex-row items-start justify-start text-red-800 hover:bg-red-700 hover:py-1 hover:text-white hover:rounded-md">
          <p className="w-auto h-auto text-sm py-1">{logOut2}</p>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{logOutConfirm}</AlertDialogTitle>
            <AlertDialogDescription>{logOutText}</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>{cancel}</AlertDialogCancel>
            <AlertDialogAction onClick={() => signOut()}>
              {logOut1}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
