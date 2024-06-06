import { unstable_setRequestLocale } from "next-intl/server";

import FooterComp from "@/components/FooterComp";
import FormCrearCuenta from "@/components/FormCrearCuenta";
import LogoNombre from "@/components/LogoNombre";
import ThemeButtonSwitch from "@/components/ThemeButtonSwitch";

export default function Registro(params: { locale: "es" | "en" }) {
  unstable_setRequestLocale(params.locale);
  return (
    <div className="container lg:overflow-hidden md:h-screen relative flex items-center justify-center lg:max-w-none">
      <ThemeButtonSwitch />
      <LogoNombre
        posicion="absolute left-3 md:left-4 top-5 md:top-6"
        textoOculto="hidden"
        referencia="/"
      />
      <div className="pt-20 lg:pt-10 mx-auto flex w-full flex-col justify-center pt space-y-6 sm:w-[350px]">
        <FormCrearCuenta />
        <FooterComp politica="" paddingTop="pt-0" />
      </div>
    </div>
  );
}
