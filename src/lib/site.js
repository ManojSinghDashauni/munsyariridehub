// Central business configuration for MUNSIYARI RIDE HUB
export const SITE = {
  name: "Munsiyari Ride Hub",
  tagline: "Ride Beyond Roads",
  // Replace with the real number (international format, no + or spaces) when available
  whatsapp: "7017814023",
  phone: "+91 8449796123",
  email: "munsiyariridehub@gmail.com",
  address: "Main Market Road, Munsiyari, Pithoragarh, Uttarakhand 262554",
  city: "Munsiyari",
  state: "Uttarakhand",
  hours: "7:00 AM – 8:00 PM, all days",
  // geo: { lat: 30.0707, lng: 80.2386 },
  // mapsEmbed:
  //   "https://www.google.com/maps?q=Munsiyari,+Uttarakhand&output=embed",
  // mapsDirections: "https://www.google.com/maps/dir/?api=1&destination=Munsiyari,Uttarakhand",

  geo: { lat: 30.0672492, lng: 80.2386448 },

    mapsEmbed:
      "https://www.google.com/maps?q=30.0672492,80.2386448&z=17&output=embed",
  
    mapsDirections:
      "https://www.google.com/maps/dir/?api=1&destination=30.0672492,80.2386448",
  
    googleMapsUrl:
      "https://www.google.com/maps/place/MUNSYARI+RIDE+HUB/@30.0672492,80.2386448,17z/data=!3m1!4b1!4b1!4m6!3m5!1s0x39a6dbf1607c0a1f:0xa85a46edb869af0b!8m2!3d30.0672492!4d80.2386448!16s%2Fg%2F11zkxsp_r6",
};

export function whatsappLink(message) {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function bookingMessage(vehicle) {
  return vehicle
    ? `Hi Munsiyari Ride Hub! I'd like to book the ${vehicle}. Please share availability and rates.`
    : `Hi Munsiyari Ride Hub! I'd like to rent a bike/scooty in Munsiyari. Please share availability and rates.`;
}
