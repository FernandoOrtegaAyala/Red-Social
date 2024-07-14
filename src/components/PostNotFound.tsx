export default function PostNotFound({
  postNotFound,
}: {
  postNotFound: string;
}) {
  return (
    <>
      <div className="w-full h-full bg-fuchsia-900 flex items-center justify-center lg:col-start-1 lg:col-span-3">
        <div className="border border-border w-2/3 h-60 font-semibold text-xl text-center flex items-center justify-center">
          {postNotFound}
        </div>
      </div>
    </>
  );
}
