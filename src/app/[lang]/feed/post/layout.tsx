import { Locale } from "@/i18n.config";
import prisma from "@/libs/db";
import { getServerSession } from "next-auth/next";

import { getDictionary } from "@/lib/dictionary";
import HeaderMobile from "@/components/HeaderMobile";
import ModalCreatePost from "@/components/ModalCreatePost";
import ModalUploaded from "@/components/ModalUploaded";
import NotificationContainer from "@/components/NotificationContainer";
import SearchContainer from "@/components/SearchContainer";
import Toolbar from "@/components/Toolbar";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

import SessionAuthProvider from "../../providers";

export default async function FeedLayout({
  params: { lang },
  children,
}: {
  params: { lang: Locale };
  children: React.ReactNode;
}) {
  const { Create, Feed } = await getDictionary(lang);
  const session = await getServerSession(authOptions);
  const user = await prisma.usuarios.findUnique({
    where: {
      email: session?.user?.email,
    },
    select: {
      id_usuario: true,
    },
  });
  return (
    <>
      <SessionAuthProvider>
        <div
          id="articleContainer"
          className="relative w-full h-screen overflow-y-auto">
          <div className="relative w-full h-full overflow-y-auto flex flex-col justify-center items-center pt-12 md:pt-0 pb-16 md:pb-0 md:pl-16 lg:pl-40">
            {children}
            <HeaderMobile />
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
          <ModalUploaded created={Create.created} accept={Create.accept} />
          <ModalCreatePost
            createPost={Create.createPost}
            shareWhatYou={Create.shareWhatYou}
            dragAndDrop={Create.dragAndDrop}
            maxImg={Create.maxImg}
            share={Create.share}
            drop={Create.drop}
            discardChanges={Create.discardChanges}
            youllNeedReload={Create.youllNeedReload}
            cancel={Create.cancel}
            discard={Create.discard}
            uploading={Create.uploading}
            createError={Create.createError}
            user={user}
          />
        </div>
      </SessionAuthProvider>
    </>
  );
}
