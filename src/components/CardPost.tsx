import Link from "next/link";
import capitalizeFirstLetter from "@/helpers/capitalizeFirstLetter";
import { Locale } from "@/i18n.config";
import prisma from "@/libs/db";
import { format } from "date-fns";
import { enUS, es } from "date-fns/locale";

import CommentComponent from "./CommentComponent";
import EmptyComments from "./EmptyComments";
import ImagePostProfile from "./ImagePostProfile";
import ImgsCardPost from "./ImgsCardPost";
import LikeAndCommentBar from "./LikeAndCommentBar";
import MakeComment from "./MakeComment";

export default async function CardPost({
  id,
  lang,
  like,
  addComment,
  likes,
  share,
  comment,
  emptyComments,
  viewImage,
}: {
  id: string;
  lang: Locale;
  likes: string;
  addComment: string;
  like: string;
  share: string;
  comment: string;
  emptyComments: string;
  viewImage: string;
}) {
  const result = await prisma.posts.findUnique({
    where: {
      id_post: parseInt(id, 10),
    },
    include: {
      usuarios: {
        select: {
          nombre_usuario: true,
          avatar: true,
        },
      },
      comentarios: {
        select: {
          id_usuario: true,
          fecha_comentario: true,
          texto: true,
        },
      },
      _count: {
        select: { likes: true },
      },
    },
  });

  console.log(result);

  const languageLocale = lang == "es" ? es : enUS;

  const formattedDate = format(result?.fecha_pubicacion, "MMMM d yyyy h:m a", {
    locale: languageLocale,
  });

  return (
    <>
      <article className="w-full h-auto bg-background pb-36 md:mt-5 lg:flex lg:flex-col lg:pr-96">
        <div className="w-full h-auto bg-background py-2 flex justify-start items-center gap-2">
          <ImagePostProfile
            classDiv="relative overflow-hidden w-16 md:w-14 h-14 lg:w-16 lg:h-14 ml-2 rounded-full"
            classImg="object-cover"
            linkImg={result?.usuarios?.avatar}
          />
          <div className="w-full h-full py-1 flex flex-col justify-between items-start text-sm">
            <Link href="/feed" className="font-bold text-xl">
              {result?.usuarios?.nombre_usuario}
            </Link>
            <span className="text-base text-muted-foreground">
              {capitalizeFirstLetter(formattedDate)}
            </span>
          </div>
        </div>
        <p className="bg-background px-2 my-4 lg:my-0 lg:mb-4 lg:text-lg">
          {result?.texto}
        </p>
        {result?.imagen1_url ? (
          <ImgsCardPost
            image1URL={result.imagen1_url}
            image2URL={result.imagen2_url}
            image3URL={result.imagen3_url}
            image4URL={result.imagen4_url}
            viewImage={viewImage}
          />
        ) : null}
        <p className="w-full h-auto pl-2 my-2 md:text-lg">{`${result?._count.likes} ${likes}`}</p>
        <LikeAndCommentBar like={like} share={share} comment={comment} />
        {result?.comentarios.length >= 1 ? (
          result?.comentarios.map((comment) => (
            <CommentComponent
              key={result.id_usuario}
              comment={comment}
              languageLocale={languageLocale}
            />
          ))
        ) : (
          <EmptyComments emptyComments={emptyComments} />
        )}
        <MakeComment addComment={addComment} />
      </article>
    </>
  );
}
