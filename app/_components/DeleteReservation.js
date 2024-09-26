"use client";

import { IoTrash } from "react-icons/io5";
import { deleteBooking } from "@/app/_lib/actions";
import { useTransition } from "react";

import SpinnerMini from "./SpinnerMini";

function DeleteReservation({ bookingId, onDelete }) {
  const [isPending, startTransition] = useTransition();

  function handleDelete() {
    if (confirm("Are you sure you want to delete this reservation?"))
      startTransition(() => onDelete(bookingId));
  }

  return (
    <button
      onClick={handleDelete}
      className="group flex items-center gap-2 uppercase text-xs font-bold text-bistre-200 flex-grow px-3 hover:bg-borange-300 transition-colors hover:text-bistre-600"
    >
      {!isPending ? (
        <>
          <IoTrash className="h-5 w-5 text-bistre-300 group-hover:text-bistre-600 transition-colors" />
          <span className="mt-1">Delete</span>
        </>
      ) : (
        <span className="mx-auto">
          <SpinnerMini />
        </span>
      )}
    </button>
  );
}

export default DeleteReservation;
