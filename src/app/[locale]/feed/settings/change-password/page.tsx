import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import FooterPagConfiguracion from "@/components/FooterPagConfiguracion";
import HeaderConfig from "@/components/HeaderConfig";
import InputPassword from "@/components/InputPassword";

export default function ContenidoEditar() {
  return (
    <>
      <div className="container relative overflow-hidden h-full col-start-2 col-span-2 lg:px-24">
        <div className="md:px-10 lg:px-24">
          <h3 className="hidden md:flex md:flex-row md:items-center md:justify-center font-semibold tracking-tight text-2xl text-center mt-5">
            Cambiar contraseña
          </h3>
          <HeaderConfig
            texto="Cambiar contraseña"
            referencia="/feed/settings"
            checkIcono="hidden"
          />
          <div className="h-screen py-20 flex flex-col justify-start">
            <form method="POST">
              <div className="my-3">
                <InputPassword
                  txt="Contraseña actual"
                  htmlForTxt="contraseña"
                />
              </div>
              <div className="my-3">
                <InputPassword txt="Nueva contraseña" htmlForTxt="contraseña" />
              </div>
              <div className="my-3">
                <InputPassword
                  txt="Confirmar nueva contraseña"
                  htmlForTxt="contraseña"
                />
              </div>
              <div className="w-full my-10 flex justify-end">
                <Button className="">Guardar cambios</Button>
              </div>
            </form>
          </div>
        </div>
        <FooterPagConfiguracion />
      </div>
    </>
  );
}
