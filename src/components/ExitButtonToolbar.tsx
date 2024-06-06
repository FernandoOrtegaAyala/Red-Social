import { Link } from "@/navigation";
import { ExitIcon } from "@radix-ui/react-icons";

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
} from "@/components/ui/alert-dialog";

export default function ExitButtonToolbar({ logOut1 }: { logOut1: string }) {
  return (
    <>
      <AlertDialog>
        <AlertDialogTrigger className="w-6 h-6 mx-3 lg:mx-0 lg:py-2 lg:ml-2 lg:w-full lg:h-auto lg:flex lg:flex-row lg:items-start lg:justify-start text-red-800 lg:hover:bg-red-700 lg:hover:text-white lg:hover:rounded-md">
          <ExitIcon className="w-full h-full lg:w-6 lg:h-6 " />
          <span className="hidden lg:inline-block lg:ml-2 lg:text-base">
            {logOut1}
          </span>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
