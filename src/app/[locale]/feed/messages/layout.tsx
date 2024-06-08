import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import HeaderConfig from "@/components/HeaderConfig";
import NotificationContainer from "@/components/NotificationContainer";
import SearchContainer from "@/components/SearchContainer";
import Toolbar from "@/components/Toolbar";
import MessageBar from "@/components/MessageBar";

export default function MessagesPage({
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
      <div className="h-screen w-full relative md:pl-16 lg:pl-36 md:grid md:grid-cols-8  lg:grid-cols-4 md:overflow-hidden">
        <SearchContainer />
        <NotificationContainer />
        <HeaderConfig texto="Mensajes" referencia="/feed" checkIcono="hidden" />
        <div className="relative lg:pl-4 md:col-start-1 md:col-span-2 lg:col-span-1 w-full h-full overflow-y-auto">
          <h3 className="md:flex md:sticky py-4 top-0 z-50 text-2xl font-bold bg-background w-full h-auto justify-center items-center text-current">
            {t("messages")}
          </h3>
          <div className="w-full h-full">
            <MessageBar />
            <MessageBar />
            <MessageBar />
            <MessageBar />
            <MessageBar />
            <MessageBar />
            <MessageBar />
            <MessageBar />
            <MessageBar />
            <MessageBar />
            <MessageBar /> 
            <MessageBar />
            <MessageBar />
            <MessageBar />
            <MessageBar />
            <MessageBar />
          </div>
          
        </div>
        {children}
        <Toolbar
          project={t("project")}
          feed={t("feed")}
          search={t("search")}
          notifications={t("notifications")}
          messages={t("messages")}
          create={t("create")}
          settings1={t("settings1")}
          profile={t("profile")}
          theme={t("theme")}
          logOut1={t("logOut1")}
          locale={params.locale}
        />
      </div>
    </>
  );
}
