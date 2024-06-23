import { Locale } from "@/i18n.config";

import { getDictionary } from "@/lib/dictionary";
import ModalCreatePost from "@/components/ModalCreatePost";
import ModalUploaded from "@/components/ModalUploaded";

import SessionAuthProvider from "../providers";

export default async function FeedLayout({
  params: { lang },
  children,
}: {
  params: { lang: Locale };
  children: React.ReactNode;
}) {
  const { Create } = await getDictionary(lang);
  return (
    <>
      <SessionAuthProvider>
        <div className="relative w-full h-screen overflow-hidden">
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
          />
        </div>
      </SessionAuthProvider>
    </>
  );
}
