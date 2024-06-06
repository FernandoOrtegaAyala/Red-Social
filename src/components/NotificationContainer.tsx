import NotificationsBar from "@/components/NotificationsBar";

export default function NotificationContainer() {
  return (
    <>
      <div
        id="contenedorNotificaciones"
        className="hidden z-50 bg-background overflow-y-auto w-72 h-screen fixed top-0 left-16 lg:left-40">
        <NotificationsBar mTop="mt-4" />
      </div>
    </>
  );
}
