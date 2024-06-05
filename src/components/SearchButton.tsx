"use client";

import { useEffect, useRef, useState } from "react";
import handleSubmitSearchForm from "@/helpers/handleSubmitSearchForm";
import { AvatarIcon } from "@radix-ui/react-icons";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

export default function SearchButton({
  setKeyValue,
  clases,
}: {
  setKeyValue: React.Dispatch<React.SetStateAction<number>>;
  clases: string;
}) {
  const Sugerencias = [
    {
      value: "cuenta 1",
      label: "Cuenta 1",
    },
    {
      value: "ejemplo 2",
      label: "Ejemplo 2",
    },
    {
      value: "relleno 3",
      label: "Relleno 3",
    },
    {
      value: "cuenta 4",
      label: "Cuenta 4",
    },
  ];

  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  function handleInputChange(search: string) {
    const newValue = search;
    setInputValue(newValue);
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && inputValue.length > 1) {
      event.preventDefault();
      const form = event.currentTarget.value;
      //PARA ENVIARLO form?.submit();
      console.log(form);
    }
  };

  const handleSelect = (currentValue: string) => {
    setInputValue(currentValue);
    if (inputRef && inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <>
      <form
        id="formularioBusqueda"
        action=""
        method="get"
        onSubmit={handleSubmitSearchForm}>
        <Command className={` shadow-md absolute ${clases} left-0 `}>
          <CommandInput
            className="bg-transparent border-transparent focus:outline-none"
            placeholder="Buscar usuario..."
            name="searchInput"
            ref={inputRef}
            autoFocus
            onValueChange={handleInputChange}
            onKeyDown={handleKeyDown}
            value={inputValue}
            setKeyValue={setKeyValue}
          />
          <CommandList>
            <CommandEmpty>Sin resultados.</CommandEmpty>
            <CommandGroup heading="Sugerencias">
              {Sugerencias.map((sugerencia) => (
                <CommandItem
                  key={sugerencia.value}
                  value={sugerencia.value}
                  onSelect={handleSelect}>
                  <div className="flex flex-row justify-center items-center">
                    <AvatarIcon className="w-10 h-10 mr-2" />
                    <span>@{sugerencia.value}</span>
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </form>
    </>
  );
}
