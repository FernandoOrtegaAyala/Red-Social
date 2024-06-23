import Image from "next/image";
import Link from "next/link";

export default function LogoNombre({
  textoOculto,
  texto,
  posicion,
  referencia,
}: {
  textoOculto: string;
  texto: string;
  posicion: string;
  referencia: string;
}) {
  return (
    <Link
      href={`${referencia}`}
      className={`${posicion} z-20 flex shrink-0 items-center text-lg font-medium`}>
      <Image
        src="/android-chrome-512x512.png"
        alt="Logo del proyecto"
        width={30}
        height={30}
      />
      <p className={`${textoOculto} md:block`}>{texto}</p>
    </Link>
  );
}
