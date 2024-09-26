import Image from "next/image";
import Link from "next/link";
import { IoCreate } from "react-icons/io5";
import { format, formatDistance, isPast, isToday, parseISO } from "date-fns";
import DeleteReservation from "./DeleteReservation";

export const formatDistanceFromNow = (dateStr) =>
  formatDistance(parseISO(dateStr), new Date(), {
    addSuffix: true,
  }).replace("about ", "");

function ReservationCard({ booking, onDelete }) {
  const {
    id,
    guestId,
    startDate,
    endDate,
    numNights,
    totalPrice,
    numGuests,
    status,
    created_at,
    rooms: { name, image },
  } = booking;

  return (
    <div className="flex border border-bistre-500">
      <div className="relative h-32 aspect-square">
        <Image
          src={image}
          alt={`Room ${name}`}
          fill
          className="object-cover border-r border-bistre-500"
        />
      </div>

      <div className="flex-grow px-6 py-3 flex flex-col">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold">
            {numNights} nights in Room {name}
          </h3>
          {isPast(new Date(startDate)) ? (
            <span className="bg-yellow-700 text-yellow-100 h-7 px-3 uppercase text-xs font-bold flex items-center rounded-[20px]">
              past
            </span>
          ) : (
            <span className="bg-green-800 text-green-100 h-7 px-3 uppercase text-xs font-bold flex items-center rounded-[20px]">
              upcoming
            </span>
          )}
        </div>

        <p className="text-lg text-bistre-200">
          {format(new Date(startDate), "EEE, MMM dd yyyy")} (
          {isToday(new Date(startDate))
            ? "Today"
            : formatDistanceFromNow(startDate)}
          ) &mdash; {format(new Date(endDate), "EEE, MMM dd yyyy")}
        </p>

        <div className="flex gap-5 mt-auto items-baseline">
          <p className="text-xl font-semibold text-borange-300">
            ₱{totalPrice}
          </p>
          <p className="text-bistre-200">&bull;</p>
          <p className="text-lg text-bistre-200">
            {numGuests} guest{numGuests > 1 && "s"}
          </p>
          <p className="ml-auto text-sm text-bistre-300">
            Booked {format(new Date(created_at), "EEE, MMM dd yyyy, p")}
          </p>
        </div>
      </div>

      <div className="flex flex-col border-l border-bistre-500 w-[100px]">
        {!isPast(startDate) ? (
          <>
            <Link
              href={`/account/reservations/edit/${id}`}
              className="group flex items-center gap-2 uppercase text-xs font-bold text-bistre-200 border-b border-bistre-500 flex-grow px-3 hover:bg-borange-300 transition-colors hover:text-bistre-500"
            >
              <IoCreate className="h-5 w-5 text-bistre-300 group-hover:text-bistre-500 transition-colors" />
              <span className="mt-1">Edit</span>
            </Link>
            <DeleteReservation bookingId={id} onDelete={onDelete} />
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default ReservationCard;
