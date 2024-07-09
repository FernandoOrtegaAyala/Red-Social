import { Locale } from "@/i18n.config";

import { getDictionary } from "@/lib/dictionary";
import CardPost from "@/components/CardPost";
import SugerenciaCuentas from "@/components/SugerenciaCuentas";

export default async function PostId({
  params: { lang, id },
}: {
  params: { lang: Locale; id: string };
}) {
  const { Feed, Home } = await getDictionary(lang);
  return (
    <>
      <div className="w-full h-full bg-background lg:grid lg:grid-cols-4">
        <CardPost
          addComment={Feed.addComment}
          likes={Feed.likes}
          like={Feed.like}
          share={Feed.share}
          comment={Feed.comment}
          id={id}
          lang={lang}
          emptyComments={Feed.emptyComments}
          viewImage={Feed.viewImage}
          linkCopied={Feed.linkCopied}
          somethingWrong={Home.somethingWrong}
        />
        <SugerenciaCuentas />
      </div>
    </>
  );
}
