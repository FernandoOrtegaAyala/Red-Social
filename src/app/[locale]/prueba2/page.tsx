"use client";
import { LayoutGrid } from "@/components/ui/layout-grid";

export default function LayoutGridDemo() {
  return (
    <div className="h-screen w-full">
      <LayoutGrid cards={cards} />
    </div>
  );
}

const cards = [
  {
    id: 1,
    className: "md:col-span-2",
    thumbnail:
      "/pruebaimg.jpeg",
  },
  {
    id: 2,
    className: "col-span-1",
    thumbnail:
      "/pruebaimg2.jpg",
  },
  {
    id: 3,
    className: "col-span-1",
    thumbnail:
      "/pruebaimg3.png",
  },
  {
    id: 4,
    className: "md:col-span-2",
    thumbnail:
      "/pruebaimg4.png",
  },
];
