import { LuLoader2 } from "react-icons/lu";

export default function LoadingComponent({ text }: { text: string }) {
  return (
    <>
      <div className="flex items-center justify-center gap-2">
        <LuLoader2 className="animate-spin" />
        <span>{text}</span>
      </div>
    </>
  );
}
