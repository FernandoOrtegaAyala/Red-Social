import FriendFriendsbar from "./FriendFriendsbar";

export default function Friendsbar() {
  return (
    <>
      <div className="h-auto overflow-hidden w-full lg:w-2/3 py-2 relative top-10 md:top-0 border-b shadow-2xl bg-background">
        <ul className="w-full h-full flex flex-row items-center justify-around md:justify-start md:pl-20 lg:pl-0">
          <FriendFriendsbar textoFriend="@cuentaprueba1" />
          <FriendFriendsbar textoFriend="@cuentademo2" />
          <FriendFriendsbar textoFriend="@cuentaprueba3" />
          <FriendFriendsbar textoFriend="@cuentademo4" />
          <FriendFriendsbar textoFriend="cuentaprueba5" />
        </ul>
      </div>
    </>
  );
}
