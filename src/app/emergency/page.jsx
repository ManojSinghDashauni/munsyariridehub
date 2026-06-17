import EmergencyClient from "./EmergencyClient";
import { JsonLd } from "@/components/JsonLd";

export const metadata = {
  title: "Munsiyari Emergency Help | Hospitals, Police & Numbers",
  description: "Munsiyari emergency assistance hub — hospitals, police, tourist help, vehicle repair, fuel stations and ATMs with click-to-call numbers and map directions.",
  openGraph: {
    title: "Munsiyari Emergency Assistance Hub",
    url: "/emergency",
  },
  alternates: {
    canonical: "/emergency",
  },
};

export default function Page() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "EmergencyService",
    name: "Munsiyari Emergency Assistance",
    areaServed: "Munsiyari, Uttarakhand",
    telephone: "112"
  };

  return (
    <>
      <JsonLd data={schemaData} />
      <EmergencyClient />
    </>
  );
}
