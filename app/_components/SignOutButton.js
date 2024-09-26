import { signOutAction } from "@/app/_lib/actions";
import { IoLogOut } from "react-icons/io5";

function SignOutButton() {
  return (
    <form action={signOutAction}>
      <button className="py-3 px-5 hover:bg-bistre-600 hover:text-bistre-200 transition-colors flex items-center gap-4 font-semibold text-bistre-100 w-full">
        <IoLogOut className="h-5 w-5 text-bistre-400" />
        <span>Sign out</span>
      </button>
    </form>
  );
}

export default SignOutButton;
