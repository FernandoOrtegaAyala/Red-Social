import { Locale } from "@/i18n.config";
import {
  BackpackIcon,
  CardStackPlusIcon,
  CookieIcon,
  Crosshair2Icon,
  CubeIcon,
  DrawingPinIcon,
  EraserIcon,
  GlobeIcon,
  LapTimerIcon,
  LightningBoltIcon,
  LinkBreak1Icon,
  MixIcon,
  PaperPlaneIcon,
  RocketIcon,
  RulerSquareIcon,
  SewingPinIcon,
  TrashIcon,
} from "@radix-ui/react-icons";

import { getDictionary } from "@/lib/dictionary";

interface Obj {
  [key: string]: string;
}

const Iconos: Obj = {
  BackpackIcon: "Lorem ipsum",
  RocketIcon: "Dolor sit amet",
  PaperPlaneIcon: "Consectetur adipisicing elit",
  LinkBreak1Icon: "Tempore hic consequuntur",
  TrashIcon: "Aut consequuntur nihil",
  DrawingPinIcon: "Assumenda laudantium",
  SewingPinIcon: "Recusandae non",
  CubeIcon: "Lorem ipsum",
  CookieIcon: "Consectetur adipisicing",
  EraserIcon: "Elit amet",
  RulerSquareIcon: "Moles aidip",
  LightningBoltIcon: "Et soluta",
  LapTimerIcon: "Numquam vel",
  GlobeIcon: "Laudantium pariatur",
  Crosshair2Icon: "Ea ut saepe",
  CardStackPlusIcon: "Temporibus quidem",
  MixIcon: "Beatae optio",
};

export default async function ContenidoDemostracion({
  lang,
}: {
  lang: Locale;
}) {
  const { Feed } = await getDictionary(lang);
  return (
    <>
      <div className="w-full h-auto mt-2 pb-20 md:pb-5 px-6 lg:px-10 bg-background flex flex-col gap-2 items-start justify-start ">
        <p className="text-base mt-5 mb-2 text-current">
          {Feed.contentDemostrative}
        </p>
        {Object.entries(Iconos).map(([key, value]) => (
          <div className="w-full text-muted-foreground" key={key}>
            <button className="w-full h-10 flex flex-row items-center hover:bg-ring hover:text-white hover:rounded-md">
              {key === "BackpackIcon" && (
                <BackpackIcon className="w-6 h-full" />
              )}
              {key === "RocketIcon" && <RocketIcon className="w-6 h-full" />}
              {key === "PaperPlaneIcon" && (
                <PaperPlaneIcon className="w-6 h-full" />
              )}
              {key === "LinkBreak1Icon" && (
                <LinkBreak1Icon className="w-6 h-full" />
              )}
              {key === "TrashIcon" && <TrashIcon className="w-6 h-full" />}
              {key === "DrawingPinIcon" && (
                <DrawingPinIcon className="w-6 h-full" />
              )}
              {key === "SewingPinIcon" && (
                <SewingPinIcon className="w-6 h-full" />
              )}
              {key === "CubeIcon" && <CubeIcon className="w-6 h-full" />}
              {key === "CookieIcon" && <CookieIcon className="w-6 h-full" />}
              {key === "EraserIcon" && <EraserIcon className="w-6 h-full" />}
              {key === "RulerSquareIcon" && (
                <RulerSquareIcon className="w-6 h-full" />
              )}
              {key === "LightningBoltIcon" && (
                <LightningBoltIcon className="w-6 h-full" />
              )}
              {key === "LapTimerIcon" && (
                <LapTimerIcon className="w-6 h-full" />
              )}
              {key === "GlobeIcon" && <GlobeIcon className="w-6 h-full" />}
              {key === "Crosshair2Icon" && (
                <Crosshair2Icon className="w-6 h-full" />
              )}
              {key === "CardStackPlusIcon" && (
                <CardStackPlusIcon className="w-6 h-full" />
              )}
              {key === "MixIcon" && <MixIcon className="w-6 h-full" />}
              <p className="ml-2 py-1">{value}</p>
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
