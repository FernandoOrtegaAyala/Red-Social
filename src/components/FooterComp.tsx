import { useTranslations } from "next-intl";

import { Link } from "../navigation";

export default function FooterComp({
  paddingTop,
  politica,
}: {
  paddingTop: string;
  politica: string;
}) {
  const t = useTranslations("Home");
  return (
    <>
      <p
        className={` ${politica} px-8 text-center text-sm text-muted-foreground`}>
        <Link
          href="/privacy-policy"
          className="underline underline-offset-4 hover:text-primary">
          {t("privacyPolicy")}
        </Link>
      </p>
      <footer
        className={` ${paddingTop} flex flex-row justify-center items-center mb-2 `}>
        <h6>
          {`<  ${t("createdBy")}`}
          <Link
            href="/"
            className="pl-2 underline underline-offset-4 hover:text-primary">
            Fernando Ortega Ayala
          </Link>
          {`  />`}
        </h6>
      </footer>
    </>
  );
}
