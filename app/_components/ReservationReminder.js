"use client";

import { IoClose } from "react-icons/io5";
import { format } from "date-fns";
import { useReservation } from "./ReservationContext";

function ReservationReminder() {
  const { range, resetRange } = useReservation();

  if (!range?.from || !range?.to) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 py-5 px-8 rounded-full bg-borange-300 text-bistre-500 text  font-semibold shadow-xl shadow-bistre-800 flex gap-8 items-center">
      <p>
        <span>👋</span> Don&apos;f forget to reserve your dates <br /> from{" "}
        {format(new Date(range?.from), "MMM dd yyyy")} to{" "}
        {format(new Date(range?.to), "MMM dd yyyy")}
      </p>
      <button
        className="rounded-full p-1 hover:bg-borange-500 transition-all"
        onClick={resetRange}
      >
        <IoClose className="h-5 w-5" />
      </button>
    </div>
  );
}

export default ReservationReminder;
