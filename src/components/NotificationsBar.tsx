import HeaderConfig from "@/components/HeaderConfig";
import Notification from "@/components/Notification";

export default function NotificationsBar({ mTop }: { mTop: string }) {
  return (
    <>
      <div className="w-full h-full">
        <HeaderConfig
          texto="Notificaciones"
          referencia="/feed"
          checkIcono="hidden"
        />
        <div className="hidden md:flex">
          <h2 className="w-full mt-4 text-center font-semibold text-lg md:text-2xl">
            Notificaciones
          </h2>
        </div>
        <div className={`${mTop} mb-2 px-2 border-b`}>
          <p className="text-lg font-semibold mb-2 ml-1">Hoy</p>
          <Notification
            type="like"
            usuario="usernameprueba123"
            timeAgo="20 minutes ago"
          />
          <Notification
            type="comment"
            usuario="prueba123"
            timeAgo="4 minutes ago"
          />
        </div>
        <div className="mb-2 px-2 border-b">
          <p className="text-lg font-semibold mb-2 md:mb-0 ml-1 py-2 ">
            Esta semana
          </p>
          <Notification type="comment" usuario="user123" timeAgo="1 hour ago" />
          <Notification type="like" usuario="usetcfes45" timeAgo="3 days ago" />
          <Notification
            type="like"
            usuario="pftrsf12"
            timeAgo="59 seconds ago"
          />
          <Notification type="comment" usuario="xdxncx" timeAgo="1 month ago" />
          <Notification type="comment" usuario="xdxncx" timeAgo="1 month ago" />
          <Notification type="comment" usuario="xdxncx" timeAgo="1 month ago" />
          <Notification type="comment" usuario="xdxncx" timeAgo="1 month ago" />
          <Notification type="comment" usuario="xdxncx" timeAgo="1 month ago" />
          <Notification type="comment" usuario="xdxncx" timeAgo="1 month ago" />
          <Notification type="comment" usuario="xdxncx" timeAgo="1 month ago" />
          <Notification type="comment" usuario="xdxncx" timeAgo="1 month ago" />
          <Notification type="comment" usuario="xdxncx" timeAgo="1 month ago" />
          <Notification type="comment" usuario="xdxncx" timeAgo="1 month ago" />
          <Notification type="comment" usuario="xdxncx" timeAgo="1 month ago" />
          <Notification type="comment" usuario="xdxncx" timeAgo="1 month ago" />
          <Notification type="comment" usuario="xdxncx" timeAgo="1 month ago" />
          <Notification type="comment" usuario="xdxncx" timeAgo="1 month ago" />
        </div>
      </div>
    </>
  );
}
