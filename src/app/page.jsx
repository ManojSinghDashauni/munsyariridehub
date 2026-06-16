import HomeClient from "./HomeClient";
import heroImg from "@/assets/hero-mountain.jpg";

export const metadata = {
  title: "Bike & Scooty Rental in Munsiyari | Munsiyari Ride Hub",
  description: "Rent bikes & scooty in Munsiyari. Royal Enfield, Himalayan & scooters with best rates, free helmets & instant WhatsApp booking. Explore Panchachuli, Khaliya Top & Birthi Falls.",
  openGraph: {
    title: "Bike & Scooty Rental in Munsiyari | Munsiyari Ride Hub",
    images: [heroImg.src || heroImg],
    url: "/",
  },
  alternates: {
    canonical: "/",
  },
};

export default function Page() {
  return <HomeClient />;
}
