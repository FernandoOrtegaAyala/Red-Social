import Image from "next/image";
import { Link } from "@/navigation";
import ExitButtonToolbar from "./ExitButtonToolbar";
import HomeButton from "./HomeButton";
import MessageButton from "./MessageButton";
import NotificationButton from "./NotificationButton";
import SearchButtonToolbar from "./SearchButtonToolbar";
import SettingsButton from "./SettingsButton";
import AvatarSVG from "./svg/AvatarSVG";
import ThemeButton from "./ThemeButton";
import CreateBtn from "./CreateBtn";

export default function Toolbar({
  project,
  feed,
  search,
  notifications,
  messages,
  create,
  settings1,
  profile,
  theme,
  locale,
}: {
  project: string;
  feed: string;
  search: string;
  notifications: string;
  messages: string;
  create: string;
  settings1: string;
  profile: string;
  theme: string;
  logOut1: string;
  locale: "es" | "en"
}) {
  return (
    <>
      {/* Contenedor principal */}
      <div className="md:col-start-1 md:col-span-1 md:fixed md:transform md:translate-x-0 md:rotate-90 md:origin-top-left md:left-16 lg:left-36 md:top-0 md:w-custom-full-h md:flex md:items-center md:justify-center md:border-t md:shadow-2xl md:bg-background lg:justify-between lg:mx-3 lg:h-40 lg:py-4 ">
        {/* Logo */}
        <Link
          href="/feed"
          className="hidden md:mx-7 md:w-auto md:h-full md:flex md:ml-10 lg:flex-row md:transform md:-rotate-90 md:items-center md:justify-start lg:mx-0 lg:ml-0 lg:w-32 lg:h-auto">
          <Image
            className="w-full h-full lg:w-10 lg:h-10"
            src="/android-chrome-512x512.png"
            alt="Logo del proyecto"
            width={30}
            height={30}
          />
          <span className="hidden lg:inline-block lg:ml-2 lg:font-medium">
            {project}
          </span>
        </Link>
        {/* Barra */}
        <div className="fixed bottom-0 right-0 md:relative w-full h-16 flex flex-row items-center justify-evenly md:justify-start md:gap-5 border-t shadow-2xl bg-background md:border-0 md:drop-shadow lg:flex-col lg:items-start lg:justify-evenly lg:w-32 lg:h-96 lg:transform lg:-rotate-90 lg:gap-5 lg:border-0 lg:shadow-none">
          <HomeButton feed={feed} />
          <SearchButtonToolbar search={search} />
          <NotificationButton
            notifications={notifications}
            clases="hidden mx-3"
          />
          <MessageButton messages={messages} />
          <CreateBtn create={create}/>
          <SettingsButton settings1={settings1} />
          <Link
            href="/feed/profile"
            className="group w-6 h-6 mx-3 lg:mx-0 lg:py-2 lg:ml-2 lg:w-full lg:mb-48 lg:h-auto md:transform md:-rotate-90 lg:rotate-0 lg:flex lg:flex-row lg:items-end lg:justify-start lg:hover:bg-ring lg:hover:text-white lg:hover:rounded-md">
            <AvatarSVG />
            <span className="hidden lg:inline-block lg:ml-2 lg:text-base">
              {profile}
            </span>
          </Link>
        </div>
        {/* Botones cambio de tema y salida */}
        <div className="hidden relative md:mx-12 md:shrink-0 md:w-auto md:h-full md:flex md:flex-col md:gap-5 md:transform md:-rotate-90 md:items-center md:justify-evenly lg:items-start lg:justify-center lg:gap-2 lg:w-32 lg:h-full">
          <ThemeButton
            clases="w-6 h-6 mx-3 lg:mx-0 lg:py-2 lg:ml-2 lg:w-full lg:h-auto lg:flex lg:flex-row lg:items-center lg:justify-start lg:hover:bg-ring lg:hover:text-white lg:hover:rounded-md"
            texto="hidden lg:flex"
            tema={theme}
          />
          <ExitButtonToolbar locale={locale}/>
        </div>
      </div>
    </>
  );
}
