import prisma from "@/libs/db";
import { getServerSession } from "next-auth/next";

import { authOptions } from "@/app/api/auth/[...nextauth]/route";

import ImagePostProfile from "./ImagePostProfile";
import { Input } from "./ui/input";

export default async function MakeComment({
  addComment,
}: {
  addComment: string;
}) {
  const session = await getServerSession(authOptions);
  const user = await prisma.usuarios.findUnique({
    where: {
      email: session?.user?.email,
    },
    select: {
      avatar: true,
    },
  });

  return (
    <>
      <div className="fixed z-[100] bottom-16 bg-background shadow-xl left-0 w-full h-auto flex items-center justify-start px-2 py-2 gap-2">
        <ImagePostProfile
          classDiv="relative overflow-hidden w-10 h-10 rounded-full"
          classImg="object-cover"
          linkImg={user.avatar}
        />
        <Input className="border border-border" placeholder={addComment} />
      </div>
    </>
  );
}
