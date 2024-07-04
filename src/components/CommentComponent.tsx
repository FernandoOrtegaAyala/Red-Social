import Link from "next/link";
import prisma from "@/libs/db";
import { formatDistance } from "date-fns";

import ImagePostProfile from "./ImagePostProfile";

export default async function CommentComponent({
  comment,
  languageLocale,
}: {
  comment: any;
  languageLocale: any;
}) {
  const formattedDate = formatDistance(comment.fecha_comentario, new Date(), {
    addSuffix: true,
    locale: languageLocale,
  });

  const user = await prisma.usuarios.findUnique({
    where: {
      id_usuario: comment.id_usuario,
    },
    select: {
      avatar: true,
      nombre_usuario: true,
    },
  });

  return (
    <>
      <div className="w-full h-auto px-2 mt-4 md:mt-6 bg-background flex justify-start items-start gap-2">
        <ImagePostProfile
          classDiv="relative overflow-hidden w-12 md:w-10 h-10 lg:w-14 lg:h-14 ml-2 rounded-full"
          classImg="object-cover"
          linkImg={user?.avatar}
        />
        <div className="w-full h-full flex flex-col justify-start items-start text-sm gap-2 lg:gap-0">
          <div className="flex gap-2 items-center justify-start">
            <Link href="/feed" className="font-semibold text-lg">
              {user?.nombre_usuario}
            </Link>
            <span className="text-sm text-muted-foreground">
              {formattedDate}
            </span>
          </div>
          <p className="w-full h-auto text-base">{comment.texto}</p>
        </div>
      </div>
    </>
  );
}
