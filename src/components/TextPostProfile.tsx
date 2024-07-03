import CommentSVG from "@/components/svg/CommentSVG";
import LikeSVG from "@/components/svg/LikeSVG";
import ShareSVG from "@/components/svg/ShareSVG";

export default function TextPostProfile({ text }: { text: string }) {
  return (
    <>
      <div className="relative  w-1/3 h-[150px] md:h-[250px] lg:h-[500px] bg-card p-2 md:p-3 lg:p-5 flex items-center justify-center">
        <div className="w-full hover:cursor-pointer h-full border border-border rounded-lg flex flex-col items-center justify-between p-1 md:p-3 lg:p-5">
          <div className=""></div>
          <p className="text-base md:text-lg overflow-y-auto overflow-x-hidden max-w-full max-h-full w-auto h-auto pb-2 md:pb-0">
            {text}
          </p>
          <div className="w-full h-auto md:pt-3 lg:py-3 flex flex-row items-center justify-end ">
            <div className="flex flex-row items-center justify-start">
              <button className="w-5 h-5 md:w-6 md:h-6 mx-2 flex items-center justify-center">
                <LikeSVG like="Me gusta" />
              </button>
              <button className="w-5 h-5 md:w-6 md:h-6 mx-2 flex items-center justify-center">
                <CommentSVG comment="comentar" />
              </button>
              <button className="w-5 h-5 md:w-6 md:h-6 mx-2 hidden md:flex items-center justify-center">
                <ShareSVG share="Compartir" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
