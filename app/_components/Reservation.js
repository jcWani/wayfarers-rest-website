import { auth } from "@/app/_lib/auth";
import { getBookedDatesByRoomId, getSettings } from "@/app/_lib/data-service";
import DateSelector from "./DateSelector";
import LoginMessage from "./LoginMessage";
import ReservationForm from "./ReservationForm";

async function Reservation({ room }) {
  const [settings, bookedDates] = await Promise.all([
    getSettings(),
    getBookedDatesByRoomId(room.id),
  ]);
  const session = await auth();

  return (
    <div className="grid grid-cols-2 border border-bistre-500 min-h-[400px]">
      <DateSelector settings={settings} bookedDates={bookedDates} room={room} />
      {session?.user ? (
        <ReservationForm room={room} user={session.user} />
      ) : (
        <LoginMessage />
      )}
    </div>
  );
}

export default Reservation;
