import { Locale } from "@/i18n.config";
import prisma from "@/libs/db";
import { getServerSession } from "next-auth/next";

import { getDictionary } from "@/lib/dictionary";
import ModalCreatePost from "@/components/ModalCreatePost";
import ModalUploaded from "@/components/ModalUploaded";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

import SessionAuthProvider from "../providers";

export default async function FeedLayout({
  params: { lang },
  children,
}: {
  params: { lang: Locale };
  children: React.ReactNode;
}) {
  const { Create } = await getDictionary(lang);
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
        <div className="relative w-full h-screen overflow-y-auto">
          {children}
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
