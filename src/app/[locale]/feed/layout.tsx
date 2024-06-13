import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import ModalCreatePost from "@/components/ModalCreatePost";
import ModalUploaded from "@/components/ModalUploaded";

export default function FeedLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: "es" | "en" };
}) {
  unstable_setRequestLocale(params.locale);
  const t = useTranslations("Create");
  return (
    <>
      <div className="relative w-full h-screen overflow-hidden">
        {children}
        <ModalUploaded 
        created={t("created")}
        accept={t("accept")}
        />
        <ModalCreatePost 
        createPost={t("createPost")} 
        shareWhatYou={t("shareWhatYou")} 
        dragAndDrop={t("dragAndDrop")} 
        maxImg={t("maxImg")}
        share={t("share")}
        drop={t("drop")}
        discardChanges={t("discardChanges")}
        youllNeedReload={t("youllNeedReload")}
        cancel={t("cancel")}
        discard={t("discard")}
        uploading={t("uploading")}
        />
      </div>
    </>
  )
}