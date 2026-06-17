import RoutePlannerClient from "./RoutePlannerClient";
import { JsonLd } from "@/components/JsonLd";
import { routePlans } from "@/lib/tools";

export const metadata = {
  title: "Munsiyari Route Planner | Distance, Time & Best Routes",
  description: "Plan your Munsiyari ride: distance, travel time, difficulty, road condition, fuel estimate and recommended vehicle for Khaliya Top, Birthi Falls, Panchachuli, Darkot & Kalamuni.",
  openGraph: {
    title: "Interactive Munsiyari Route Planner",
    url: "/route-planner",
  },
  alternates: {
    canonical: "/route-planner",
  },
};

export default function Page() {
  const howToData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Plan a ride in Munsiyari",
    step: routePlans.map((r) => ({
      "@type": "HowToStep",
      name: r.destination,
      text: `${r.distanceKm} km, ${r.difficulty}, best ${r.bestTime}`
    }))
  };

  return (
    <>
      <JsonLd data={howToData} />
      <RoutePlannerClient />
    </>
  );
}
