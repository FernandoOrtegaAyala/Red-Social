import CuentaSugerida from "./CuentaSugerida";

export default function SugerenciaCuentas() {
  return (
    <>
      <div className="hidden lg:flex lg:flex-col mt-48 h-auto w-full max-w-80 px-4 lg:col-start-4">
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
