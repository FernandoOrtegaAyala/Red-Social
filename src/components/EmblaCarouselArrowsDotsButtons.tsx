import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const DotButton = (props) => {
  const { children, ...restProps } = props;

  return (
    <button
      aria-label="Botón ver imagen de la lista de imagenes"
      className="rounded-lg"
      type="button"
      {...restProps}>
      {children}
    </button>
  );
};

export const PrevButton = (props) => {
  const { children, ...restProps } = props;

  return (
    <button
      aria-label="Botón siguiente imagen"
      className="embla__button embla__button--prev absolute top-1/2 left-3 text-white w-12 h-12"
      type="button"
      {...restProps}>
      <ChevronLeft className="w-full h-full" />
      {children}
    </button>
  );
};

export const NextButton = (props) => {
  const { children, ...restProps } = props;

  return (
    <button
      aria-label="Botón anterior imagen"
      className="embla__button embla__button--next absolute top-1/2 right-3 text-white w-12 h-12"
      type="button"
      {...restProps}>
      <ChevronRight className="w-full h-full" />
      {children}
    </button>
  );
};
