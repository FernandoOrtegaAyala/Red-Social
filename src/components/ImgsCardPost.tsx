"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import Fade from "embla-carousel-fade";
import useEmblaCarousel from "embla-carousel-react";

import { cn } from "@/lib/cn";

import { DotButton } from "./EmblaCarouselArrowsDotsButtons";

export default function ImgsCardPost({
  image1URL,
  image2URL,
  image3URL,
  image4URL,
}: {
  image1URL: string;
  image2URL: string;
  image3URL: string;
  image4URL: string;
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Fade()]);
  const [loaded1, setLoaded1] = useState(false);
  const [loaded2, setLoaded2] = useState(false);
  const [loaded3, setLoaded3] = useState(false);
  const [loaded4, setLoaded4] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );
  const scrollTo = useCallback(
    (index) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onInit = useCallback((emblaApi) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  return (
    <div className="embla overflow-hidden relative">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container flex">
          {image1URL ? (
            <div className="embla__slide relative w-full h-[400px]">
              <Image
                height="400"
                width="400"
                className={cn(
                  "object-cover object-center absolute inset-0 h-full w-full transition duration-200",
                  loaded1 ? "blur-none" : "blur-md"
                )}
                onLoad={() => setLoaded1(true)}
                src={image1URL}
                alt=""
              />
            </div>
          ) : null}
          {image2URL ? (
            <div className="embla__slide relative w-full h-[400px]">
              <Image
                height="400"
                width="400"
                className={cn(
                  "object-cover object-center absolute inset-0 h-full w-full transition duration-200",
                  loaded2 ? "blur-none" : "blur-md"
                )}
                onLoad={() => setLoaded2(true)}
                src={image2URL}
                alt=""
              />
            </div>
          ) : null}
          {image3URL ? (
            <div className="embla__slide relative w-full h-[400px]">
              <Image
                height="400"
                width="400"
                className={cn(
                  "object-cover object-center absolute inset-0 h-full w-full transition duration-200",
                  loaded3 ? "blur-none" : "blur-md"
                )}
                onLoad={() => setLoaded3(true)}
                src={image3URL}
                alt=""
              />
            </div>
          ) : null}
          {image4URL ? (
            <div className="embla__slide relative w-full h-[400px]">
              <Image
                height="400"
                width="400"
                className={cn(
                  "object-cover object-center absolute inset-0 h-full w-full transition duration-200",
                  loaded4 ? "blur-none" : "blur-md"
                )}
                onLoad={() => setLoaded4(true)}
                src={image4URL}
                alt=""
              />
            </div>
          ) : null}
        </div>
      </div>
      <button
        className="embla__prev absolute left-1 top-1/2 w-8 h-8 opacity-80"
        onClick={scrollPrev}>
        <ChevronLeftIcon className="w-full h-full text-white" />
      </button>
      <button
        className="embla__next absolute right-1 top-1/2 w-8 h-8 opacity-80"
        onClick={scrollNext}>
        <ChevronRightIcon className="w-full h-full text-white" />
      </button>
      <div className="embla__dots absolute bottom-4">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => scrollTo(index)}
            className={`embla__dot h-2 w-2 md:w-6 after:w-full after:h-2 after:rounded-full ${index === selectedIndex ? "after:bg-white" : "after:bg-zinc-700"}`}
          />
        ))}
      </div>
    </div>
  );
}
