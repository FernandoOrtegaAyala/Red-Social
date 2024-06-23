import { Locale } from "@/i18n.config";

import { getDictionary } from "@/lib/dictionary";
import ContenidoDemostracion from "@/components/ContenidoDemostracion";
import ContenidoFuncional from "@/components/ContenidoFuncional";
import HeaderConfig from "@/components/HeaderConfig";
import NotificationContainer from "@/components/NotificationContainer";
import SearchContainer from "@/components/SearchContainer";
import Toolbar from "@/components/Toolbar";

export default async function ConfiguracionLayout({
  params: { lang },
  children,
}: {
  params: { lang: Locale };
  children: React.ReactNode;
}) {
  const { Feed } = await getDictionary(lang);
  return (
    <>
      <div className="relative h-screen md:grid md:grid-cols-3 mx-auto">
        <SearchContainer />
        <NotificationContainer />
        {/*HeaderConfig*/}
        <HeaderConfig
          texto={Feed.settings2}
          referencia="/feed"
          checkIcono="hidden"
        />
        {/*Content*/}
        <div className=" overflow-y-auto md:ml-20 lg:ml-40 lg:col-start-1 lg:col-span-1 border-r shadow-2xl bg-background">
          <h3 className="hidden md:flex md:flex-row md:items-center md:justify-center font-semibold tracking-tight text-xl lg:text-2xl text-center my-5">
            {Feed.settings2}
          </h3>
          <div className="hidden md:flex md:flex-col">
            <ContenidoFuncional tema={Feed.theme} lang={lang} />
            <ContenidoDemostracion lang={lang} />
          </div>
        </div>
        {children}
        {/*Toolbar*/}
        <Toolbar
          project={Feed.project}
          feed={Feed.feed}
          search={Feed.search}
          notifications={Feed.notifications}
          messages={Feed.messages}
          create={Feed.create}
          settings1={Feed.settings1}
          profile={Feed.profile}
          theme={Feed.theme}
          logOut1={Feed.logOut1}
          logOutConfirm={Feed.logOutConfirm}
          logOutText={Feed.logOutText}
          cancel={Feed.cancel}
        />
      </div>
    </>
  );
}
