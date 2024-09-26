import { getRooms } from "@/app/_lib/data-service";
import RoomCard from "./RoomCard";

async function RoomList({ filter }) {
  const rooms = await getRooms();

  if (!rooms.length) return null;

  let displayedRooms;
  if (filter === "all") displayedRooms = rooms;
  if (filter === "small")
    displayedRooms = rooms.filter((room) => room.maxCapacity <= 3);
  if (filter === "medium")
    displayedRooms = rooms.filter(
      (room) => room.maxCapacity >= 4 && room.maxCapacity <= 7
    );
  if (filter === "large")
    displayedRooms = rooms.filter((room) => room.maxCapacity >= 8);

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
      {displayedRooms.map((room) => (
        <RoomCard room={room} key={room.id} />
      ))}
    </div>
  );
}

export default RoomList;
