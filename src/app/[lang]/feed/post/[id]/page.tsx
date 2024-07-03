import { Locale } from "@/i18n.config";

import { getDictionary } from "@/lib/dictionary";
import CardPost from "@/components/CardPost";

export default async function PostId({
  params: { lang, id },
}: {
  params: { lang: Locale; id: string };
}) {
  const { Feed } = await getDictionary(lang);

  return (
    <>
      <div className="w-full h-full bg-background">
        <CardPost
          addComment={Feed.addComment}
          likes={Feed.likes}
          like={Feed.like}
          share={Feed.share}
          comment={Feed.comment}
          id={id}
          lang={lang}
          emptyComments={Feed.emptyComments}
        />
      </div>
    </>
  );
}
