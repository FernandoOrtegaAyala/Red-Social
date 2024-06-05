import { Link } from "@/navigation";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import FooterComp from "@/components/FooterComp";
import LogoNombre from "@/components/LogoNombre";

const TerminosPrivacidad = (params: { locale: "es" | "en" }) => {
  unstable_setRequestLocale(params.locale);

  const t = useTranslations("Policy");
  const t2 = useTranslations("Home");

  return (
    <div className="container">
      <Link
        href="/"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute text-lg right-2 top-3 md:top-4 md:right-4 sm:text-xl p-2"
        )}>
        {t2("home")}
      </Link>
      <LogoNombre
        posicion="absolute left-3 md:left-4 top-4 md:top-5 "
        textoOculto="hidden"
        referencia="/"
      />
      <div
        className="md:container relative flex-row items-center justify-center text-left text-base
          rounded-lg md:border bg-card text-card-foreground shadow-sm mt-16 md:mt-24 mb-10">
        <h1 className="font-bold mt-6 sm:mt-0 mb-4 md:mt-4 text-xl md:text-3xl text-center">
          {t2("privacyPolicy")}
        </h1>
        <p>{t("policyDescription")}</p>
        <p className="mt-10 md:mt-14 text-xl">
          <strong>{t("policyInfoTitle")}</strong>
        </p>
        <p className="mt-2 text-base">{t("policyInfoDescription")}</p>
        <p className="mt-8 text-xl">
          <strong>{t("policyInfoUsageTitle")}</strong>
        </p>
        <p className="mt-2 text-base">{t("policyInfoUsageDescription")}</p>
        <p className="mt-8 text-xl">
          <strong>{t("policyCookiesTitle")}</strong>
        </p>
        <p className="mt-2 text-base">{t("policyCookiesDescription1")}</p>
        <p className="mt-2 text-base">{t("policyCookiesDescription2")}</p>
        <p className="mt-8 text-xl">
          <strong>{t("policyThirdPartyTitle")}</strong>
        </p>
        <p className="mt-2 text-base">{t("policyThirdPartyDescription")}</p>
        <p className="mt-8 text-xl">
          <strong>{t("policyPersonalInfoTitle")}</strong>
        </p>
        <p className="mt-2 text-base">{t("policyPersonalInfoDescription1")}</p>
        <p className="mt-2 text-base">{t("policyPersonalInfoDescription2")}</p>
        <p className="mt-2 text-xs">{t("policyCredits")}</p>
      </div>
      <FooterComp paddingTop="p-0" politica="hidden" />
    </div>
  );
};

export default TerminosPrivacidad;
