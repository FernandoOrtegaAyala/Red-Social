import { Locale } from "@/i18n.config";
import { AvatarIcon } from "@radix-ui/react-icons";

import { getDictionary } from "@/lib/dictionary";
import { Button } from "@/components/ui/button";
import EditarCuentaFormulario from "@/components/EditarCuentaFormulario";
import FooterPagConfiguracion from "@/components/FooterPagConfiguracion";
import HeaderConfig from "@/components/HeaderConfig";

export default async function ContenidoEditar({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { Profile, Form, changePass } = await getDictionary(lang);

  return (
    <>
      <div className="container relative md:overflow-hidden h-full mb-20 col-start-2 col-span-2 lg:px-24">
        <div className="md:px-10 lg:px-24">
          <h3 className="hidden md:flex md:flex-row md:items-center md:justify-center font-semibold tracking-tight text-2xl text-center mt-5">
            {Profile.editProfile}
          </h3>
          <HeaderConfig
            texto={Profile.editProfile}
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
              <Button className="h-8 md:h-9 md:mr-4">
                {Profile.changePhoto}
              </Button>
            </div>
            <EditarCuentaFormulario
              userName={Form.userName}
              firstName={Form.firstName}
              lastName={Form.lastName}
              bio={Profile.bio}
              saveChanges={changePass.saveChanges}
            />
          </div>
        </div>
        <FooterPagConfiguracion />
      </div>
    </>
  );
}
