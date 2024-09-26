"use client";

import { createBooking } from "@/app/_lib/actions";
import { useReservation } from "./ReservationContext";
import { differenceInDays } from "date-fns";
import SubmitButton from "./SubmitButton";

function ReservationForm({ room, user }) {
  const { range, resetRange } = useReservation();

  const { maxCapacity, regularPrice, discount, id } = room;

  const startDate = range?.from;
  const endDate = range?.to;

  const numNights = differenceInDays(endDate, startDate);
  const roomPrice = numNights * (regularPrice - discount);

  const bookingData = {
    startDate,
    endDate,
    numNights,
    roomPrice,
    roomId: id,
  };

  const createBookingWithData = createBooking.bind(null, bookingData);

  return (
    <div className="scale-[1.01]">
      <div className="bg-bistre-500 text-bistre-100 px-16 py-2 flex justify-between items-center border-b border-b-bistre-500">
        <p>Logged in as</p>

        <div className="flex gap-4 items-center">
          <img
            referrerPolicy="no-referrer"
            className="h-8 rounded-full"
            src={user.image}
            alt={user.name}
          />
          <p>
            {user.name.split(" ").at(0) + " " + user.name.split(" ").at(-1)}
          </p>
        </div>
      </div>

      <form
        action={async (formData) => {
          await createBookingWithData(formData);
          resetRange();
        }}
        className="bg-bistre-500 py-10 px-16 text-lg flex gap-5 flex-col"
      >
        <div className="space-y-2">
          <label htmlFor="numGuests">How many guests?</label>
          <select
            name="numGuests"
            id="numGuests"
            className="px-5 py-3 bg-bistre-200 text-bistre-500 w-full shadow-sm rounded-sm "
            required
          >
            <option value="" key="">
              Select number of guests...
            </option>
            {Array.from({ length: maxCapacity }, (_, i) => i + 1).map((x) => (
              <option value={x} key={x}>
                {x} {x === 1 ? "guest" : "guests"}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="observations">
            Anything we should know about your stay?
          </label>
          <textarea
            name="observations"
            id="observations"
            className="px-5 py-3 bg-bistre-200 text-bistre-500 w-full shadow-sm rounded-sm placeholder:text-bistre-400"
            placeholder="Any pets, allergies, special requirements, etc.?"
          />
        </div>

        <div className="flex items-center gap-6 justify-between">
          {!(startDate && endDate) ? (
            <p className="text-bistre-300 text-base">
              Start by selecting dates
            </p>
          ) : (
            <>
              <div className="flex gap-2 items-center">
                <input
                  type="checkbox"
                  id="hasBreakfast"
                  name="hasBreakfast"
                  className="border-bistre-300 rounded h-5 w-5 accent-bistre-300"
                />
                <label htmlFor="hasBreakfast" className="text-bistre-100">
                  Breakfast
                </label>
              </div>
              <SubmitButton pendingLabel="Reserving...">
                Reserve now
              </SubmitButton>
            </>
          )}
        </div>
      </form>
    </div>
  );
}

export default ReservationForm;
