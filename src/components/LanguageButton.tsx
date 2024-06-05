import { useContext } from "react";
import LanguageContext from "@/helpers/context/LanguageContext";

import { Button } from "./ui/button";

export default function LanguageButton() {
  return (
    <>
      <Button className="absolute z-50 top-4 right-28 w-16" variant="ghost">
        <p className="">ESP</p>
        <p className="hidden ">ENG</p>
      </Button>
    </>
  );
}
