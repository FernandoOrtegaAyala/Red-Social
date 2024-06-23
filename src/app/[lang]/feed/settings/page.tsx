import { Locale } from "@/i18n.config";

import { getDictionary } from "@/lib/dictionary";
import ContenidoDemostracion from "@/components/ContenidoDemostracion";
import ContenidoFuncional from "@/components/ContenidoFuncional";

export default async function ContenidoConfiguracion({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { Feed } = await getDictionary(lang);
  return (
    <>
      <ContenidoFuncional tema={Feed.theme} lang={lang} />
      <ContenidoDemostracion lang={lang} />
    </>
  );
}
