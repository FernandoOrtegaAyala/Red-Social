import Link from "next/link";

export default function FooterComp({
  paddingTop,
  politica,
  privacyPolicy,
  createdBy,
}: {
  paddingTop: string;
  politica: string;
  privacyPolicy: string;
  createdBy: string;
}) {
  return (
    <div className="bg-background flex flex-col gap-5">
      <p
        className={` ${politica} px-8 text-center text-sm text-muted-foreground`}>
        <Link
          href="/privacy-policy"
          className="underline underline-offset-4 hover:text-primary">
          {privacyPolicy}
        </Link>
      </p>
      <footer
        className={` ${paddingTop} flex flex-row justify-center items-center mb-2 `}>
        <h6>
          {`<  ${createdBy}`}
          <Link
            href="/"
            className="pl-2 underline underline-offset-4 hover:text-primary">
            Fernando Ortega Ayala
          </Link>
          {`  />`}
        </h6>
      </footer>
    </div>
  );
}
