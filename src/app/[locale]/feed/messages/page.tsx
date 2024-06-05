import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

import Componente from "@/components/Componente";
import HeaderConfig from "@/components/HeaderConfig";
import Message from "@/components/Message";
import NotificationContainer from "@/components/NotificationContainer";
import SearchContainer from "@/components/SearchContainer";
import Toolbar from "@/components/Toolbar";

export default function MessagesPage(params: { locale: "es" | "en" }) {
  unstable_setRequestLocale(params.locale);
  const t = useTranslations("Feed");

  return (
    <>
      <div className="h-screen w-full relative md:grid md:grid-cols-3 md:overflow-hidden">
        <SearchContainer />
        <NotificationContainer />
        <HeaderConfig texto="Mensajes" referencia="/feed" checkIcono="hidden" />
        <div className="bg-fuchsia-500 mt-16 w-full h-full md:pl-16 overflow-y-auto">
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
        </div>
        <div className="bg-orange-800 mt-16"></div>
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
