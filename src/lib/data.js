import bikeClassic from "@/assets/bike-classic.jpg";
import bikeHimalayan from "@/assets/bike-himalayan.jpg";
import bikeScooter from "@/assets/bike-scooter.jpg";
import destPanchachuli from "@/assets/dest-panchachuli.jpg";
import destKhaliya from "@/assets/dest-khaliya.jpg";
import destBirthi from "@/assets/dest-birthi.jpg";
import destDarkot from "@/assets/dest-darkot.jpg";
import destKalamuni from "@/assets/dest-kalamuni.jpg";

export const vehicles = [
  {
    slug: "tvs-ntorq-125",
    name: "TVS NTORQ 125",
    color : "Race Edition Red",
    category: "scooter",
    categoryLabel: "Scooter",
    image: bikeScooter.src || bikeScooter,
    pricePerDay: 700,
    deposit: 2000,
    budget: false,
    tagline: "Sporty, powerful & perfect for mountain rides",
    specs: [
      { label: "Engine", value: "124.8 cc" },
      { label: "Mileage", value: "45–50 km/l" },
      { label: "Transmission", value: "Automatic (CVT)" },
      { label: "Seats", value: "2" },
    ],
    features: [
      "Helmet included",
      "USB charging",
      "Large under-seat storage",
      "Sporty performance",
    ],
    fuelPolicy:
      "Fuel not included. Return with the same fuel level.",
    description:
      "The TVS NTORQ 125 is a sporty automatic scooter designed for both city roads and hilly terrain. With its powerful 125cc engine, comfortable ride, and spacious storage, it's an excellent choice for exploring Munsiyari's scenic routes and nearby attractions.",
  },
  {
    slug: "tvs-ntorq-125",
    name: "TVS NTORQ 125",
    color : "Harlequin Blue",
    category: "scooter",
    categoryLabel: "Scooter",
    image: bikeScooter.src || bikeScooter,
    pricePerDay: 700,
    deposit: 2000,
    budget: false,
    tagline: "Sporty, powerful & perfect for mountain rides",
    specs: [
      { label: "Engine", value: "124.8 cc" },
      { label: "Mileage", value: "45–50 km/l" },
      { label: "Transmission", value: "Automatic (CVT)" },
      { label: "Seats", value: "2" },
    ],
    features: [
      "Helmet included",
      "USB charging",
      "Large under-seat storage",
      "Sporty performance",
    ],
    fuelPolicy:
      "Fuel not included. Return with the same fuel level.",
    description:
      "The TVS NTORQ 125 is a sporty automatic scooter designed for both city roads and hilly terrain. With its powerful 125cc engine, comfortable ride, and spacious storage, it's an excellent choice for exploring Munsiyari's scenic routes and nearby attractions.",
  },
  // {
  //   slug: "honda-activa-scooty",
  //   name: "Honda Activa Scooty",
  //   category: "scooter",
  //   categoryLabel: "Scooter",
  //   image: bikeScooter.src || bikeScooter,
  //   pricePerDay: 600,
  //   deposit: 2000,
  //   budget: true,
  //   tagline: "Easy, automatic & perfect for local sightseeing",
  //   specs: [
  //     { label: "Engine", value: "110 cc" },
  //     { label: "Mileage", value: "45 km/l" },
  //     { label: "Transmission", value: "Automatic" },
  //     { label: "Seats", value: "2" },
  //   ],
  //   features: ["Helmet included", "Easy to ride", "Great mileage", "Under-seat storage"],
  //   fuelPolicy: "Fuel not included. Return with the same fuel level.",
  //   description:
  //     "The Honda Activa is the easiest way to explore Munsiyari's local sights. Fully automatic, light and fuel efficient — ideal for first-time riders and couples touring nearby viewpoints.",
  // },
  // {
  //   slug: "royal-enfield-classic-350",
  //   name: "Royal Enfield Classic 350",
  //   category: "royal-enfield",
  //   categoryLabel: "Royal Enfield",
  //   image: bikeClassic.src || bikeClassic,
  //   pricePerDay: 1500,
  //   deposit: 5000,
  //   budget: false,
  //   tagline: "The iconic thump for Himalayan road trips",
  //   specs: [
  //     { label: "Engine", value: "349 cc" },
  //     { label: "Mileage", value: "35 km/l" },
  //     { label: "Transmission", value: "Manual (5-speed)" },
  //     { label: "Seats", value: "2" },
  //   ],
  //   features: ["Helmet included", "Well maintained", "Comfortable touring seat", "Strong torque for climbs"],
  //   fuelPolicy: "Fuel not included. Return with the same fuel level.",
  //   description:
  //     "Experience Munsiyari's winding mountain roads on the legendary Royal Enfield Classic 350. Smooth low-end torque makes climbing to Khaliya Top and Kalamuni effortless and unforgettable.",
  // },
  // {
  //   slug: "royal-enfield-himalayan",
  //   name: "Royal Enfield Himalayan",
  //   category: "adventure",
  //   categoryLabel: "Adventure",
  //   image: bikeHimalayan.src || bikeHimalayan,
  //   pricePerDay: 1900,
  //   deposit: 7000,
  //   budget: false,
  //   tagline: "Built for off-road & high-altitude adventure",
  //   specs: [
  //     { label: "Engine", value: "411 cc" },
  //     { label: "Mileage", value: "30 km/l" },
  //     { label: "Transmission", value: "Manual (5-speed)" },
  //     { label: "Seats", value: "2" },
  //   ],
  //   features: ["Helmet included", "Long-travel suspension", "Luggage racks", "Off-road ready tyres"],
  //   fuelPolicy: "Fuel not included. Return with the same fuel level.",
  //   description:
  //     "The purpose-built Royal Enfield Himalayan eats broken mountain trails for breakfast. With long-travel suspension and rugged build, it's the ultimate machine for Darkot, Birthi Falls and beyond.",
  // },
];

export const destinations = [
  {
    slug: "panchachuli-view-point",
    name: "Panchachuli View Point",
    image: destPanchachuli.src || destPanchachuli,
    short: "Sunrise over the five sacred Himalayan peaks.",
    overview:
      "The Panchachuli View Point offers the most iconic panorama in Munsiyari — five majestic snow peaks glowing gold at sunrise. It is the signature reason travellers ride to Munsiyari.",
    distance: "Within Munsiyari (0–3 km from town)",
    route: "Munsiyari town → Nanda Devi viewpoint road",
    bestTime: "October to March for clear skies; sunrise is best.",
    tips: ["Reach before sunrise", "Carry warm layers", "Tripod for photography"],
    recommendedVehicle: "Honda Activa Scooty",
  },
  {
    slug: "khaliya-top",
    name: "Khaliya Top",
    image: destKhaliya.src || destKhaliya,
    short: "High-altitude alpine meadow with 360° peaks.",
    overview:
      "Khaliya Top is a stunning alpine bugyal (meadow) at around 3,500 m offering uninterrupted 360-degree views of the Himalayan range. A short trek from the road head makes it accessible to most travellers.",
    distance: "~12 km from Munsiyari to Balati, then trek",
    route: "Munsiyari → Balati Farm (KMVN) → Khaliya trek",
    bestTime: "April to June and September to November.",
    tips: ["Start early", "Wear trekking shoes", "Carry water and snacks"],
    recommendedVehicle: "Royal Enfield Classic 350",
  },
  {
    slug: "birthi-falls",
    name: "Birthi Falls",
    image: destBirthi.src || destBirthi,
    short: "A thundering 125-metre waterfall en route to Munsiyari.",
    overview:
      "Birthi Falls is a spectacular waterfall cascading nearly 125 metres down a lush green cliff. A favourite roadside stop on the Munsiyari route, especially after the monsoon.",
    distance: "~35 km from Munsiyari",
    route: "Munsiyari → Kalamuni → Birthi",
    bestTime: "July to September for full flow; pleasant year-round.",
    tips: ["Short walk to the base", "Roads can be wet", "Great picnic spot"],
    recommendedVehicle: "Royal Enfield Himalayan",
  },
  {
    slug: "darkot-village",
    name: "Darkot Village",
    image: destDarkot.src || destDarkot,
    short: "Traditional carved wooden homes & tribal heritage.",
    overview:
      "Darkot is a charming heritage village famous for its intricately carved wooden houses and handwoven woollen shawls made by the local Bhotiya community. A window into authentic Kumaoni culture.",
    distance: "~6 km from Munsiyari",
    route: "Munsiyari → Darkot road",
    bestTime: "Year-round; spring and autumn are best.",
    tips: ["Buy local woollens", "Respect village customs", "Short, easy ride"],
    recommendedVehicle: "Honda Activa Scooty",
  },
  {
    slug: "kalamuni-temple",
    name: "Kalamuni Temple",
    image: destKalamuni.src || destKalamuni,
    short: "A misty mountain-pass temple wrapped in prayer flags.",
    overview:
      "Kalamuni Top is a high mountain pass with a serene temple dedicated to Goddess Kali, framed by pine forests and prayer flags. The drive up offers dramatic valley views.",
    distance: "~14 km from Munsiyari",
    route: "Munsiyari → Kalamuni Top pass",
    bestTime: "October to March for clear views.",
    tips: ["Expect fog & cold", "Curvy mountain road", "Stop for valley photos"],
    recommendedVehicle: "Royal Enfield Classic 350",
  },
  {
    slug: "munsiyari-local-sightseeing",
    name: "Munsiyari Local Sightseeing",
    image: destPanchachuli.src || destPanchachuli,
    short: "Tribal museum, Maheshwari Kund & town walks.",
    overview:
      "Munsiyari's local circuit covers the Tribal Heritage Museum, Maheshwari Kund, Thamri Kund and quiet town walks — perfect for a relaxed half-day on a scooty.",
    distance: "All within ~10 km of town",
    route: "Munsiyari town loop",
    bestTime: "Year-round.",
    tips: ["Half-day is enough", "Carry cash", "Combine with Darkot"],
    recommendedVehicle: "Honda Activa Scooty",
  },
];

export const blogPosts = [
  {
    slug: "best-places-to-visit-in-munsiyari",
    title: "Best Places to Visit in Munsiyari",
    category: "Travel Tips",
    excerpt: "From Panchachuli sunrise to Birthi Falls — the essential Munsiyari bucket list.",
    readTime: "6 min",
    image: destPanchachuli.src || destPanchachuli,
    body: [
      "Munsiyari, perched at 2,200 m in Uttarakhand's Pithoragarh district, is one of the Himalayas' best-kept secrets. Renting a bike or scooty is the freest way to explore it.",
      "Start with the Panchachuli View Point at sunrise, then ride to Khaliya Top for alpine meadows. Don't miss Birthi Falls on the approach road and the heritage village of Darkot.",
      "A self-drive rental lets you chase the light, stop for photos and discover hidden viewpoints at your own pace.",
    ],
  },
  {
    slug: "2-day-munsiyari-itinerary",
    title: "The Perfect 2-Day Munsiyari Itinerary",
    category: "Road Trips",
    excerpt: "Make the most of a weekend in Munsiyari with this rider-friendly plan.",
    readTime: "5 min",
    image: destKhaliya.src || destKhaliya,
    body: [
      "Day 1: Arrive, pick up your rental, and ride to Kalamuni Top and Birthi Falls. Catch sunset from a quiet viewpoint and rest in town.",
      "Day 2: Wake before dawn for the Panchachuli sunrise, then trek to Khaliya Top. Finish with Darkot village and local sightseeing before returning your vehicle.",
      "Two days is enough to taste the magic — but most riders wish they'd stayed longer.",
    ],
  },
  {
    slug: "bike-rental-guide-munsiyari",
    title: "Bike Rental Guide for Munsiyari",
    category: "Bike Guides",
    excerpt: "Everything you need to know before renting a bike or scooty in Munsiyari.",
    readTime: "7 min",
    image: bikeClassic.src || bikeClassic,
    body: [
      "Renting in Munsiyari is simple: carry a valid driving licence and a government ID, pay a refundable deposit, and you're ready to ride.",
      "Choose a scooty for easy local sightseeing, a Royal Enfield Classic for comfortable touring, or the Himalayan for rugged off-road trails.",
      "Always check brakes, tyres and fuel before leaving, wear the provided helmet, and ride within your limits on mountain roads.",
    ],
  },
  {
    slug: "khaliya-top-travel-guide",
    title: "Khaliya Top Travel Guide",
    category: "Local Experiences",
    excerpt: "How to reach Khaliya Top and what to expect on this alpine trek.",
    readTime: "5 min",
    image: destKhaliya.src || destKhaliya,
    body: [
      "Khaliya Top is a high-altitude meadow offering 360-degree Himalayan views. Ride to Balati Farm and trek the final stretch.",
      "The trail is moderate and doable for most fit travellers. Carry water, snacks and warm layers — weather changes fast.",
      "Sunrise and clear post-monsoon days reward you with views of Panchachuli, Nanda Devi and Rajrambha.",
    ],
  },
  {
    slug: "panchachuli-travel-guide",
    title: "Panchachuli Travel Guide",
    category: "Weather Guides",
    excerpt: "When and where to catch the legendary Panchachuli sunrise.",
    readTime: "4 min",
    image: destPanchachuli.src || destPanchachuli,
    body: [
      "The five Panchachuli peaks are Munsiyari's crown jewel. The golden sunrise glow is unforgettable on clear winter mornings.",
      "October to March offers the clearest skies. Reach the viewpoint before dawn and bundle up — temperatures drop near freezing.",
      "A short scooty ride from town gets you to the best vantage points.",
    ],
  },
  {
    slug: "birthi-falls-travel-guide",
    title: "Birthi Falls Travel Guide",
    category: "Road Trips",
    excerpt: "The thundering waterfall you'll pass on the way to Munsiyari.",
    readTime: "4 min",
    image: destBirthi.src || destBirthi,
    body: [
      "Birthi Falls plunges nearly 125 metres and is at its mightiest after the monsoon. It's an easy roadside stop with a short walk to the base.",
      "Combine it with Kalamuni Top for a perfect half-day ride from Munsiyari.",
      "Roads can be wet near the falls — ride carefully on a well-maintained vehicle.",
    ],
  },
];

export const faqs = [
  {
    q: "What documents do I need to rent a bike in Munsiyari?",
    a: "You need a valid driving licence and a government-issued photo ID (Aadhaar, passport or voter ID). A refundable security deposit is also required.",
  },
  {
    q: "Is fuel included in the rental price?",
    a: "No, fuel is not included. Vehicles are provided with a fuel level you should return them at. You pay only for the fuel you use.",
  },
  {
    q: "Do you provide helmets?",
    a: "Yes, a helmet is included free with every rental. We recommend wearing it at all times on mountain roads.",
  },
  {
    q: "Can I take the bike to Khaliya Top, Birthi Falls or Kalamuni?",
    a: "Absolutely. Our vehicles are well maintained for Munsiyari's terrain. The Royal Enfield Himalayan is best for rough trails, while a scooty is perfect for local sightseeing.",
  },
  {
    q: "What is the minimum rental duration?",
    a: "We offer flexible rentals starting from a single day, with discounted rates for multi-day trips. Message us on WhatsApp for custom durations.",
  },
  {
    q: "How do I book a vehicle?",
    a: "Booking is instant on WhatsApp. Tap any 'Book on WhatsApp' button, tell us your dates and chosen vehicle, and we'll confirm availability right away.",
  },
  {
    q: "Do you offer roadside assistance?",
    a: "Yes. All rentals include roadside assistance within the Munsiyari region for your peace of mind.",
  },
  {
    q: "Are the vehicles insured?",
    a: "Yes, all our vehicles carry valid documents and insurance as per regulations.",
  },
];

export const testimonials = [
  {
    name: "Aarav Sharma",
    location: "Delhi",
    rating: 5,
    text: "Booked a Royal Enfield over WhatsApp in minutes. The bike was spotless and the Panchachuli sunrise ride was the highlight of our trip!",
  },
  {
    name: "Priya Nair",
    location: "Bengaluru",
    rating: 5,
    text: "As a solo traveller the scooty was perfect for local sightseeing. Super friendly local team and honest rates. Highly recommend.",
  },
  {
    name: "Rohit Verma",
    location: "Lucknow",
    rating: 5,
    text: "The Himalayan handled the Darkot and Birthi trails beautifully. Roadside assistance gave me real peace of mind. Will rent again!",
  },
  {
    name: "Sneha & Karan",
    location: "Mumbai",
    rating: 5,
    text: "Best rates in Munsiyari and genuinely well-maintained vehicles. They know every viewpoint and shared a great 2-day plan with us.",
  },
];
