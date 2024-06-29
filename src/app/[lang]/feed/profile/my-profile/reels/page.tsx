import { Locale } from "@/i18n.config";

import { getDictionary } from "@/lib/dictionary";

export default async function ReelsPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { Profile } = await getDictionary(lang);
  return (
    <>
      <div className="w-full h-96 mb-20 md:mb-0 flex flex-col  items-center justify-center">
        <h6 className="font-bold text-2xl">{Profile.noFunctionality}</h6>
        <p>{Profile.demonstrationSection}</p>
      </div>
    </>
  );
}
