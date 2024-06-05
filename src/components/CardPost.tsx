import { Link2Icon } from "@radix-ui/react-icons";
import { useTranslations } from "next-intl";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Link } from "../navigation";
import CommentSVG from "./svg/CommentSVG";
import LikeSVG from "./svg/LikeSVG";
import ShareSVG from "./svg/ShareSVG";

export default function CardPost() {
  //COLOCAR LA IMAGEN
  //CONFIGURAR DINAMICAMENTE EL NUMERO DE LIKES Y COMENTARIOS QUE SE MUESTRAN EN LA CARD
  //PONERLE EL HREF A LOS COMENTARIOS O HACER LA TARJETA MAS GRANDE PARA QUE SE MUESTREN TODOS Y PODER COMENTAR
  const t = useTranslations("Feed");
  return (
    <>
      <article>
        <div className="w-auto max-w-md lg:max-w-xl  h-auto mt-10 md:mt-6 mb-0 md:mb-10 flex flex-col items-center border md:rounded-lg shadow-2xl ">
          <div className="h-12 w-full px-1 mt-2 md:mt-5 mb-2 flex flex-row items-center bg-background">
            <button className="w-14 h-14 flex items-center justify-center">
              <Avatar className="w-10 h-10 lg:w-12 lg:h-12">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </button>
            <div className="w-full h-full ml-2 py-1 flex flex-col justify-between items-start text-sm">
              <Link href="/" className="font-bold text-base">
                nombre_usuario
              </Link>
              <span className="text-xs text-muted-foreground">{t("ago")}</span>
            </div>
          </div>
          <p className="w-full px-3 text-left text-sm mb-2">
            Lorem ipsum set heldrlorem ipsum set heldrLlorem ipsum set
            heldrlorem ipsum set heldrlorem ipsum set heldr
          </p>
          <div className="h-96 w-full px-2">
            <div className="bg-blue-700 rounded-lg w-full h-full"></div>
          </div>
          <div className="w-full h-auto mt-2 px-3 bg-background flex flex-row items-center justify-start">
            <p className="text-sm">10 {t("likes")}</p>
          </div>
          <div className="w-full h-auto px-2 py-3 bg-background flex flex-row items-center justify-between">
            <div className="flex flex-row items-center justify-start">
              <button className="w-6 h-6 mx-2 flex items-center justify-center">
                <LikeSVG />
              </button>
              <button className="w-6 h-6 mx-2 flex items-center justify-center">
                <CommentSVG />
              </button>
              <button className="w-6 h-6 mx-2 flex items-center justify-center">
                <ShareSVG />
              </button>
            </div>
            <Link
              href="/"
              className="text-sm text-muted-foreground hover:underline mr-3">
              {t("viewAll")} 5 {t("comments")}
            </Link>
          </div>
          <div className="w-full h-auto mb-2 px-2 my-1 bg-background flex flex-row items-center justify-end "></div>
        </div>
      </article>
    </>
  );
}
