import { notFound } from "next/navigation";
import { vehicles } from "@/lib/data";
import VehicleDetailClient from "./VehicleDetailClient";

export async function generateStaticParams() {
  return vehicles.map((v) => ({
    slug: v.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const vehicle = vehicles.find((v) => v.slug === slug);
  if (!vehicle) return {};

  return {
    title: `${vehicle.name} Rental in Munsiyari | Munsiyari Ride Hub`,
    description: vehicle.description,
    openGraph: {
      title: `${vehicle.name} Rental in Munsiyari`,
      images: [vehicle.image],
      url: `/rentals/${vehicle.slug}`,
    },
    alternates: {
      canonical: `/rentals/${vehicle.slug}`,
    },
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const vehicle = vehicles.find((v) => v.slug === slug);
  if (!vehicle) {
    notFound();
  }

  return <VehicleDetailClient vehicle={vehicle} />;
}
