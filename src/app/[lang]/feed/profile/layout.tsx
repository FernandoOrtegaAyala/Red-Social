import { Locale } from "@/i18n.config";
import { AvatarIcon } from "@radix-ui/react-icons";

import { getDictionary } from "@/lib/dictionary";
import FollowButtons from "@/components/FollowButtons";
import HeaderConfig from "@/components/HeaderConfig";
import NotificationContainer from "@/components/NotificationContainer";
import PostsButton from "@/components/PostsButton";
import ReelsButton from "@/components/ReelsButton";
import SearchContainer from "@/components/SearchContainer";
import TaggedButton from "@/components/TaggedButton";
import Toolbar from "@/components/Toolbar";

export default async function MuroInicio({
  params: { lang },
  children,
}: {
  params: { lang: Locale };
  children: React.ReactNode;
}) {
  const { Feed, Profile } = await getDictionary(lang);

  return (
    <>
      <div className="relative overflow-x-hidden flex flex-col md:ml-16 lg:ml-40 md:px-4 lg:px-48">
        <SearchContainer />
        <NotificationContainer />
        <HeaderConfig texto="username" referencia="/feed" checkIcono="hidden" />
        <div className="mt-12 md:mt-0 w-full h-44 bg-sky-600"></div>
        <div className="absolute w-full ml-2 md:ml-0 md:pr-8 lg:pr-96 top-32 md:top-20 z-20 md:flex md:justify-center ">
          <AvatarIcon className="w-32 h-32 border-current border-2 rounded-full" />
        </div>
        {/* Content */}
        <div className="ml-2 md:ml-0 md:text-center md:text-xl lg:text-2xl mt-11 font-bold">
          Nombre Completo User
        </div>
        <div className="ml-2 md:ml-0 md:text-center md:text-base lg:text-xl text-muted-foreground">
          @username
        </div>
        <div className="ml-2 mt-1 pr-20 text-sm h-auto md:ml-0 md:text-center md:text-base lg:text-lg md:pr-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
        <div className="w-full h-20 px-1 md:px-0 flex justify-start items-center ">
          {/* Followers */}
          <div className="w-full h-10 flex items-center justify-evenly md:ml-6">
            <div className="flex flex-col items-center justify-center">
              <p className="text-lg font-bold">12</p>
              <p>Posts</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="text-lg font-bold">120</p>
              <p>{Profile.followers}</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="text-lg font-bold">12</p>
              <p>{Profile.following}</p>
            </div>
          </div>
        </div>
        <FollowButtons
          message={Profile.message}
          follow={Profile.follow}
          following={Profile.following}
        />
        <div className="mt-6 py-0 border shadow-2xl bg-background flex justify-center">
          <PostsButton />
          <ReelsButton />
          <TaggedButton />
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
