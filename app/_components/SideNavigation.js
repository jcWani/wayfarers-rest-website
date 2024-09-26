"use client";
import { usePathname } from "next/navigation";

import { IoCalendar, IoHome, IoPerson } from "react-icons/io5";
import SignOutButton from "./SignOutButton";
import Link from "next/link";

const navLinks = [
  {
    name: "Home",
    href: "/account",
    icon: <IoHome className="h-5 w-5 text-bistre-300" />,
  },
  {
    name: "Reservations",
    href: "/account/reservations",
    icon: <IoCalendar className="h-5 w-5 text-bistre-300" />,
  },
  {
    name: "Guest profile",
    href: "/account/profile",
    icon: <IoPerson className="h-5 w-5 text-bistre-300" />,
  },
];

function SideNavigation() {
  const pathname = usePathname();

  return (
    <nav className="border-r border-bistre-600">
      <ul className="flex flex-col gap-2 h-full text-lg">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link
              className={`py-3 px-5 hover:bg-bistre-600 hover:text-bistre-200 transition-colors flex items-center gap-4 font-semibold text-bistre-100 ${
                pathname === link.href ? "bg-bistre-600" : ""
              }`}
              href={link.href}
            >
              {link.icon}
              <span>{link.name}</span>
            </Link>
          </li>
        ))}

        <li className="mt-auto">
          <SignOutButton />
        </li>
      </ul>
    </nav>
  );
}

export default SideNavigation;
