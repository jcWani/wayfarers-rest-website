import Header from "@/app/_components/Header";
import "@/app/_styles/globals.css";

import { Montserrat } from "next/font/google";
import { ReservationProvider } from "./_components/ReservationContext";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    template: "%s | Wayfarers Rest",
    default: "Welcome | Wayfarers Rest",
    description:
      "Luxurious room hotel, located in the heart of the Italian Dolomites, surrounded by beautiful mountains and dark forests.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} bg-bistre-800 text-bistre-100 min-h-screen antialiased flex flex-col relative`}
      >
        <Header />

        <div className="flex-1 px-8 py-12 grid">
          <main className="max-w-7xl mx-auto w-full">
            <ReservationProvider>{children}</ReservationProvider>
          </main>
        </div>
      </body>
    </html>
  );
}
