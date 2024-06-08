import { useTranslations } from "next-intl";
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

export default function ExitButtonContenidoFuncional() {
  const t = useTranslations("Feed");
  return (
    <>
      <AlertDialog>
        <AlertDialogTrigger className="w-full h-auto flex flex-row items-start justify-start text-red-800 hover:bg-red-700 hover:py-1 hover:text-white hover:rounded-md">
          <p className="w-auto h-auto text-sm py-1">{t("logOut2")}</p>
        </AlertDialogTrigger>
        <AlertDialogContent>
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
