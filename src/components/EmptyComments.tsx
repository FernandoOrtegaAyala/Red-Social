import { GoCommentDiscussion } from "react-icons/go";

export default function EmptyComments({
  emptyComments,
}: {
  emptyComments: String;
}) {
  return (
    <>
      <div className="w-full h-40 px-10 bg-background flex flex-col justify-center items-center text-center gap-2 hover:cursor-pointer select-none">
        <p className="text-base lg:text-lg">{emptyComments}</p>
        <GoCommentDiscussion className="w-10 h-10" />
      </div>
    </>
  );
}
