import { Link } from "@/navigation";
import { AvatarIcon, ExitIcon, LockClosedIcon } from "@radix-ui/react-icons";
import { useTranslations } from "next-intl";
import ThemeButton from "@/components/ThemeButton";

import ExitButtonContenidoFuncional from "./ExitButtonContenidoFuncional";
import LanguageToolbar from "./LanguageToolbar";

export default function ContenidoFuncional({ tema }: { tema: string }) {
  const t = useTranslations("changePass");
  const t2 = useTranslations("Profile");
  return (
    <>
      <div className="w-full h-auto mt-12 md:mt-0 px-6 lg:px-10 bg-background flex flex-col gap-2 items-start justify-start text-current">
        <p className="text-sm mt-5 mb-2">{t2("Account")}</p>
        <Link
          href="/feed/settings/edit"
          className="w-full h-10 flex flex-row items-center hover:bg-ring hover:text-white hover:rounded-md">
          <AvatarIcon className="w-6 h-full" />
          <p className="ml-2 py-1">{t2("editProfile")}</p>
        </Link>
        <Link
          href="/feed/settings/change-password"
          className="w-full h-10 flex flex-row items-center hover:bg-ring hover:text-white hover:rounded-md">
          <LockClosedIcon className="w-6 h-full" />
          <p className="ml-2 py-1">{t("changePassword")}</p>
        </Link>
        <ThemeButton
          tema={tema}
          texto=""
          clases="relative w-full h-10 flex flex-row items-center hover:bg-ring hover:text-white hover:rounded-md"
        />
        <LanguageToolbar />
        <ExitButtonContenidoFuncional />
      </div>
    </>
  );
}
