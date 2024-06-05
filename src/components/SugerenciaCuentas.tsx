import CuentaSugerida from "./CuentaSugerida";

export default function SugerenciaCuentas() {
  return (
    <>
      <div className="hidden lg:absolute right-2 top-24 mt-2 lg:flex lg:flex-col h-20 w-80">
        <p className="mb-2 text-textoOpaco">Cuentas sugeridas</p>
        <div className="pr-2">
          <CuentaSugerida textoCuentaSugerida="@cuentaprueba1" />
          <CuentaSugerida textoCuentaSugerida="@cuentademo2" />
          <CuentaSugerida textoCuentaSugerida="@cuentaprueba3" />
          <CuentaSugerida textoCuentaSugerida="@cuentademo4" />
          <CuentaSugerida textoCuentaSugerida="@cuentaprueba5" />
        </div>
      </div>
    </>
  );
}
