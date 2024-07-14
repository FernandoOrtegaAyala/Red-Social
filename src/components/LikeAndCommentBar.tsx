import Comment from "./Comment";
import Like from "./Like";
import ShareLink from "./ShareLink";

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
        <Comment comment={comment} />
        <ShareLink share={share} linkCopied={linkCopied} />
      </div>
    </>
  );
}
