import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

import ContenidoDemostracion from "@/components/ContenidoDemostracion";
import ContenidoFuncional from "@/components/ContenidoFuncional";
import HeaderConfig from "@/components/HeaderConfig";
import NotificationContainer from "@/components/NotificationContainer";
import SearchContainer from "@/components/SearchContainer";
import Toolbar from "@/components/Toolbar";

export default function ConfiguracionLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: "es" | "en" };
}) {
  unstable_setRequestLocale(params.locale);
  const t = useTranslations("Feed");
  return (
    <>
      <div className="relative h-screen md:grid md:grid-cols-3 mx-auto">
        <SearchContainer />
        <NotificationContainer />
        {/*HeaderConfig*/}
        <HeaderConfig
          texto="Configuración"
          referencia="/feed"
          checkIcono="hidden"
        />
        {/*Content*/}
        <div className=" overflow-y-auto md:ml-20 lg:ml-40 lg:col-start-1 lg:col-span-1 border-r shadow-2xl bg-background">
          <h3 className="hidden md:flex md:flex-row md:items-center md:justify-center font-semibold tracking-tight text-xl lg:text-2xl text-center my-5">
            Configuración
          </h3>
          <div className="hidden md:flex md:flex-col">
            <ContenidoFuncional tema={t("theme")} />
            <ContenidoDemostracion />
          </div>
        </div>
        {children}
        {/*Toolbar*/}
        <Toolbar
          proyect={t("proyect")}
          feed={t("feed")}
          search={t("search")}
          notifications={t("notifications")}
          messages={t("messages")}
          create={t("create")}
          settings1={t("settings1")}
          profile={t("profile")}
          theme={t("theme")}
          logOut1={t("logOut1")}
        />
      </div>
    </>
  );
}
