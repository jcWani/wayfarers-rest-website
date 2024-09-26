import { getRooms } from "@/app/_lib/data-service";
import image1 from "@/public/about-1.webp";
import Image from "next/image";
import Link from "next/link";

const revalidate = 86400;

export const metadata = {
  title: "About",
};

export default async function Page() {
  const rooms = await getRooms();

  return (
    <div className="grid grid-cols-5 gap-x-24 gap-y-32 text-lg items-center">
      <div className="col-span-3">
        <h1 className="text-4xl mb-10 text-borange-200 font-medium">
          Our story
        </h1>

        <div className="space-y-8">
          <p>
            Welcome to Wayfarers Rest, a haven for travelers from all walks of
            life. Born from a love of adventure and a passion for hospitality,
            our inn was created to offer a serene escape where guests can relax
            and recharge. Inspired by the timeless charm of fantasy inns, we
            blend rustic elegance with modern comforts to create a unique,
            immersive experience. Whether you&apos;re on a grand journey or
            simply seeking a peaceful getaway, Wayfarers Rest is your home away
            from home. Step inside, and let your story unfold.
          </p>
          <p>
            Our {rooms.length} luxury rooms offer a cozy retreat, but the true
            sense of freedom and serenity lies in the surrounding mountains.
            Explore lush forests, inhale the crisp mountain air, and gaze at the
            stars from the comfort of a campfire or your private hot tub.
          </p>
          <p>
            At Wayfarers Rest, we believe every journey deserves a peaceful
            retreat. Whether you&apos;re seeking relaxation or adventure,
            we&apos;re here to welcome you. We look forward to being a part of
            your story and hope you&apos;ll return time and time again.
          </p>
        </div>
      </div>

      <div className="col-span-2">
        <Image
          src={image1}
          placeholder="blur"
          quality={80}
          alt="Family sitting around a fire pit in front of room"
        />
      </div>

      <div className="relative col-span-2 aspect-square">
        <Image
          src="/about-2.webp"
          fill
          className="object-cover"
          alt="Family that manages Wayfarers Rest"
        />
      </div>

      <div className="col-span-3">
        <h1 className="text-4xl mb-10 text-borange-200 font-medium">
          Meet the Keepers of Wayfarers Rest
        </h1>

        <div className="space-y-8">
          <p>
            Since 1962, Wayfarers Rest has been a beloved family-owned retreat.
            Founded by our grandparents, this haven has been lovingly maintained
            and passed down through generations, reflecting our commitment to
            creating a warm and welcoming atmosphere for all who visit.
          </p>
          <p>
            Behind the warmth and care of Wayfarers Rest is a passionate team of
            hosts who share a love for adventure and hospitality. With years of
            experience in creating memorable stays, we&apos;re dedicated to
            ensuring every guest feels welcomed, relaxed, and cared for. Our
            commitment to personalized service and attention to detail ensures
            that every visit feels like coming home.
          </p>

          <div>
            <Link
              href="/rooms"
              className="inline-block mt-4 bg-borange-300 px-8 py-5 text-bistre-500 text-lg font-semibold hover:bg-borange-400 transition-all rounded-[20px]"
            >
              Explore our rooms
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
