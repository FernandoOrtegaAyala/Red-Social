import Link from "next/link";
import { Locale } from "@/i18n.config";

import { getDictionary } from "@/lib/dictionary";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import FooterComp from "@/components/FooterComp";
import LogoNombre from "@/components/LogoNombre";
import ThemeButtonSwitchAndLanguage from "@/components/ThemeButtonSwitchAndLanguage";

export default async function TerminosPrivacidad({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { Home, Policy } = await getDictionary(lang);

  return (
    <div className="container flex flex-col items-center">
      <LogoNombre
        posicion="absolute left-3 md:left-4 top-4 md:top-5 "
        textoOculto="hidden"
        referencia="/"
        texto={Home.projectName}
      />
      <ThemeButtonSwitchAndLanguage />
      <div
        className="md:container relative flex-row items-center justify-center text-left text-base
          rounded-lg md:border md:bg-card text-card-foreground shadow-sm mt-16 md:mt-24">
        <h1 className="font-bold mt-6 sm:mt-0 mb-4 md:mt-4 text-3xl md:text-3xl text-center">
          {Home.privacyPolicy}
        </h1>
        <p>{Policy.policyDescription}</p>
        <p className="mt-10 md:mt-14 text-2xl">
          <strong>{Policy.policyInfoTitle}</strong>
        </p>
        <p className="mt-2 text-lg">{Policy.policyInfoDescription}</p>
        <p className="mt-8 text-2xl">
          <strong>{Policy.policyInfoUsageTitle}</strong>
        </p>
        <p className="mt-2 text-lg">{Policy.policyInfoUsageDescription}</p>
        <p className="mt-8 text-2xl">
          <strong>{Policy.policyCookiesTitle}</strong>
        </p>
        <p className="mt-2 text-lg">{Policy.policyCookiesDescription1}</p>
        <p className="mt-2 text-lg">{Policy.policyCookiesDescription2}</p>
        <p className="mt-8 text-2xl">
          <strong>{Policy.policyThirdPartyTitle}</strong>
        </p>
        <p className="mt-2 text-lg">{Policy.policyThirdPartyDescription}</p>
        <p className="mt-8 text-2xl">
          <strong>{Policy.policyPersonalInfoTitle}</strong>
        </p>
        <p className="mt-2 text-lg">{Policy.policyPersonalInfoDescription1}</p>
        <p className="mt-2 text-lg">{Policy.policyPersonalInfoDescription2}</p>
        <p className="mt-2 text-sm">{Policy.policyCredits}</p>
      </div>
      <Link
        href="/"
        className={cn(
          buttonVariants({ variant: "default" }),
          "text-lg sm:text-xl px-5 my-10"
        )}>
        {Home.home}
      </Link>
      <FooterComp
        createdBy={Home.createdBy}
        privacyPolicy={Home.privacyPolicy}
        paddingTop="p-0"
        politica="hidden"
      />
    </div>
  );
}
