export default function PostNotFound({
  postNotFound,
  tryCreating,
}: {
  postNotFound: string;
  tryCreating: string;
}) {
  return (
    <>
      <div className="w-full h-full flex items-center justify-center lg:col-start-1 lg:col-span-3">
        <div className="w-2/3 h-60 font-semibold text-center flex flex-col items-center justify-center">
          <span className="text-xl">{postNotFound}</span>
          <span className="text-2xl">{tryCreating}</span>
        </div>
      </div>
    </>
  );
}
