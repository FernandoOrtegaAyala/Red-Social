import { useState, useEffect } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Cross1Icon } from "@radix-ui/react-icons";

export default function ModalCancelBtn({
  handleRemoveAllURLs,
  discardChanges,
  youllNeedReload,
  cancel,
  discard,
} : {
  handleRemoveAllURLs: () => void;
  discardChanges: string;
  youllNeedReload: string;
  cancel: string;
  discard: string;
}) {
  const modalContainer = document.getElementById("modalContainer");
  const [modal, setModal] = useState(false);

  const handleCreateBtn = () => {
    setModal(prevState => !prevState)
  }
  
  useEffect(() => {
    if (modalContainer) {
      modalContainer?.classList.toggle("hidden");
      modalContainer?.classList.toggle("flex");
    }
  }, [modal]);
  

  return (
    <>
      <AlertDialog>
        <AlertDialogTrigger className="w-6 h-6 absolute top-5 right-5"><Cross1Icon className="w-full h-full z-[100]"/></AlertDialogTrigger>
        <AlertDialogContent className="w-80 z-[400]">
          <AlertDialogHeader>
            <AlertDialogTitle className="md:text-2xl">{discardChanges}</AlertDialogTitle>
            <AlertDialogDescription className="md:text-lg">
              {youllNeedReload}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="md:text-lg">{cancel}</AlertDialogCancel>
            <AlertDialogAction onClick={handleRemoveAllURLs} className="border border-red-600 text-red-800 bg-transparent font-bold md:text-lg hover:bg-red-900 hover:text-white">{discard}</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}