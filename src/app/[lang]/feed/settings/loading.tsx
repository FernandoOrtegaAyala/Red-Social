import { LuLoader2 } from "react-icons/lu";

export default function Loading() {
  return (
    <>
      <div className="h-screen w-full flex md:pl-60 lg:pl-[460px] items-center justify-center">
        <LuLoader2 className="animate-spin w-10 h-10 md:w-14 md:h-14" />
      </div>
    </>
  );
}
