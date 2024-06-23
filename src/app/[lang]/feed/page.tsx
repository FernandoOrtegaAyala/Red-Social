import { Locale } from "@/i18n.config";

import { getDictionary } from "@/lib/dictionary";
import CardPost from "@/components/CardPost";
import Friendsbar from "@/components/Friendsbar";
import HeaderMobile from "@/components/HeaderMobile";
import NotificationContainer from "@/components/NotificationContainer";
import SearchContainer from "@/components/SearchContainer";
import SugerenciaCuentas from "@/components/SugerenciaCuentas";
import Toolbar from "@/components/Toolbar";

export default async function MuroInicio({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { Feed } = await getDictionary(lang);
  return (
    <>
      <div className="relative flex flex-col justify-center items-center md:ml-16 mb-20 md:mb-10 lg:ml-0 lg:px-40">
        <HeaderMobile />
        <Friendsbar />
        <div>
          <CardPost
            ago={Feed.ago}
            likes={Feed.likes}
            viewAll={Feed.viewAll}
            comments={Feed.comments}
            like={Feed.like}
            share={Feed.share}
            comment={Feed.comment}
          />
        </div>
        <SugerenciaCuentas />
        <SearchContainer />
        <NotificationContainer />
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
