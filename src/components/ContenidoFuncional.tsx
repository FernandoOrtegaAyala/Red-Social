import Link from "next/link";
import { Locale } from "@/i18n.config";
import { AvatarIcon, LockClosedIcon } from "@radix-ui/react-icons";

import { getDictionary } from "@/lib/dictionary";
import ThemeButton from "@/components/ThemeButton";

import ExitButtonContenidoFuncional from "./ExitButtonContenidoFuncional";
import LanguageToolbar from "./LanguageToolbar";

export default async function ContenidoFuncional({
  lang,
  tema,
}: {
  lang: Locale;
  tema: string;
}) {
  const { changePass, Profile, Feed } = await getDictionary(lang);
  return (
    <>
      <div className="w-full h-auto mt-12 md:mt-0 px-6 lg:px-10 bg-background flex flex-col gap-2 items-start justify-start text-current">
        <p className="text-sm mt-5 mb-2">{Profile.Account}</p>
        <Link
          href="/feed/settings/edit"
          className="w-full h-10 flex flex-row items-center hover:bg-ring hover:text-white hover:rounded-md">
          <AvatarIcon className="w-6 h-full" />
          <p className="ml-2 py-1">{Profile.editProfile}</p>
        </Link>
        <Link
          href="/feed/settings/change-password"
          className="w-full h-10 flex flex-row items-center hover:bg-ring hover:text-white hover:rounded-md">
          <LockClosedIcon className="w-6 h-full" />
          <p className="ml-2 py-1">{changePass.changePassword}</p>
        </Link>
        <ThemeButton
          tema={tema}
          texto=""
          clases="relative w-full h-10 flex flex-row items-center hover:bg-ring hover:text-white hover:rounded-md"
        />
        <LanguageToolbar />
        <ExitButtonContenidoFuncional
          logOut2={Feed.logOut2}
          logOutConfirm={Feed.logOutConfirm}
          logOutText={Feed.logOutText}
          cancel={Feed.cancel}
          logOut1={Feed.logOut1}
        />
      </div>
    </>
  );
}
