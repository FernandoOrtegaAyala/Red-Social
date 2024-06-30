import { Locale } from "@/i18n.config";
import prisma from "@/libs/db";
import { getServerSession } from "next-auth/next";

import { getDictionary } from "@/lib/dictionary";
import ChangePhoto from "@/components/ChangePhoto";
import EditarCuentaFormulario from "@/components/EditarCuentaFormulario";
import FooterPagConfiguracion from "@/components/FooterPagConfiguracion";
import HeaderConfig from "@/components/HeaderConfig";
import ImagePostProfile from "@/components/ImagePostProfile";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function ContenidoEditar({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { Profile, Form, changePass, Home, Create } = await getDictionary(lang);
  const session = await getServerSession(authOptions);
  const user = await prisma.usuarios.findUnique({
    where: {
      email: session?.user?.email,
    },
    select: {
      id_usuario: true,
      nombre_usuario: true,
      nombre: true,
      apellidos: true,
      avatar: true,
      bio: true,
    },
  });

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
          />
          <div className="mt-8 h-full py-6 md:py-0">
            <div className="w-auto relative flex justify-between items-center py-3 md:bg-grisFondo md:rounded-md md:mt-8 ">
              <div className="w-auto  flex flex-row">
                <ImagePostProfile
                  classDiv="relative overflow-hidden w-16 h-16 ml-2 rounded-full"
                  classImg="object-cover"
                  linkImg={user?.avatar}
                />
                <div className="hidden md:flex md:flex-col justify-center ml-5">
                  <span className="font-semibold">{user?.nombre_usuario}</span>
                  <span className="text-textoOpaco text-base">
                    {`${user?.nombre} ${user?.apellidos}`}
                  </span>
                </div>
              </div>
              <ChangePhoto
                user={user}
                changePhoto={Profile.changePhoto}
                uploading={Create.uploading}
                uploadingError={Create.uploadingError}
              />
            </div>
            <EditarCuentaFormulario
              user={user}
              userName={Form.userName}
              firstName={Form.firstName}
              lastName={Form.lastName}
              bio={Profile.bio}
              saveChanges={changePass.saveChanges}
              requiredUsername={Form.requiredUsername}
              requiredName={Form.requiredName}
              requiredLastName={Form.requiredLastName}
              updatingData={Form.updatingData}
            />
          </div>
        </div>
        <FooterPagConfiguracion createdBy={Home.createdBy} />
      </div>
    </>
  );
}
