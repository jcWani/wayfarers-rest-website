import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      <Image
        src={logo}
        height="50"
        width="50"
        alt="Wayfarers Rest logo"
        quality={100}
      />
      <span className="text-xl font-semibold text-bistre-100">
        Wayfarers Rest
      </span>
    </Link>
  );
}

export default Logo;
