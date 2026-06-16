import GalleryClient from "./GalleryClient";

export const metadata = {
  title: "Munsiyari Gallery | Photos of Bikes, Peaks & Destinations",
  description: "Photo gallery of Munsiyari — snow peaks, waterfalls, heritage villages and our rental bikes & scooters. Get inspired for your Himalayan adventure.",
  openGraph: {
    title: "Munsiyari Gallery",
    url: "/gallery",
  },
  alternates: {
    canonical: "/gallery",
  },
};

export default function Page() {
  return <GalleryClient />;
}
