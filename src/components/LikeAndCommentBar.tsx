import Like from "./Like";
import ShareLink from "./ShareLink";
import CommentSVG from "./svg/CommentSVG";

export default function LikeAndCommentBar({
  like,
  id,
  user,
  share,
  comment,
  linkCopied,
  somethingWrong,
}: {
  like: string;
  id: string;
  user: any;
  share: string;
  comment: string;
  linkCopied: string;
  somethingWrong: string;
}) {
  return (
    <>
      <div className="w-full relative h-[70px] pl-14 flex flex-row items-center justify-start bg-background">
        <Like id={id} user={user} somethingWrong={somethingWrong} />
        <button className="w-7 h-7 mx-2 flex items-center justify-center">
          <CommentSVG comment={comment} color="currentColor" />
        </button>
        <ShareLink share={share} linkCopied={linkCopied} />
      </div>
    </>
  );
}
