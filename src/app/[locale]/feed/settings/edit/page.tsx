import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import { AvatarIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import EditarCuentaFormulario from "@/components/EditarCuentaFormulario";
import FooterPagConfiguracion from "@/components/FooterPagConfiguracion";
import HeaderConfig from "@/components/HeaderConfig";

export default function ContenidoEditar(params: {
  locale: "es" | "en";
}) {
  unstable_setRequestLocale(params.locale);

  const t = useTranslations("Profile");
  const t2 = useTranslations("Form");
  const t3 = useTranslations("changePass");
  return (
    <>
      <div className="container relative md:overflow-hidden h-full mb-20 col-start-2 col-span-2 lg:px-24">
        <div className="md:px-10 lg:px-24">
          <h3 className="hidden md:flex md:flex-row md:items-center md:justify-center font-semibold tracking-tight text-2xl text-center mt-5">
            {t("editProfile")}
          </h3>
          <HeaderConfig
            texto={t("editProfile")}
            referencia="/feed/settings"
            checkIcono="absolute"
          />
          <div className="mt-8 h-full py-6 md:py-0">
            <div className="w-auto flex justify-between items-center py-3 md:bg-grisFondo md:rounded-md md:mt-8 ">
              <div className="w-auto  flex flex-row">
                <AvatarIcon className="w-16 h-16 ml-2 border-current border-2 rounded-full" />
                <div className="hidden md:flex md:flex-col justify-center ml-5">
                  <span className="font-semibold">username</span>
                  <span className="text-textoOpaco text-base">
                    Nombre Completo
                  </span>
                </div>
              </div>
              <Button className="h-8 md:h-9 md:mr-4">{t("changePhoto")}</Button>
            </div>
            <EditarCuentaFormulario userName={t2("userName")} firstName={t2("firstName")} lastName={t2("lastName")} bio={t("bio")} saveChanges={t3("saveChanges")} />
          </div>
        </div>
        <FooterPagConfiguracion />
      </div>
    </>
  );
}
