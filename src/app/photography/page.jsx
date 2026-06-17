import PhotographyClient from "./PhotographyClient";
import { JsonLd } from "@/components/JsonLd";
import { photoSpots } from "@/lib/tools";

export const metadata = {
  title: "Munsiyari Photography Spots | Sunrise, Milky Way & Drone",
  description: "Discover the best photography spots in Munsiyari — sunrise decks, Panchachuli viewpoints, Milky Way and drone locations with best time, coordinates, lens and season tips.",
  openGraph: {
    title: "Munsiyari Photography Spot Finder",
    url: "/photography",
  },
  alternates: {
    canonical: "/photography",
  },
};

export default function Page() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Munsiyari Photography Spots",
    itemListElement: photoSpots.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: s.name
    }))
  };

  return (
    <>
      <JsonLd data={schemaData} />
      <PhotographyClient />
    </>
  );
}
