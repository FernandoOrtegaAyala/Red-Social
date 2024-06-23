import Link from "next/link";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import MessageReceived from "@/components/MessageReceived";
import MessageSent from "@/components/MessageSent";

export default function MensajePrueba() {
  return (
    <>
      <div className="relative md:col-span-6 lg:col-start-2 lg:col-span-3 overflow-y-auto overflow-x-hidden">
        <div className="sticky bg-background z-50 top-0 left-0 w-full h-auto py-5 flex justify-between items-center pl-4 pr-10">
          <div className="w-auto h-full flex items-center justify-center gap-4">
            <Avatar className="w-16 h-16">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <h2 className="text-xl text-current font-bold">username</h2>
          </div>
          <Link
            href="/"
            className="w-auto px-4 py-1 h-auto bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center whitespace-nowrap rounded-md text-lg font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
            Ver perfil
          </Link>
        </div>
        <MessageReceived />
        <MessageReceived />
        <MessageReceived />
        <MessageReceived />
        <MessageReceived />
        <MessageReceived />
        <MessageReceived />
        <MessageReceived />
        <MessageReceived />
        <MessageSent />
        <MessageSent />
        <MessageSent />
        <MessageSent />
        <div className="sticky mt-5 bottom-0 left-0 z-50 bg-background w-full h-auto px-4 py-4">
          <Input id="mensaje" type="text" placeholder="Enviar mensaje" />
        </div>
      </div>
    </>
  );
}
