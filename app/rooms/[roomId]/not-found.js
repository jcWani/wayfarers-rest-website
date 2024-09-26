import Link from "next/link";

function NotFound() {
  return (
    <main className="text-center space-y-6 mt-4">
      <h1 className="text-3xl font-semibold">
        This room could not be found 😢
      </h1>
      <Link
        href="/rooms"
        className="inline-block bg-borange-400 text-bistre-500 px-6 py-3 text-lg rounded-[20px]"
      >
        Go back home
      </Link>
    </main>
  );
}

export default NotFound;
