import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

import FooterComp from "@/components/FooterComp";
import FormCrearCuenta from "@/components/FormCrearCuenta";
import LogoNombre from "@/components/LogoNombre";
import ThemeButtonSwitchAndLanguage from "@/components/ThemeButtonSwitchAndLanguage";

export default function Registro(params: { locale: "es" | "en" }) {
  unstable_setRequestLocale(params.locale);
  const t = useTranslations("Form");
  const t2 = useTranslations("Home");
  return (
    <div className="w-full h-full bg-background lg:max-w-none flex items-center px-5 pt-20 md:px-0 justify-center md:pt-32 lg:pt-14">
      <ThemeButtonSwitchAndLanguage />
      <LogoNombre
        posicion="absolute left-3 md:left-4 top-5 md:top-6"
        textoOculto="hidden"
        referencia="/"
        texto={t2("projectName")}
      />
      <div className="h-full w-full flex flex-col gap-5 sm:w-[350px]">
        <FormCrearCuenta
          accountCreated={t("accountCreated")}
          goToLogin={t("goToLogin")}
          signUp={t2("signUp")}
          firstName={t("firstName")}
          lastName={t("lastName")}
          userName={t("userName")}
          userNamePlaceholder={t("userNamePlaceholder")}
          email={t2("email")}
          emailExample={t2("emailExample")}
          password={t2("password")}
          alreadyHaveAccount={t("alreadyHaveAccount")}
          signUpAlternative={t2("signUpAlternative")}
          guest={t2("guest")}
          birthday={t("birthday")}
          confirmPassword={t("confirmPassword")}
          year={t("year")}
          month={t("month")}
          january={t("january")}
          february={t("february")}
          march={t("march")}
          april={t("april")}
          may={t("may")}
          june={t("june")}
          july={t("july")}
          august={t("august")}
          september={t("september")}
          october={t("october")}
          november={t("november")}
          december={t("december")}
          day={t("day")}
          requiredName={t("requiredName")}
          requiredLastName={t("requiredLastName")}
          requiredUsername={t("requiredUsername")}
          requiredEmail={t("requiredEmail")}
          requiredFormatEmail={t("requiredFormatEmail")}
          requiredPassword={t("requiredPassword")}
          requiredConfirmPassword={t("requiredConfirmPassword")}
          requiredYear={t("requiredYear")}
          requiredMonth={t("requiredMonth")}
          requiredDay={t("requiredDay")}
          passwordsDontMatch={t("passwordsDontMatch")}
          userAlreadyExists={t("userAlreadyExists")}
          emailAlreadyExists={t("emailAlreadyExists")}
          creatingAccount={t("creatingAccount")}
        />
        <FooterComp politica="" paddingTop="pt-0" />
      </div>
    </div>
  );
}
