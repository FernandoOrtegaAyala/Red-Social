import { Locale } from "@/i18n.config";
import { getServerSession } from "next-auth/next";

import { getDictionary } from "@/lib/dictionary";
import ChangePasswordForm from "@/components/ChangePasswordForm";
import FooterPagConfiguracion from "@/components/FooterPagConfiguracion";
import HeaderConfig from "@/components/HeaderConfig";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function ContenidoEditar({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { changePass, Home, Form } = await getDictionary(lang);
  const session = await getServerSession(authOptions);

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
          />
          <div className="h-screen py-20 flex flex-col justify-start">
            <ChangePasswordForm
              updatingData={Form.updatingData}
              currentPassword={changePass.currentPassword}
              newPassword={changePass.newPassword}
              confirmNewPassword={changePass.confirmNewPassword}
              saveChanges={changePass.saveChanges}
              errorCurrentPass={changePass.errorCurrentPass}
              errorNewPass={changePass.errorNewPass}
              errorConfirmNewPass={changePass.errorConfirmNewPass}
              errorPassDoesntMatch={changePass.errorPassDoesntMatch}
              session={session}
            />
          </div>
        </div>
        <FooterPagConfiguracion createdBy={Home.createdBy} />
      </div>
    </>
  );
}
