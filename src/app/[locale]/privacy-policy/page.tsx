import { Link } from "@/navigation";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import FooterComp from "@/components/FooterComp";
import LogoNombre from "@/components/LogoNombre";
import ThemeButtonSwitchAndLanguage from "@/components/ThemeButtonSwitchAndLanguage";

const TerminosPrivacidad = (params: { locale: "es" | "en" }) => {
  unstable_setRequestLocale(params.locale);

  const t = useTranslations("Policy");
  const t2 = useTranslations("Home");

  return (
    <div className="container flex flex-col items-center">
      <LogoNombre
        posicion="absolute left-3 md:left-4 top-4 md:top-5 "
        textoOculto="hidden"
        referencia="/"
        texto={t2("projectName")}
      />
      <ThemeButtonSwitchAndLanguage />
      <div
        className="md:container relative flex-row items-center justify-center text-left text-base
          rounded-lg md:border md:bg-card text-card-foreground shadow-sm mt-16 md:mt-24">
        <h1 className="font-bold mt-6 sm:mt-0 mb-4 md:mt-4 text-3xl md:text-3xl text-center">
          {t2("privacyPolicy")}
        </h1>
        <p>{t("policyDescription")}</p>
        <p className="mt-10 md:mt-14 text-2xl">
          <strong>{t("policyInfoTitle")}</strong>
        </p>
        <p className="mt-2 text-lg">{t("policyInfoDescription")}</p>
        <p className="mt-8 text-2xl">
          <strong>{t("policyInfoUsageTitle")}</strong>
        </p>
        <p className="mt-2 text-lg">{t("policyInfoUsageDescription")}</p>
        <p className="mt-8 text-2xl">
          <strong>{t("policyCookiesTitle")}</strong>
        </p>
        <p className="mt-2 text-lg">{t("policyCookiesDescription1")}</p>
        <p className="mt-2 text-lg">{t("policyCookiesDescription2")}</p>
        <p className="mt-8 text-2xl">
          <strong>{t("policyThirdPartyTitle")}</strong>
        </p>
        <p className="mt-2 text-lg">{t("policyThirdPartyDescription")}</p>
        <p className="mt-8 text-2xl">
          <strong>{t("policyPersonalInfoTitle")}</strong>
        </p>
        <p className="mt-2 text-lg">{t("policyPersonalInfoDescription1")}</p>
        <p className="mt-2 text-lg">{t("policyPersonalInfoDescription2")}</p>
        <p className="mt-2 text-sm">{t("policyCredits")}</p>
      </div>
      <Link
        href="/"
        className={cn(
          buttonVariants({ variant: "default" }),
          "text-lg sm:text-xl px-5 my-10"
        )}>
        {t2("home")}
      </Link>
      <FooterComp paddingTop="p-0" politica="hidden" />
    </div>
  );
};

export default TerminosPrivacidad;
