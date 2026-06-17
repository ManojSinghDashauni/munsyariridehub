import HiddenGemsClient from "./HiddenGemsClient";
import { JsonLd } from "@/components/JsonLd";
import { hiddenGems } from "@/lib/tools";

export const metadata = {
  title: "Munsiyari Hidden Gems | Secret Spots & Offbeat Places",
  description: "Discover Munsiyari's hidden gems — secret viewpoints, offbeat villages, quiet lakes and nature trails most tourists never find. Local stories, tips and how to reach each.",
  openGraph: {
    title: "Munsiyari Hidden Gems Explorer",
    url: "/hidden-gems",
  },
  alternates: {
    canonical: "/hidden-gems",
  },
};

export default function Page() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Munsiyari Hidden Gems",
    itemListElement: hiddenGems.map((g, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: g.name
    }))
  };

  return (
    <>
      <JsonLd data={schemaData} />
      <HiddenGemsClient />
    </>
  );
}
