"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import Fade from "embla-carousel-fade";
import useEmblaCarousel from "embla-carousel-react";

import { DotButton } from "./EmblaCarouselArrowsDotsButtons";
import SkeletonImg from "./SkeletonImg";

export default function ImgsCardPost({
  image1URL,
  image2URL,
  image3URL,
  image4URL,
  viewImage,
}: {
  image1URL: string;
  image2URL: string;
  image3URL: string;
  image4URL: string;
  viewImage: string;
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Fade()]);
  const [loaded1, setLoaded1] = useState(true);
  const [loaded2, setLoaded2] = useState(true);
  const [loaded3, setLoaded3] = useState(true);
  const [loaded4, setLoaded4] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);
  const link1Ref = useRef(null);
  const link2Ref = useRef(null);
  const link3Ref = useRef(null);
  const link4Ref = useRef(null);

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

  const openLink1OnClick = () => {
    if (link1Ref) {
      link1Ref.current?.click();
    }
  };
  const openLink2OnClick = () => {
    if (link2Ref) {
      link2Ref.current?.click();
    }
  };
  const openLink3OnClick = () => {
    if (link3Ref) {
      link3Ref.current?.click();
    }
  };
  const openLink4OnClick = () => {
    if (link4Ref) {
      link4Ref.current?.click();
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setLoaded1(false);
      setLoaded2(false);
      setLoaded3(false);
      setLoaded4(false);
    }, 2000);
  }, []);

  return (
    <div className="embla overflow-hidden relative lg:col-start-1 lg:col-span-2">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container flex">
          {image1URL ? (
            loaded1 ? (
              <SkeletonImg />
            ) : (
              <div className="embla__slide relative w-full h-[400px] md:h-[600px] lg:h-[800px] flex items-end justify-center ">
                <Image
                  height="1080"
                  width="1920"
                  className="object-cover object-center absolute inset-0 h-full w-full transition duration-200 hover:cursor-pointer"
                  onLoad={() => setLoaded1(false)}
                  onClick={openLink1OnClick}
                  src={image1URL}
                  alt=""
                />
                <a
                  id="hidden-link"
                  href={image1URL}
                  ref={link1Ref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="z-[450] hidden-link hidden border border-white hover:bg-background hover:text-accent-foreground px-4 py-2 rounded-md mb-16 text-white">
                  {viewImage}
                </a>
              </div>
            )
          ) : null}
          {image2URL ? (
            loaded2 ? (
              <SkeletonImg />
            ) : (
              <div className="embla__slide relative w-full h-[400px] md:h-[600px] lg:h-[800px] flex items-end justify-center ">
                <Image
                  height="1080"
                  width="1920"
                  className="object-cover object-center absolute inset-0 h-full w-full transition duration-200 hover:cursor-pointer"
                  onLoad={() => setLoaded2(false)}
                  onClick={openLink2OnClick}
                  src={image2URL}
                  alt=""
                />
                <a
                  id="hidden-link"
                  href={image2URL}
                  ref={link2Ref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="z-[450] hidden-link hidden border border-white hover:bg-background hover:text-accent-foreground px-4 py-2 rounded-md mb-16 text-white">
                  {viewImage}
                </a>
              </div>
            )
          ) : null}
          {image3URL ? (
            loaded3 ? (
              <SkeletonImg />
            ) : (
              <div className="embla__slide relative w-full h-[400px] md:h-[600px] lg:h-[800px] flex items-end justify-center ">
                <Image
                  height="1080"
                  width="1920"
                  className="object-cover object-center absolute inset-0 h-full w-full transition duration-200 hover:cursor-pointer"
                  onLoad={() => setLoaded3(false)}
                  onClick={openLink3OnClick}
                  src={image3URL}
                  alt=""
                />
                <a
                  id="hidden-link"
                  href={image3URL}
                  ref={link3Ref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="z-[450] hidden-link hidden border border-white hover:bg-background hover:text-accent-foreground px-4 py-2 rounded-md mb-16 text-white">
                  {viewImage}
                </a>
              </div>
            )
          ) : null}
          {image4URL ? (
            loaded4 ? (
              <SkeletonImg />
            ) : (
              <div className="embla__slide relative w-full h-[400px] md:h-[600px] lg:h-[800px] flex items-end justify-center ">
                <Image
                  height="1080"
                  width="1920"
                  className="object-cover object-center absolute inset-0 h-full w-full transition duration-200 hover:cursor-pointer"
                  onLoad={() => setLoaded4(false)}
                  onClick={openLink4OnClick}
                  src={image4URL}
                  alt=""
                />
                <a
                  id="hidden-link"
                  href={image4URL}
                  ref={link4Ref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="z-[450] hidden-link hidden border border-white hover:bg-background hover:text-accent-foreground px-4 py-2 rounded-md mb-16 text-white">
                  {viewImage}
                </a>
              </div>
            )
          ) : null}
        </div>
      </div>
      <button
        className="embla__prev absolute left-1 top-1/2 w-8 h-8 md:w-12 md:h-12 opacity-80 z-[500] hover:border border-white rounded-md"
        onClick={scrollPrev}>
        <ChevronLeftIcon className="w-full h-full text-white" />
      </button>
      <button
        className="embla__next absolute right-1 top-1/2 w-8 h-8 md:w-12 md:h-12 opacity-80 z-[500] hover:border border-white rounded-md"
        onClick={scrollNext}>
        <ChevronRightIcon className="w-full h-full text-white" />
      </button>
      <div className="embla__dots absolute bottom-0 z-[500] pb-6 pt-4">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => scrollTo(index)}
            className={`embla__dot h-2 w-2 md:w-3 after:w-full after:h-2 md:after:h-3 after:rounded-full ${index === selectedIndex ? "after:bg-white" : "after:bg-zinc-700"}`}
          />
        ))}
      </div>
    </div>
  );
}
