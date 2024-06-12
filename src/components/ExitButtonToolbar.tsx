import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import { ExitIcon } from "@radix-ui/react-icons";

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

export default function ExitButtonToolbar(params: { locale: "es" | "en" }) {
  unstable_setRequestLocale(params.locale);
  const t = useTranslations("Feed");
  
  return (
    <>
      <AlertDialog>
        <AlertDialogTrigger className="w-6 h-6 mx-3 lg:mx-0 lg:py-2 lg:ml-2 lg:w-full lg:h-auto lg:flex lg:flex-row lg:items-start lg:justify-start text-red-800 lg:hover:bg-red-700 lg:hover:text-white lg:hover:rounded-md">
          <ExitIcon className="w-full h-full lg:w-6 lg:h-6 " />
          <span className="hidden lg:inline-block lg:ml-2 lg:text-base">
            {t("logOut1")}
          </span>
        </AlertDialogTrigger>
        <AlertDialogContent className="z-[400]">
          <AlertDialogHeader>
            <AlertDialogTitle>{t("logOutConfirm")}</AlertDialogTitle>
            <AlertDialogDescription>
              {t("logOutText")}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>{t("cancel")}</AlertDialogCancel>
            <AlertDialogAction>{t("logOut1")}</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
