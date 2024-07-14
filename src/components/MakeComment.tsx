import FormMakeComment from "./FormMakeComment";
import ImagePostProfile from "./ImagePostProfile";

export default async function MakeComment({
  addComment,
  user,
  somethingWrong,
  id,
}: {
  addComment: string;
  user: any;
  somethingWrong: any;
  id: string;
}) {
  return (
    <>
      <div className="fixed z-[100] bottom-16 md:bottom-0 lg:pb-16 md:py-4 md:pl-20 md:pr-8 lg:pl-44 lg:pr-96 bg-background shadow-xl left-0 w-full h-auto flex items-start justify-start px-2 py-2 gap-2">
        <ImagePostProfile
          classDiv="relative overflow-hidden w-12 md:w-10 h-10 lg:w-14 lg:h-14 rounded-full"
          classImg="object-cover"
          linkImg={user.avatar}
        />
        <FormMakeComment
          addComment={addComment}
          somethingWrong={somethingWrong}
          id={id}
          user={user}
        />
      </div>
    </>
  );
}
