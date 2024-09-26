import { auth } from "@/app/_lib/auth";
import { updateGuest } from "@/app/_lib/actions";
import { getGuest } from "@/app/_lib/data-service";

import SelectCountry from "@/app/_components/SelectCountry";
import SubmitButton from "@/app/_components/SubmitButton";

export const metadata = {
  title: "Update profile",
};

export default async function Page() {
  const session = await auth();
  const guest = await getGuest(session.user.email);

  const { fullName, email, nationality, nationalID, countryFlag } = guest;

  return (
    <div>
      <h2 className="font-semibold text-2xl text-borange-200 mb-4">
        Update your guest profile
      </h2>
      <p className="text-lg mb-8 text-bistre-200">
        Providing the following information will make your check-in process
        faster and smoother. See you soon!
      </p>

      <form
        action={updateGuest}
        className="bg-bistre-500 py-8 px-12 text-lg flex gap-6 flex-col"
      >
        <div className="space-y-2">
          <label>Full name</label>
          <input
            disabled
            defaultValue={fullName}
            name="fullName"
            className="px-5 py-3 bg-bistre-200 text-bistre-500 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-bistre-800 disabled:text-bistre-400"
          />
        </div>

        <div className="space-y-2">
          <label>Email address</label>
          <input
            disabled
            defaultValue={email}
            name="email"
            className="px-5 py-3 bg-bistre-200 text-bistre-500 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-bistre-800 disabled:text-bistre-400"
          />
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label htmlFor="nationality">Where are you from?</label>
            <img
              src={countryFlag}
              alt="Country flag"
              className="h-5 rounded-sm"
            />
          </div>

          <SelectCountry
            name="nationality"
            id="nationality"
            className="px-5 py-3 bg-bistre-200 text-bistre-500 w-full shadow-sm rounded-sm"
            defaultCountry={nationality}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="nationalID">National ID number</label>
          <input
            defaultValue={nationalID}
            name="nationalID"
            className="px-5 py-3 bg-bistre-200 text-bistre-500 w-full shadow-sm rounded-sm"
          />
        </div>

        <div className="flex justify-end items-center gap-6">
          <SubmitButton pendingLabel="Updating...">Update profile</SubmitButton>
        </div>
      </form>
    </div>
  );
}
