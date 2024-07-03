import CommentSVG from "./svg/CommentSVG";
import LikeSVG from "./svg/LikeSVG";
import ShareSVG from "./svg/ShareSVG";

export default function LikeAndCommentBar({
  like,
  share,
  comment,
}: {
  like: string;
  share: string;
  comment: string;
}) {
  return (
    <>
      <div className="flex flex-row items-center justify-start py-2 bg-background">
        <button className="w-7 h-7 mx-2 flex items-center justify-center">
          <LikeSVG like={like} color="currentColor" />
        </button>
        <button className="w-7 h-7 mx-2 flex items-center justify-center">
          <CommentSVG comment={comment} color="currentColor" />
        </button>
        <button className="w-7 h-7 mx-2 flex items-center justify-center">
          <ShareSVG share={share} />
        </button>
      </div>
    </>
  );
}
