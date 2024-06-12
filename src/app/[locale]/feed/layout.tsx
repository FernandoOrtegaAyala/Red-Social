import ModalCreatePost from "@/components/ModalCreatePost";

export default function FeedLayout({children}: {children: React.ReactNode}) {
  return (
    <>
      <div className="relative w-full h-screen overflow-hidden">
        {children}
        <ModalCreatePost />
      </div>
    </>
  )
}