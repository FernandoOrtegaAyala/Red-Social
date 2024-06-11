"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/cn";
import { Cross1Icon } from "@radix-ui/react-icons";

export const LayoutGrid = ({ cards }: { cards: File[] }) => {
  const [selected, setSelected] = useState<File | null>(null);
  const [lastSelected, setLastSelected] = useState<File | null>(null);

  const handleClick = (card: File) => {
    setLastSelected(selected);
    setSelected(card);
  };

  const handleOutsideClick = () => {
    setLastSelected(selected);
    setSelected(null);
  };

  return (
    <div className={`${cards.length > 2 ? "grid-cols-2" : "grid-cols-1"}  w-full h-full p-2 md:p-4 pb-4 grid max-w-7xl  mx-auto gap-4`}>
      {
        selected ? (<div className="absolute inset-0 bg-black opacity-80 z-[50]">
      </div>) : null
      }
      {cards.map((card, i) => (
        <div key={i} className={cn( "w-full h-full")}>    
          <motion.div
            onClick={() => handleClick(card)}
            className={cn(
              
              "relative overflow-hidden hover:cursor-pointer hover:opacity-80 flex justify-center items-center",
              selected?.size === card.size
                ? "rounded-lg hover:cursor-pointer  absolute inset-0 h-auto w-full bg-transparent md:w-2/3 m-auto z-50 flex justify-center items-center flex-wrap flex-col hover:opacity-100 "
                : lastSelected?.size === card.size
                ? "z-40 bg-card rounded-xl h-full w-full"
                : "bg-card rounded-xl h-full w-full"
            )}
            layout
          >
            {selected?.size === card.size ? (
              <div className="h-2/3 w-full">
                <button onClick={handleOutsideClick} className="absolute hover:cursor-pointer top-10 md:top-20 right-5 md:right-0 w-8 md:w-10 h-8 md:h-10 z-[250]">
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
          selected?.size ? "pointer-events-auto" : "pointer-events-none"
        )}
        animate={{ opacity: selected?.size ? 0.3 : 0 }}
      />
    </div>
  );
};

const BlurImage = ({ card }: { card: File }) => {
  const [loaded, setLoaded] = useState(false);
  const [objectURL, setObjectURL] = useState<string | null>(null);

  useEffect(() => {
    if (card) {
      const url = URL.createObjectURL(card);
      setObjectURL(url);

      
      return () => URL.revokeObjectURL(url);
    }
  }, [card]);

  if (!objectURL) {
    return <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white" role="status">
      <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>;
    </div> 
  }

  return (
    <img
      src={objectURL}
      style={{
        width: 'auto',
        height: 'auto',
        maxWidth: '100%',
        maxHeight: '100%',
        objectFit: 'contain',
      }}
      onLoad={() => setLoaded(true)}
      className={cn(
        "absolute align-middle justify-self-center transition duration-200 shadow-2xl rounded-md",
        loaded ? "blur-none" : "blur"
      )}
      alt={card.name}
    />
  );
};

const SelectedCard = ({ selected }: { selected: File | null }) => {
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
