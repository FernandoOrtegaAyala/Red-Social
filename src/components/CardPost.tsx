import Link from "next/link";
import capitalizeFirstLetter from "@/helpers/capitalizeFirstLetter";
import { Locale } from "@/i18n.config";
import prisma from "@/libs/db";
import { format } from "date-fns";
import { enUS, es } from "date-fns/locale";
import { getServerSession } from "next-auth/next";

import { authOptions } from "@/app/api/auth/[...nextauth]/route";

import CommentComponent from "./CommentComponent";
import EmptyComments from "./EmptyComments";
import ImgsCardPost from "./ImgsCardPost";
import LikeAndCommentBar from "./LikeAndCommentBar";
import MakeComment from "./MakeComment";
import PostImgProfile from "./PostImgProfile";
import PostNotFound from "./PostNotFound";

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
  linkCopied,
  somethingWrong,
  postNotFound,
  tryCreating,
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
  linkCopied: string;
  somethingWrong: string;
  postNotFound: string;
  tryCreating: string;
}) {
  const result = await prisma.posts.findUnique({
    where: {
      id_post: parseInt(id, 10),
    },
    include: {
      usuarios: {
        select: {
          nombre_usuario: true,
          nombre: true,
          apellidos: true,
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

  const session = await getServerSession(authOptions);
  const user = await prisma.usuarios.findUnique({
    where: {
      email: session?.user?.email,
    },
    select: {
      id_usuario: true,
      avatar: true,
    },
  });

  console.log(result);

  const languageLocale = lang == "es" ? es : enUS;

  const formattedDate = format(
    result?.fecha_pubicacion ?? new Date(),
    "MMMM d yyyy h:m a",
    {
      locale: languageLocale,
    }
  );

  return (
    <>
      {result ? (
        <article
          className={`w-full h-auto pb-24 lg:pb-28 bg-background md:pt-4 lg:flex lg:flex-col lg:max-w-[1200px] lg:col-start-1 lg:col-span-3 ${result?.imagen1_url ? "" : "lg:mb-40 md:flex md:h-full md:justify-center md:items-center md:mt-0 lg:px-4"}`}>
          <div
            className={`w-full h-auto ${result?.imagen1_url ? "" : "md:w-[550px] lg:w-full lg:max-w-[800px] md:border border-border md:pb-0 md:p-4 lg:px-6 rounded-md"}`}>
            <div className="w-full h-auto bg-background py-2 flex justify-start items-center gap-2">
              <PostImgProfile
                classDiv="relative overflow-hidden w-16 md:w-14 h-14 lg:w-16 lg:h-16 ml-2 rounded-full"
                classImg="object-cover"
                linkImg={result?.usuarios?.avatar}
                result={result}
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
            <p className="bg-background w-full px-4 mb-4 lg:text-lg">
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
            <p className="w-full h-auto pl-4 mt-4 md:text-lg lg:text-xl">{`${result?._count.likes} ${likes}`}</p>
            <LikeAndCommentBar
              user={user}
              id={id}
              like={like}
              share={share}
              comment={comment}
              linkCopied={linkCopied}
              somethingWrong={somethingWrong}
            />
            <div
              id="comments"
              className="w-full h-auto max-h-[400px] pb-10 lg:pb-20 overflow-y-auto">
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
            </div>
          </div>
          <MakeComment
            user={user}
            addComment={addComment}
            somethingWrong={somethingWrong}
            id={id}
          />
        </article>
      ) : (
        <PostNotFound postNotFound={postNotFound} tryCreating={tryCreating} />
      )}
    </>
  );
}
