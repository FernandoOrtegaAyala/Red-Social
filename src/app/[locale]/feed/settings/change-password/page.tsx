import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import FooterPagConfiguracion from "@/components/FooterPagConfiguracion";
import HeaderConfig from "@/components/HeaderConfig";
import InputPassword from "@/components/InputPassword";

export default function ContenidoEditar(params: { locale: "es" | "en" }) {
  unstable_setRequestLocale(params.locale);
  const t = useTranslations("changePass");
  return (
    <>
      <div className="container relative overflow-hidden h-full col-start-2 col-span-2 lg:px-24">
        <div className="md:px-10 lg:px-24">
          <h3 className="hidden md:flex md:flex-row md:items-center md:justify-center font-semibold tracking-tight text-2xl text-center mt-5">
            {t("changePassword")}
          </h3>
          <HeaderConfig
            texto={t("changePassword")}
            referencia="/feed/settings"
            checkIcono="hidden"
          />
          <div className="h-screen py-20 flex flex-col justify-start">
            <form method="POST">
              <div className="my-3">
                <InputPassword
                  txt={t("currentPassword")}
                  htmlForTxt="contraseña"
                />
              </div>
              <div className="my-3">
                <InputPassword txt={t("newPassword")} htmlForTxt="contraseña" />
              </div>
              <div className="my-3">
                <InputPassword
                  txt={t("confirmNewPassword")}
                  htmlForTxt="contraseña"
                />
              </div>
              <div className="w-full my-10 flex justify-end">
                <Button className="">{t("saveChanges")}</Button>
              </div>
            </form>
          </div>
        </div>
        <FooterPagConfiguracion />
      </div>
    </>
  );
}
