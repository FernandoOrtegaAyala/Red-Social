import { Locale } from "@/i18n.config";

import { getDictionary } from "@/lib/dictionary";
import FooterComp from "@/components/FooterComp";
import FormCrearCuenta from "@/components/FormCrearCuenta";
import LogoNombre from "@/components/LogoNombre";
import ThemeButtonSwitchAndLanguage from "@/components/ThemeButtonSwitchAndLanguage";

export default async function Registro({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { Home, Form } = await getDictionary(lang);
  return (
    <div className="w-full h-full bg-background lg:max-w-none flex items-center px-5 pt-20 md:px-0 justify-center md:pt-32 lg:pt-14">
      <ThemeButtonSwitchAndLanguage />
      <LogoNombre
        posicion="absolute left-3 md:left-4 top-5 md:top-6"
        textoOculto="hidden"
        referencia="/"
        texto={Home.projectName}
      />
      <div className="h-full w-full flex flex-col gap-5 sm:w-[350px]">
        <FormCrearCuenta
          accountCreated={Form.accountCreated}
          goToLogin={Form.goToLogin}
          signUp={Home.signUp}
          firstName={Form.firstName}
          lastName={Form.lastName}
          userName={Form.userName}
          userNamePlaceholder={Form.userNamePlaceholder}
          email={Home.email}
          emailExample={Home.emailExample}
          password={Home.password}
          alreadyHaveAccount={Form.alreadyHaveAccount}
          signUpAlternative={Home.signUpAlternative}
          guest={Home.guest}
          birthday={Form.birthday}
          confirmPassword={Form.confirmPassword}
          year={Form.year}
          month={Form.month}
          january={Form.january}
          february={Form.february}
          march={Form.march}
          april={Form.april}
          may={Form.may}
          june={Form.june}
          july={Form.july}
          august={Form.august}
          september={Form.september}
          october={Form.october}
          november={Form.november}
          december={Form.december}
          day={Form.day}
          requiredName={Form.requiredName}
          requiredLastName={Form.requiredLastName}
          requiredUsername={Form.requiredUsername}
          requiredEmail={Form.requiredEmail}
          requiredFormatEmail={Form.requiredFormatEmail}
          requiredPassword={Form.requiredPassword}
          requiredConfirmPassword={Form.requiredConfirmPassword}
          requiredYear={Form.requiredYear}
          requiredMonth={Form.requiredMonth}
          requiredDay={Form.requiredDay}
          passwordsDontMatch={Form.passwordsDontMatch}
          userAlreadyExists={Form.userAlreadyExists}
          emailAlreadyExists={Form.emailAlreadyExists}
          creatingAccount={Form.creatingAccount}
        />
        <FooterComp
          createdBy={Home.createdBy}
          privacyPolicy={Home.privacyPolicy}
          politica=""
          paddingTop="pt-0"
        />
      </div>
    </div>
  );
}
