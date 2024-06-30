import { Locale } from "@/i18n.config";
import prisma from "@/libs/db";
import { getServerSession } from "next-auth/next";

import { getDictionary } from "@/lib/dictionary";
import EditProfileButton from "@/components/EditProfileButton";
import HeaderConfig from "@/components/HeaderConfig";
import ImagePostProfile from "@/components/ImagePostProfile";
import NotificationContainer from "@/components/NotificationContainer";
import PostsButton from "@/components/PostsButton";
import ReelsButton from "@/components/ReelsButton";
import SearchContainer from "@/components/SearchContainer";
import TaggedButton from "@/components/TaggedButton";
import Toolbar from "@/components/Toolbar";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function MyProfileLayout({
  params: { lang },
  children,
}: {
  params: { lang: Locale };
  children: React.ReactNode;
}) {
  const { Feed, Profile } = await getDictionary(lang);
  const session = await getServerSession(authOptions);

  const user = await prisma.usuarios.findUnique({
    where: {
      email: session?.user?.email,
    },
    select: {
      id_usuario: true,
      nombre_usuario: true,
      nombre: true,
      apellidos: true,
      avatar: true,
      bio: true,
    },
  });

  const postCount = await prisma.posts.count({
    where: {
      id_usuario: user?.id_usuario,
    },
  });

  const followersCount = await prisma.seguidores.count({
    where: {
      id_usuario_seguido: user?.id_usuario,
    },
  });

  const followsCount = await prisma.seguidores.count({
    where: {
      id_usuario_seguidor: user?.id_usuario,
    },
  });

  const formatAvatarFallback = () => {
    const formattedName = user?.nombre.charAt(0);
    const formattedLastName = user?.apellidos.charAt(0);
    return `${formattedName} ${formattedLastName}`;
  };

  return (
    <>
      <div className="relative overflow-x-hidden overflow-y-auto flex flex-col md:ml-16 lg:ml-40 md:px-4 lg:px-48">
        <SearchContainer />
        <NotificationContainer />
        <HeaderConfig texto={Profile.myProfile} referencia="/feed" />
        <div className="mt-12 md:mt-0 w-full h-44 bg-primary"></div>
        <div className="absolute w-full ml-2 md:ml-0 md:pr-8 lg:pr-96 top-32 md:top-20 z-20 md:flex md:justify-center ">
          {user?.avatar ? (
            <ImagePostProfile
              classDiv="relative overflow-hidden w-32 h-32 border-current border-2 rounded-full"
              classImg="object-cover"
              linkImg={user?.avatar}
            />
          ) : (
            <div className="relative w-32 h-32 border-current border-2 rounded-full bg-muted flex items-center justify-center">
              <p className="font-semibold text-xl lg:text-2xl">
                {formatAvatarFallback()}
              </p>
            </div>
          )}
        </div>
        {/* Content */}
        <div className="ml-2 md:ml-0 md:text-center md:text-xl lg:text-2xl mt-11 font-bold">
          {`${user?.nombre} ${user?.apellidos}`}
        </div>
        <div className="ml-2 md:ml-0 md:text-center md:text-base lg:text-xl text-muted-foreground">
          {`@${user?.nombre_usuario}`}
        </div>
        <div className="ml-2 mt-1 pr-20 text-sm h-auto md:ml-0 md:text-center md:text-base lg:text-lg md:pr-0">
          {user?.bio}
        </div>
        <div className="w-full h-20 px-1 md:px-0 flex justify-start items-center ">
          {/* Followers */}
          <div className="w-full h-10 flex items-center justify-evenly md:ml-6">
            <div className="flex flex-col items-center justify-center">
              <p className="text-lg font-bold">{postCount}</p>
              <p>Posts</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="text-lg font-bold">{followersCount}</p>
              <p>{Profile.followers}</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="text-lg font-bold">{followsCount}</p>
              <p>{Profile.following}</p>
            </div>
          </div>
        </div>
        <EditProfileButton editProfile={Profile.editProfile} />
        <div className="mt-6 py-0 border shadow-2xl bg-background flex justify-center">
          <PostsButton linkRef="/feed/profile/my-profile" />
          <ReelsButton linkRef="/feed/profile/my-profile/reels" />
          <TaggedButton linkRef="/feed/profile/my-profile/tagged" />
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
