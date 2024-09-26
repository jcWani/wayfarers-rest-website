import Image from "next/image";
import bg from "@/public/bg.webp";
import Link from "next/link";

export default function Page() {
  return (
    <main className="mt-24">
      <Image
        src={bg}
        fill
        placeholder="blur"
        quality={100}
        className="object-cover object-top brightness-[0.5]"
        alt="An inn in the forest"
      />

      <div className="relative z-10 text-center">
        <h1 className="text-7xl text-bistre-100 mb-16 tracking-tight font-medium">
          Gateway to Tranquility
        </h1>
        <Link
          href="/rooms"
          className="bg-borange-300 px-8 py-6 text-bistre-500 text-lg font-semibold hover:bg-borange-400 transition-all rounded-[20px]"
        >
          Explore rooms
        </Link>
      </div>
    </main>
  );
}
