import WeatherClient from "./WeatherClient";
import { JsonLd } from "@/components/JsonLd";

export const metadata = {
  title: "Munsiyari Weather Today | Live Travel Weather Dashboard",
  description: "Munsiyari weather dashboard — temperature, wind, humidity, sunrise & sunset, rain probability and UV index with smart travel recommendations for every destination.",
  openGraph: {
    title: "Munsiyari Weather Intelligence Center",
    url: "/weather",
  },
  alternates: {
    canonical: "/weather",
  },
};

export default function Page() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Munsiyari Weather Intelligence Center",
    applicationCategory: "TravelApplication",
    description: "Live weather and travel recommendations for Munsiyari."
  };

  return (
    <>
      <JsonLd data={schemaData} />
      <WeatherClient />
    </>
  );
}
