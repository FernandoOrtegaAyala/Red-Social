import ShareLink from "./ShareLink";
import CommentSVG from "./svg/CommentSVG";
import LikeSVG from "./svg/LikeSVG";

export default function LikeAndCommentBar({
  like,
  share,
  comment,
  linkCopied,
}: {
  like: string;
  share: string;
  comment: string;
  linkCopied: string;
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
        <ShareLink share={share} linkCopied={linkCopied} />
      </div>
    </>
  );
}
