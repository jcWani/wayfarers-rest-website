import { auth } from "@/app/_lib/auth";

export const metadata = {
  title: "Your Account",
};

export default async function Page() {
  const session = await auth();
  const firstName = session.user.name.split(" ").at(0);

  return (
    <h2 className="font-semibold text-2xl text-borange-200 mb-7">
      Welcome, {firstName}
    </h2>
  );
}
