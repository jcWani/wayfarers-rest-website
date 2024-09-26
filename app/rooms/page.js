import { Suspense } from "react";

import RoomList from "@/app/_components/RoomList";
import Spinner from "@/app/_components/Spinner";
import Filter from "@/app/_components/Filter";
import ReservationReminder from "@/app/_components/ReservationReminder";

export const metadata = {
  title: "Rooms",
};

export default function Page({ searchParams }) {
  const filter = searchParams?.capacity ?? "all";

  return (
    <div>
      <h1 className="text-4xl mb-5 text-borange-200 font-medium">
        Our Cozy Retreats
      </h1>
      <p className="text-bistre-100 text-lg mb-10">
        At Wayfarers Rest, each room is designed to offer a sanctuary for
        travelers seeking comfort and tranquility. Inspired by the charm of
        rustic inns from a bygone era, our rooms blend modern amenities with a
        cozy, fantasy-inspired atmosphere. Whether you seek solitude,
        relaxation, or a warm place to rest after a long journey, our
        thoughtfully crafted spaces provide the perfect escape. Explore our
        range of rooms and discover your personal retreat in the heart of
        nature.
      </p>

      <div className="flex justify-end mb-8">
        <Filter />
      </div>

      <Suspense fallback={<Spinner />} key={filter}>
        <RoomList filter={filter} />
        <ReservationReminder />
      </Suspense>
    </div>
  );
}
