import { LuLoader2 } from "react-icons/lu";

export default function LoadingComponent({uploading}: {uploading: string}) {
  return (
    <>
      <div className="flex items-center justify-center gap-2">
        <LuLoader2 className="animate-spin"/>
        <span>{uploading}</span>
      </div>
    </>
  )
}