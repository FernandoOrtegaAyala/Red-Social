"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/cn";
import { Cross1Icon } from "@radix-ui/react-icons";

type Card = {
  id: number;
  className: string;
  thumbnail: string;
};

export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
  const [selected, setSelected] = useState<Card | null>(null);
  const [lastSelected, setLastSelected] = useState<Card | null>(null);

  const handleClick = (card: Card) => {
    setLastSelected(selected);
    setSelected(card);
  };

  const handleOutsideClick = () => {
    setLastSelected(selected);
    setSelected(null);
  };

  return (
    <div className="w-full h-full p-10 grid grid-cols-1 md:grid-cols-3  max-w-7xl mx-auto gap-4 relative">
      {
        selected ? (<div className="absolute inset-0 bg-black opacity-80 z-[50]">
      </div>) : null
      }
      {cards.map((card, i) => (
        <div key={i} className={cn(card.className, "")}>    
          <motion.div
            onClick={() => handleClick(card)}
            className={cn(
              card.className,
              "relative overflow-hidden hover:cursor-pointer hover:opacity-80",
              selected?.id === card.id
                ? "rounded-lg hover:cursor-pointer  absolute inset-0 h-auto w-full bg-transparent md:w-2/3 m-auto z-50 flex justify-center items-center flex-wrap flex-col hover:opacity-100 "
                : lastSelected?.id === card.id
                ? "z-40 bg-white rounded-xl h-full w-full"
                : "bg-white rounded-xl h-full w-full"
            )}
            layout
          >
            {selected?.id === card.id ? (
              <div className="h-2/3 w-full">
                <button onClick={handleOutsideClick} className="absolute hover:cursor-pointer top-5 md:top-20 right-5 md:right-0 w-8 md:w-10 h-8 md:h-10 z-[250]">
                  <Cross1Icon className="w-full h-full hover:cursor-pointer text-white" />
                </button>
                <SelectedCard selected={selected} />
              </div>
            ) : null}
            <BlurImage card={card} />
          </motion.div>
        </div>
      ))}
      <motion.div
        onClick={handleOutsideClick}
        className={cn(
          "absolute h-full w-full left-0 top-0 z-[200]",
          selected?.id ? "pointer-events-auto" : "pointer-events-none"
        )}
        animate={{ opacity: selected?.id ? 0.3 : 0 }}
      />
    </div>
  );
};

const BlurImage = ({ card }: { card: Card }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <img
      src={card.thumbnail}
      style={{
          width: 'auto',
          height: 'auto',
          maxWidth: '100%',
          maxHeight: '100%',
          objectFit: 'contain',
        }}
      onLoad={() => setLoaded(true)}
      className={cn(
        "absolute align-middle justify-self-center transition duration-200 shadow-2xl",
        loaded ? "blur-none" : ""
      )}
      alt="thumbnail"
    />
  );
};

const SelectedCard = ({ selected }: { selected: Card | null }) => {
  return (
    <div className="bg-transparent h-2/3 w-full flex flex-col justify-end rounded-lg relative z-[60]">
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 0.6,
        }}
        className="absolute h-auto w-auto z-10"
      />
      <motion.div
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="relative px-8 pb-4 z-[70]"
      >
      </motion.div>
    </div>
  );
};
