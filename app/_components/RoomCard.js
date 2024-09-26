import { IoPeople } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";

function RoomCard({ room }) {
  const { id, name, maxCapacity, regularPrice, discount, image } = room;

  return (
    <div className="flex border-bistre-500 border">
      <div className="flex-1 relative">
        <Image
          src={image}
          fill
          sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="flex-1 border-r border-bistre-500 object-cover"
          alt={`Room ${name}`}
        />
      </div>

      <div className="flex-grow">
        <div className="pt-5 pb-4 px-7 bg-bistre-800">
          <h3 className="text-borange-300 font-semibold text-2xl mb-3">
            Room {name}
          </h3>

          <div className="flex gap-3 items-center mb-2">
            <IoPeople className="h-5 w-5 text-bistre-300" />
            <p className="text-lg text-bistre-200">
              For up to <span className="font-bold">{maxCapacity}</span> guests
            </p>
          </div>

          <p className="flex gap-3 justify-end items-baseline">
            {discount > 0 ? (
              <>
                <span className="text-3xl font-[350]">
                  ₱{regularPrice - discount}
                </span>
                <span className="line-through font-semibold text-bistre-400">
                  ₱{regularPrice}
                </span>
              </>
            ) : (
              <span className="text-3xl font-[350]">₱{regularPrice}</span>
            )}
            <span className="text-bistre-200">/ night</span>
          </p>
        </div>

        <div className="bg-bistre-800 border-t border-t-bistre-500 text-right">
          <Link
            href={`/rooms/${id}`}
            className="border-l border-bistre-500 py-4 px-6 inline-block hover:bg-borange-300 transition-all hover:text-bistre-500"
          >
            Details & reservation &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RoomCard;
