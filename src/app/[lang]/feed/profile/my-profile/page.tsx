import { Locale } from "@/i18n.config";

import { getDictionary } from "@/lib/dictionary";
import ImagePostProfile from "@/components/ImagePostProfile";
import TextPostProfile from "@/components/TextPostProfile";

export default async function MyProfile({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { Feed } = await getDictionary(lang);

  return (
    <>
      <div className="mb-20 md:mb-0 h-auto w-full flex flex-row flex-wrap hover:">
        <ImagePostProfile
          like={Feed.like}
          comment={Feed.comment}
          classDiv="relative containerImg flex flex-row gap-2 items-center justify-center w-1/3 h-[150px] md:h-[250px] lg:h-[500px] overflow-hidden hover:opacity-60 hover:cursor-pointer"
          classImg="p-1 object-cover"
          linkImg="https://img.freepik.com/free-photo/young-beautiful-girl-posing-beach-ocean-waves-bright-sun-tanned-skin_1296-794.jpg?w=1380&t=st=1701308529~exp=1701309129~hmac=cdc7d871408e2d87aa522de7e999afa4d8c2f9b383482a9355772f6190eae759"
        />
        <ImagePostProfile
          like={Feed.like}
          comment={Feed.comment}
          classDiv="relative containerImg flex flex-row gap-2 items-center justify-center w-1/3 h-[150px] md:h-[250px] lg:h-[500px] overflow-hidden hover:opacity-60 hover:cursor-pointer"
          classImg="p-1 object-cover"
          linkImg="https://img.freepik.com/free-photo/side-view-mushroom-frying-with-salt-fire-human-hand-pan_176474-3146.jpg?w=826&t=st=1701308859~exp=1701309459~hmac=c6b7a49af7723e6af425abfbf210c3ac91bed7c8b92448bd28fd4f7936ea48ac"
        />
        <ImagePostProfile
          like={Feed.like}
          comment={Feed.comment}
          classDiv="relative containerImg flex flex-row gap-2 items-center justify-center w-1/3 h-[150px] md:h-[250px] lg:h-[500px] overflow-hidden hover:opacity-60 hover:cursor-pointer"
          classImg="p-1 object-cover"
          linkImg="https://img.freepik.com/free-photo/group-people-dancing-disco_23-2147717095.jpg?w=826&t=st=1701308326~exp=1701308926~hmac=3e1aaaf9074f75fc2926be350470aed5f2cc15db08aefe9ee7ceea5339cae4b9"
        />
        <TextPostProfile
          text="To add NextAuth.js to a project create a file called ...nextauth.js
            in pages/api/auth. This contains the dynamic route handler for
            NxtAuth.js which will also contain all of your global NextAuth.js
            configurations. To add NextAuth.js to a project create a file called
            ...nextauth.js in pages/api/auth. This contains the dynamic route
            handler for NextAuth.js which will also contain all of your global
            NextAuth.js configurations. To add NextAuth.js to a project create a
            file called ...nextauthjs in pages/api/auth. This contains the
            dynamic route handler for NextAuth.js which will also contain all of
            your global NextAuth.js configurations."
        />
        <TextPostProfile text="Hola mundo" />
      </div>
    </>
  );
}
