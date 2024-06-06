import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function FriendFriendsbar({
  textoFriend,
}: {
  textoFriend: string;
}) {
  return (
    <>
      <li className="w-auto h-full">
        <button className="w-auto h-auto mx-2 mt-2 flex flex-col justify-center items-center">
          <Avatar className="w-12 h-12">
            <AvatarImage src="https://picsum.photos/200/300" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <p className="w-auto h-auto text-xs">{textoFriend}</p>
        </button>
      </li>
    </>
  );
}
