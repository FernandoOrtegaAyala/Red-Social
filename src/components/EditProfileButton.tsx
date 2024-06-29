import Link from "next/link";

export default function EditProfileButton({
  editProfile,
}: {
  editProfile: string;
}) {
  return (
    <>
      <div className="w-full flex pl-5 md:pl-0 justify-start md:justify-center mt-4">
        <Link
          href="/feed/settings/edit"
          className="w-1/2 px-0 h-9 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground">
          {editProfile}
        </Link>
      </div>
    </>
  );
}
