import Image from "next/image";

import getBase64 from "@/lib/getBase64";

export default async function PostImgProfile({
  linkImg,
  classDiv,
  classImg,
  result,
}: {
  linkImg: string;
  classDiv: string;
  classImg: string;
  result: any;
}) {
  const dataPlaceholder = await getBase64(linkImg);

  const formatAvatarFallback = () => {
    const formattedName = result.usuarios.nombre.charAt(0);
    console.log("ESTO VALEEEEEEE:", result.usuarios.nombre);
    console.log(result.usuarios.nombre.charAt(0));
    const formattedLastName = result.usuarios.apellidos.charAt(0);
    return `${formattedName }${formattedLastName}`;
  };

  const prueba. = "Hola"




  return (
    <>
      {linkImg ? (
        <div className={classDiv}>
          <Image
            placeholder={dataPlaceholder}
            src={linkImg}
            className={classImg}
            fill={true}
            alt=""
          />
        </div>
      ) : (
        <div className="relative w-16 md:w-16 h-14 lg:w-[70px] lg:h-16 ml-2 border-current border-2 rounded-full bg-muted flex items-center justify-center">
          <p className="font-semibold text-xl lg:text-2xl">
            {formatAvatarFallback()}
          </p>
        </div>
      )}
    </>
  );
}
