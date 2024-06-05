export default async function NotFound() {
  return (
    <>
      <div className="h-screen bg-background text-center flex flex-col items-center justify-center">
        <div className="flex items-start justify-start">
          <h1 className="inline-block text-5xl border-r-4 mr-4 px-2">404</h1>
          <div className="inline-block text-3xl">
            <h2 className="">Could not be found.</h2>
          </div>
        </div>
      </div>
    </>
  );
}
