// Central business configuration for MUNSIYARI RIDE HUB
export const SITE = {
  name: "Munsiyari Ride Hub",
  tagline: "Ride Beyond Roads",
  // Replace with the real number (international format, no + or spaces) when available
  whatsapp: "919876543210",
  phone: "+91 98765 43210",
  email: "hello@munsiyariridehub.com",
  address: "Main Market Road, Munsiyari, Pithoragarh, Uttarakhand 262554",
  city: "Munsiyari",
  state: "Uttarakhand",
  hours: "7:00 AM – 8:00 PM, all days",
  geo: { lat: 30.0707, lng: 80.2386 },
  mapsEmbed:
    "https://www.google.com/maps?q=Munsiyari,+Uttarakhand&output=embed",
  mapsDirections: "https://www.google.com/maps/dir/?api=1&destination=Munsiyari,Uttarakhand",
};

export function whatsappLink(message) {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function bookingMessage(vehicle) {
  return vehicle
    ? `Hi Munsiyari Ride Hub! I'd like to book the ${vehicle}. Please share availability and rates.`
    : `Hi Munsiyari Ride Hub! I'd like to rent a bike/scooty in Munsiyari. Please share availability and rates.`;
}
