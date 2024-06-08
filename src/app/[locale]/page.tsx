import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

import FooterComp from "@/components/FooterComp";
import FormInicio from "@/components/FormInicio";
import ImagenesCelulares from "@/components/ImagenesCelulares";
import LogoNombre from "@/components/LogoNombre";
import ThemeButtonSwitchAndLanguage from "@/components/ThemeButtonSwitchAndLanguage";


export default function HomePage(params: { locale: "es" | "en" }) {
  unstable_setRequestLocale(params.locale);

  const t = useTranslations("Home");
  return (
    <>
      <div className="container md:overflow-hidden  relative h-screen flex-col items-center justify-center grid lg:max-w-none custom-lg:grid-cols-2 custom-lg:px-0">
        <ThemeButtonSwitchAndLanguage />
        <LogoNombre
          posicion="absolute left-3 md:left-4 top-5 md:top-6 text-white"
          textoOculto="hidden"
          referencia="/"
          texto={t("projectName")}
        />
        <div className="relative hidden h-full bg-muted p-10 custom-lg:flex custom-lg:justify-center custom-lg:items-center  dark:border-r">
          <div className="absolute mx-auto inset-0 bg-zinc-900"></div>
          <ImagenesCelulares />
        </div>
        <div className="lg:p-8 relative h-full">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px] mb-40">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="md:hidden sm:pt-28 mt-20 text-2xl font-semibold tracking-tight">
                {t("projectName")}
              </h1>
              <p className="md:pt-40 lg:pt-24 text-sm text-muted-foreground">
                {t("loginCardHeader")}
              </p>
            </div>
            <FormInicio />
          </div>
          <div className="absolute w-full lg:pr-16 bottom-2">
            <FooterComp politica="" paddingTop="pt-4 md:pt-8" />
          </div>
        </div>
      </div>
    </>
  );
}
