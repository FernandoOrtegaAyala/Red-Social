import { Locale } from "@/i18n.config";

import { getDictionary } from "@/lib/dictionary";
import HeaderConfig from "@/components/HeaderConfig";
import MessageBar from "@/components/MessageBar";
import NotificationContainer from "@/components/NotificationContainer";
import SearchContainer from "@/components/SearchContainer";
import Toolbar from "@/components/Toolbar";

export default async function MessagesPage({
  params: { lang },
  children,
}: {
  params: { lang: Locale };
  children: React.ReactNode;
}) {
  const { Feed } = await getDictionary(lang);

  return (
    <>
      <div className="h-screen w-full relative md:pl-16 lg:pl-36 md:grid md:grid-cols-8  lg:grid-cols-4 md:overflow-hidden">
        <SearchContainer />
        <NotificationContainer />
        <HeaderConfig
          texto={Feed.messages}
          referencia="/feed"
          checkIcono="hidden"
        />
        <div className="relative lg:pl-4 md:col-start-1 md:col-span-2 lg:col-span-1 w-full h-full overflow-y-auto">
          <h3 className="md:flex md:sticky py-4 top-0 z-50 text-2xl font-bold bg-background w-full h-auto justify-center items-center text-current">
            {Feed.messages}
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
