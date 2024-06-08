import { useTranslations } from "next-intl";

export default function ReelsPage() {
  const t = useTranslations("Profile");
  return (
    <>
      <div className="w-full h-96 mb-20 md:mb-0 flex flex-col  items-center justify-center">
        <h6 className="font-bold text-2xl">{t("noFunctionality")}</h6>
        <p>{t("demonstrationSection")}</p>
      </div>
    </>
  );
}
