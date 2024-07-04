import { LuLoader2 } from "react-icons/lu";

export default function Loading() {
  return (
    <>
      <div className="h-screen w-full flex items-center justify-center">
        <LuLoader2 className="animate-spin w-10 h-10" />
      </div>
    </>
  );
}
