import { Locale } from "@/i18n.config";

import { getDictionary } from "@/lib/dictionary";
import { Button } from "@/components/ui/button";
import FooterPagConfiguracion from "@/components/FooterPagConfiguracion";
import HeaderConfig from "@/components/HeaderConfig";
import InputPassword from "@/components/InputPassword";

export default async function ContenidoEditar({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { changePass } = await getDictionary(lang);
  return (
    <>
      <div className="container relative overflow-hidden h-full col-start-2 col-span-2 lg:px-24">
        <div className="md:px-10 lg:px-24">
          <h3 className="hidden md:flex md:flex-row md:items-center md:justify-center font-semibold tracking-tight text-2xl text-center mt-5">
            {changePass.changePassword}
          </h3>
          <HeaderConfig
            texto={changePass.changePassword}
            referencia="/feed/settings"
            checkIcono="hidden"
          />
          <div className="h-screen py-20 flex flex-col justify-start">
            <form method="POST">
              <div className="my-3">
                <InputPassword
                  txt={changePass.currentPassword}
                  htmlForTxt="contraseña"
                />
              </div>
              <div className="my-3">
                <InputPassword
                  txt={changePass.newPassword}
                  htmlForTxt="contraseña"
                />
              </div>
              <div className="my-3">
                <InputPassword
                  txt={changePass.confirmNewPassword}
                  htmlForTxt="contraseña"
                />
              </div>
              <div className="w-full my-10 flex justify-end">
                <Button className="">{changePass.saveChanges}</Button>
              </div>
            </form>
          </div>
        </div>
        <FooterPagConfiguracion />
      </div>
    </>
  );
}
