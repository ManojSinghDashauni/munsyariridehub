import FuelCalculatorClient from "./FuelCalculatorClient";
import { JsonLd } from "@/components/JsonLd";

export const metadata = {
  title: "Fuel Cost Calculator | Munsiyari Bike Trip Budget",
  description: "Calculate fuel consumption, fuel cost and total trip expense for your Munsiyari bike or scooty ride. Pick distance, vehicle, mileage and fuel price for instant estimates.",
  openGraph: {
    title: "Munsiyari Fuel Cost Calculator",
    url: "/fuel-calculator",
  },
  alternates: {
    canonical: "/fuel-calculator",
  },
};

export default function Page() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Munsiyari Fuel Cost Calculator",
    applicationCategory: "TravelApplication"
  };

  return (
    <>
      <JsonLd data={schemaData} />
      <FuelCalculatorClient />
    </>
  );
}
