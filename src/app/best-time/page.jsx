import BestTimeClient from "./BestTimeClient";
import { JsonLd } from "@/components/JsonLd";

export const metadata = {
  title: "Best Time to Visit Munsiyari | Month-by-Month Travel Planner",
  description: "Month-wise Munsiyari travel planner — temperature, weather, crowd levels, photography, snowfall, adventure and trekking scores. Find the best time for families, couples and photography.",
  openGraph: {
    title: "Best Time to Visit Munsiyari",
    url: "/best-time",
  },
  alternates: {
    canonical: "/best-time",
  },
};

export default function Page() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the best time to visit Munsiyari?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "October and April–June offer the clearest skies and best riding; December–February for snowfall."
        }
      }
    ]
  };

  return (
    <>
      <JsonLd data={schemaData} />
      <BestTimeClient />
    </>
  );
}
