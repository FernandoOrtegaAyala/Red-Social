import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

import CardPost from "@/components/CardPost";
import Friendsbar from "@/components/Friendsbar";
import HeaderMobile from "@/components/HeaderMobile";
import NotificationContainer from "@/components/NotificationContainer";
import SearchContainer from "@/components/SearchContainer";
import SugerenciaCuentas from "@/components/SugerenciaCuentas";
import Toolbar from "@/components/Toolbar";

export default function MuroInicio(params: { locale: "es" | "en" }) {
  unstable_setRequestLocale(params.locale);
  const t = useTranslations("Feed");

  return (
    <>
      <div className="relative flex flex-col justify-center items-center md:ml-16 mb-20 md:mb-10 lg:ml-0 lg:px-40">
        <HeaderMobile />
        <Friendsbar />
        <div>
          <CardPost />
          <CardPost />
          <CardPost />
          <CardPost />
          <CardPost />
        </div>
        <SugerenciaCuentas />
        <SearchContainer />
        <NotificationContainer />
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
