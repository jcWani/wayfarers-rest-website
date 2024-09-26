import Link from "next/link";

function LoginMessage() {
  return (
    <div className="grid bg-bistre-500 ">
      <p className="text-center text-xl py-12 self-center">
        Please{" "}
        <Link href="/login" className="underline text-borange-300">
          login
        </Link>{" "}
        to reserve this
        <br /> room right now
      </p>
    </div>
  );
}

export default LoginMessage;
