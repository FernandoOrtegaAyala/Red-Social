import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

import ContenidoDemostracion from "@/components/ContenidoDemostracion";
import ContenidoFuncional from "@/components/ContenidoFuncional";

export default function ContenidoConfiguracion(params: {
  locale: "es" | "en";
}) {
  unstable_setRequestLocale(params.locale);

  const t = useTranslations("Feed");
  return (
    <>
      <ContenidoFuncional tema={t("theme")} />
      <ContenidoDemostracion />
    </>
  );
}
