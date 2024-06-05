import { Value } from "@radix-ui/react-select";

import FooterComp from "./FooterComp";

const Lorem = "Lorem";
const Ipsum = "Ipsum";
const Dolor = "Dolor";
const Amet = "Amet";
const Cnsectetur = "Cnsectetur";
const Adipisicing = "Adipisicing";
const Elit = "Elit";
const Facere = "Facere";
const Loremm = "Loremm";
const Nulla = "Nulla";
const Reprehenderit = "Reprehenderit";
const Anim = "Anim";
const Laborum = "Laborum";

const palabras = {
  Lorem,
  Ipsum,
  Dolor,
  Amet,
  Cnsectetur,
  Adipisicing,
  Elit,
  Facere,
  Loremm,
  Nulla,
  Reprehenderit,
  Anim,
  Laborum,
};

export default function FooterPagConfiguracion() {
  return (
    <>
      <div className="hidden md:absolute md:bottom-1 md:flex md:flex-col md:flex-wrap md:gap-3 md:w-full md:pr-16 lg:pr-48">
        <div className="w-full flex justify-center flex-wrap">
          {Object.values(palabras).map((value) => (
            <button
              key={value}
              className="text-muted-foreground text-sm hover:underline mx-2">
              {value}
            </button>
          ))}
        </div>
        <FooterComp politica="" paddingTop="" />
      </div>
    </>
  );
}
