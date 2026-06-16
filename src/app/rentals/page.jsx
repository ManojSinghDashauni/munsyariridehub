import RentalsClient from "./RentalsClient";

export const metadata = {
  title: "Bike & Scooty Rentals in Munsiyari | Royal Enfield, Himalayan & Scooty",
  description: "Browse self-drive bike & scooty rentals in Munsiyari. Royal Enfield Classic 350, Himalayan & Honda Activa with transparent pricing, free helmets & WhatsApp booking.",
  openGraph: {
    title: "Bike & Scooty Rentals in Munsiyari",
    url: "/rentals",
  },
  alternates: {
    canonical: "/rentals",
  },
};

export default function Page() {
  return <RentalsClient />;
}
