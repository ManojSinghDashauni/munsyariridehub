import "../styles.css";
import { Providers } from "./providers";

export const metadata = {
  title: "Munsiyari Ride Hub | Bike & Scooty Rental in Munsiyari",
  description: "Premium self-drive bike & scooty rental in Munsiyari. Royal Enfield, Himalayan & scooters with free helmets, best rates & instant WhatsApp booking. Ride Beyond Roads.",
  authors: [{ name: "Munsiyari Ride Hub" }],
  openGraph: {
    title: "Munsiyari Ride Hub | Bike & Scooty Rental in Munsiyari",
    description: "Self-drive bike & scooty rental in Munsiyari with best rates and instant WhatsApp booking. Explore Panchachuli, Khaliya Top & Birthi Falls.",
    type: "website",
    siteName: "Munsiyari Ride Hub",
    images: [
      {
        url: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/76edc7e7-2743-4edc-96d8-50fd590e51a5/id-preview-922d1f16--077a3b13-eef6-4bba-9865-9fb4dcc10e24.lovable.app-1781631676310.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@MunsiyariRideHub",
    title: "Munsiyari Ride Hub | Bike & Scooty Rental in Munsiyari",
    description: "Munsiyari Ride Explorer is a frontend-only bike and scooter rental website for Munsiyari, India.",
    images: [
      "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/76edc7e7-2743-4edc-96d8-50fd590e51a5/id-preview-922d1f16--077a3b13-eef6-4bba-9865-9fb4dcc10e24.lovable.app-1781631676310.png",
    ],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Munsiyari Ride Hub",
  description: "Self-drive bike and scooty rental service in Munsiyari, Uttarakhand.",
  areaServed: "Munsiyari, Uttarakhand, India",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Main Market Road",
    addressLocality: "Munsiyari",
    addressRegion: "Uttarakhand",
    postalCode: "262554",
    addressCountry: "IN",
  },
  geo: { "@type": "GeoCoordinates", latitude: 30.0707, longitude: 80.2386 },
  telephone: "+91 98765 43210",
  openingHours: "Mo-Su 07:00-20:00",
  priceRange: "₹₹",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Merriweather:wght@400;700&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
