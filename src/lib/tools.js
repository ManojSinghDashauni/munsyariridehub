// Rich helper data and exports for the Munsiyari travel tools.

export const startPoints = ["Munsiyari Town", "Kathgodam", "Haldwani", "Pithoragarh", "Chaukori"];

export const fuelVehicles = [
  { name: "Honda Activa Scooty", mileage: 45 },
  { name: "Royal Enfield Classic 350", mileage: 35 },
  { name: "Royal Enfield Himalayan", mileage: 30 }
];

export const routePlans = [
  {
    slug: "khaliya-top",
    destination: "Khaliya Top (Balati Bend)",
    distanceKm: 12,
    timeMin: 30,
    difficulty: "Moderate",
    roadCondition: "Steep curves, mostly paved",
    recommendedVehicle: "Royal Enfield Classic 350",
    bestTime: "September to June",
    mapsQuery: "Balati Bend, Munsiyari",
    highlights: ["Scenic valley views", "Starting point of Khaliya Top trek", "Kalamuni Forest Reserve"]
  },
  {
    slug: "birthi-falls",
    destination: "Birthi Falls",
    distanceKm: 35,
    timeMin: 75,
    difficulty: "Easy",
    roadCondition: "Paved with some rough patches",
    recommendedVehicle: "Royal Enfield Himalayan",
    bestTime: "July to November",
    mapsQuery: "Birthi Falls, Uttarakhand",
    highlights: ["125m waterfall cascade", "Lush green scenery", "Roadside tea stalls"]
  },
  {
    slug: "panchachuli-view-point",
    destination: "Panchachuli View Point",
    distanceKm: 3,
    timeMin: 10,
    difficulty: "Easy",
    roadCondition: "Narrow town streets, paved",
    recommendedVehicle: "Honda Activa Scooty",
    bestTime: "October to April",
    mapsQuery: "Panchachuli Peaks View Point, Munsiyari",
    highlights: ["Sunrise view of five peaks", "Close to town", "Great photography location"]
  },
  {
    slug: "darkot-village",
    destination: "Darkot Village",
    distanceKm: 6,
    timeMin: 15,
    difficulty: "Easy",
    roadCondition: "Narrow village roads",
    recommendedVehicle: "Honda Activa Scooty",
    bestTime: "Year-round",
    mapsQuery: "Darkot, Uttarakhand",
    highlights: ["Heritage wooden houses", "Handwoven Pashmina woollens", "Local cultural experience"]
  },
  {
    slug: "kalamuni-temple",
    destination: "Kalamuni Temple",
    distanceKm: 14,
    timeMin: 40,
    difficulty: "Moderate",
    roadCondition: "Misty mountain pass, hairpin turns",
    recommendedVehicle: "Royal Enfield Classic 350",
    bestTime: "October to June",
    mapsQuery: "Kalamuni Temple, Munsiyari",
    highlights: ["Kali Temple at 2,700m altitude", "Sweeping Panchachuli views", "Wrapped in colorful prayer flags"]
  }
];

export function getSeasonalWeather() {
  const month = new Date().getMonth(); // 0 = Jan, 5 = Jun, etc.
  if (month >= 11 || month <= 1) { // Winter (Dec - Feb)
    return {
      tempC: 4,
      condition: "Snowy / Cold",
      rainProb: 15,
      windKmh: 10,
      humidity: 50,
      sunrise: "06:55 AM",
      sunset: "05:20 PM",
      uvIndex: 3,
      positive: true,
      advisory: "Roads are clear but temperatures drop below freezing. Dress in layers, wear heavy riding gear, and check for black ice around Kalamuni pass."
    };
  } else if (month >= 2 && month <= 4) { // Spring (Mar - May)
    return {
      tempC: 18,
      condition: "Clear / Sunny",
      rainProb: 10,
      windKmh: 12,
      humidity: 45,
      sunrise: "06:05 AM",
      sunset: "06:15 PM",
      uvIndex: 7,
      positive: true,
      advisory: "Perfect riding weather! Roads are clear, rhododendrons are in full bloom, and peak visibility is at its best. Ride on!"
    };
  } else if (month >= 5 && month <= 7) { // Summer / Monsoon (Jun - Aug)
    return {
      tempC: 22,
      condition: "Rainy / Misty",
      rainProb: 75,
      windKmh: 15,
      humidity: 85,
      sunrise: "05:15 AM",
      sunset: "07:05 PM",
      uvIndex: 6,
      positive: false,
      advisory: "Monsoon is active. High risk of landslides between Thal and Munsiyari. Roads can be slippery, carry rainwear, and ride with extreme caution."
    };
  } else { // Autumn (Sep - Nov)
    return {
      tempC: 12,
      condition: "Clear / Crisp",
      rainProb: 5,
      windKmh: 8,
      humidity: 40,
      sunrise: "06:15 AM",
      sunset: "05:45 PM",
      uvIndex: 5,
      positive: true,
      advisory: "Post-monsoon skies are crystal clear, offering jaw-dropping views of Panchachuli. Pleasant day temperatures, cold nights."
    };
  }
}

export const weatherDestinationTips = [
  {
    slug: "panchachuli-view-point",
    name: "Panchachuli View Point",
    tip: "Best visited on clear mornings. Check sunrise time and reach 20 minutes early for the golden glow."
  },
  {
    slug: "khaliya-top",
    name: "Khaliya Top",
    tip: "Avoid if heavy cloud cover is forecast. High wind speeds can make the ridge trek challenging."
  },
  {
    slug: "birthi-falls",
    name: "Birthi Falls",
    tip: "Monsoon and post-monsoon months (July-October) offer a thundering waterfall, but watch out for wet, slippery roads."
  }
];

export const monthCategories = ["Best Riding", "Snowfall", "Monsoon Beauty", "Local Festivals"];

export const months = [
  {
    month: "January",
    crowd: "Medium",
    tempRange: "-3°C to 8°C",
    weather: "Heavy Snowfall",
    photography: 5,
    snowfall: 5,
    adventure: 4,
    trekking: 2,
    note: "Perfect for snow lovers. The whole town is draped in white. Roads to Kalamuni can be closed temporarily during heavy snowfall.",
    tags: ["Snowfall"]
  },
  {
    month: "February",
    crowd: "Low",
    tempRange: "-1°C to 10°C",
    weather: "Snow / Cold",
    photography: 5,
    snowfall: 4,
    adventure: 4,
    trekking: 2,
    note: "Winter scenery is still magnificent. Great time for quiet, budget trips and snow photography at Kalamuni.",
    tags: ["Snowfall"]
  },
  {
    month: "March",
    crowd: "Medium",
    tempRange: "5°C to 15°C",
    weather: "Pleasant / Clear",
    photography: 5,
    snowfall: 2,
    adventure: 5,
    trekking: 4,
    note: "Rhododendrons bloom, painting the forest hills red and pink. Excellent visibility of peaks and pleasant riding weather.",
    tags: ["Best Riding"]
  },
  {
    month: "April",
    crowd: "High",
    tempRange: "10°C to 20°C",
    weather: "Clear Skies",
    photography: 4,
    snowfall: 1,
    adventure: 5,
    trekking: 5,
    note: "Spring season peak. Best time for trekking to Khaliya Top. Comfortable weather, all routes are open.",
    tags: ["Best Riding"]
  },
  {
    month: "May",
    crowd: "High",
    tempRange: "12°C to 24°C",
    weather: "Warm / Clear",
    photography: 4,
    snowfall: 1,
    adventure: 5,
    trekking: 5,
    note: "Escape the summer plains. Warm days, cool nights. Very busy season, advance booking of rides is recommended.",
    tags: ["Best Riding"]
  },
  {
    month: "June",
    crowd: "Medium",
    tempRange: "14°C to 22°C",
    weather: "Partly Cloudy",
    photography: 4,
    snowfall: 1,
    adventure: 4,
    trekking: 4,
    note: "Pre-monsoon showers begin. Clouds start gathering around peaks, but valley landscapes are lush green.",
    tags: ["Best Riding"]
  },
  {
    month: "July",
    crowd: "Low",
    tempRange: "15°C to 21°C",
    weather: "Heavy Rain",
    photography: 3,
    snowfall: 1,
    adventure: 2,
    trekking: 2,
    note: "Monsoon starts. Waterfall like Birthi is at full volume. Watch out for road blockages and slippery mud routes.",
    tags: ["Monsoon Beauty"]
  },
  {
    month: "August",
    crowd: "Low",
    tempRange: "15°C to 21°C",
    weather: "Heavy Rain",
    photography: 3,
    snowfall: 1,
    adventure: 2,
    trekking: 2,
    note: "Lush green meadows everywhere. High risk of landslides. Safe riding is key, stay updated on local weather news.",
    tags: ["Monsoon Beauty"]
  },
  {
    month: "September",
    crowd: "Medium",
    tempRange: "11°C to 19°C",
    weather: "Crisp / Fresh",
    photography: 5,
    snowfall: 1,
    adventure: 4,
    trekking: 4,
    note: "Monsoon recedes, leaving the air crystal clear. Peaks are visible again. Beautiful green landscapes.",
    tags: ["Best Riding"]
  },
  {
    month: "October",
    crowd: "High",
    tempRange: "8°C to 17°C",
    weather: "Clear / Sunny",
    photography: 5,
    snowfall: 1,
    adventure: 5,
    trekking: 5,
    note: "Golden month. Best visibility of the year for Panchachuli peaks. Perfect climate for high altitude riding.",
    tags: ["Best Riding", "Local Festivals"]
  },
  {
    month: "November",
    crowd: "Medium",
    tempRange: "4°C to 14°C",
    weather: "Cold / Clear",
    photography: 5,
    snowfall: 2,
    adventure: 4,
    trekking: 4,
    note: "Winter sets in. Very clear blue skies and excellent photography weather, but early mornings and nights are cold.",
    tags: ["Best Riding"]
  },
  {
    month: "December",
    crowd: "High",
    tempRange: "-1°C to 10°C",
    weather: "Snowfall",
    photography: 5,
    snowfall: 5,
    adventure: 4,
    trekking: 3,
    note: "Snow starts falling at Kalamuni pass and upper reaches. Crowds arrive for Christmas and New Year snow vacation.",
    tags: ["Snowfall", "Local Festivals"]
  }
];

export const emergencyContacts = [
  {
    name: "Community Health Centre (CHC) Munsiyari",
    type: "Hospital",
    detail: "Primary medical facility in Munsiyari town with basic emergency and outpatient services.",
    phone: "05961-222248",
    mapsQuery: "Community Health Centre, Munsiyari"
  },
  {
    name: "District Hospital Pithoragarh",
    type: "Hospital",
    detail: "Main referral hospital with specialized doctors and equipment. Located 130 km away.",
    phone: "05964-225022",
    mapsQuery: "District Hospital, Pithoragarh"
  },
  {
    name: "Munsiyari Police Station",
    type: "Police",
    detail: "Local police headquarters for reporting incidents, road blockages or missing persons.",
    phone: "9411112977",
    mapsQuery: "Police Station, Munsiyari"
  },
  {
    name: "Uttarakhand Tourism Office",
    type: "Tourist Help",
    detail: "Provides tourist information, weather updates, and local trek permits.",
    phone: "05961-222509",
    mapsQuery: "KMVN Tourist Rest House, Munsiyari"
  },
  {
    name: "Kumaon Bike Garage & Spares",
    type: "Vehicle Repair",
    detail: "Specialized in Royal Enfield, KTM and commuter bikes. Offers towing services around Kalamuni.",
    phone: "9876543210",
    mapsQuery: "Munsiyari Market"
  },
  {
    name: "HP Fuel Station Munsiyari",
    type: "Fuel Station",
    detail: "The only petrol pump in Munsiyari. Check availability of fuel during heavy winter/landslide periods.",
    phone: "",
    mapsQuery: "HP Petrol Pump, Munsiyari"
  },
  {
    name: "State Bank of India ATM",
    type: "ATM",
    detail: "Located in the main market. ATM is occasionally out of cash, carry backup cash.",
    phone: "",
    mapsQuery: "SBI ATM, Munsiyari"
  }
];

export const localFoods = [
  {
    name: "Bhang ki Chutney",
    description: "A tangy, aromatic dip made from roasted hemp seeds, mint, coriander, and local citrus juice.",
    tip: "Goes beautifully with local potato dishes (Aloo ke Gutke)."
  },
  {
    name: "Aloo ke Gutke",
    description: "Boiled mountain potatoes tossed in local spices, red chillies, and jamboo (wild Himalayan grass).",
    tip: "Enjoy it hot at a roadside tea stall near Birthi Falls."
  },
  {
    name: "Kumaoni Raita",
    description: "Spiced yogurt mixed with grated local cucumber, mustard seeds, and fresh turmeric.",
    tip: "Beware, the mustard kick can be quite sharp but extremely warming!"
  },
  {
    name: "Mandua (Ragi) Roti",
    description: "Healthy flatbread made from finger millet, traditionally cooked on wood fires.",
    tip: "Best eaten with fresh homemade ghee and local Rajma."
  }
];

export const cultureItems = [
  {
    name: "Bhotiya Heritage",
    description: "The indigenous Shauka (Bhotiya) community has a rich history of Indo-Tibetan trade, unique songs, and wool weavers.",
    tip: "Visit the Tribal Heritage Museum in Munsiyari to see historic artifacts, trade items, and traditional costumes."
  },
  {
    name: "Hiljatra Festival",
    description: "An agricultural festival celebrated with masks, dance, and folk plays, showcasing pastoral life.",
    tip: "Celebrated mostly in Pithoragarh district during the monsoon season."
  },
  {
    name: "Choliya Dance",
    description: "A sword dance originating from the Kumaon region, featuring colorful war attire and traditional drums.",
    tip: "You can watch this during local weddings or public festivals in town."
  }
];

export const shoppingItems = [
  {
    name: "Munsiyari Rajma",
    description: "Premium quality red kidney beans grown in organic high-altitude soil. Cooks quickly and has a sweet flavor.",
    tip: "Buy from local farmers directly or local co-operatives in Darkot."
  },
  {
    name: "Bhotiya Woollen Shawls",
    description: "Handwoven woollen shawls, carpets (dan), and socks made by the local Bhotiya weavers.",
    tip: "Darkot village is the hub for these authentic handloom items."
  },
  {
    name: "Himalayan Herbs & Honey",
    description: "Wild honey, Gandrayani (a medicinal root), and Jamboo (tempering herb).",
    tip: "Ask the rental store for local trusted vendors to avoid adulterated products."
  }
];

export const hiddenGems = [
  {
    name: "Thamri Kund",
    category: "Lakes & Trails",
    difficulty: "Easy Walk",
    story: "A pristine alpine lake surrounded by thick paper tree and pine forests, believed to be the home of forest spirits.",
    whyVisit: "A silent, magical spot to watch musk deer and mountain birds. The trail is completely off the tourist grid.",
    bestTime: "March to June, September to December",
    tips: ["A short 3 km trek from the road", "Do not litter, keep it sacred", "Go in a small group"],
    nearby: ["Kalamuni Pass", "Munsiyari Town"]
  },
  {
    name: "Madkot Hot Springs",
    category: "Geothermal",
    difficulty: "Riding Only",
    story: "Natural sulphur hot water springs along the Gori Ganga river, known for their healing skin properties.",
    whyVisit: "Relax your muscles in the hot spring pools after a long, cold mountain ride.",
    bestTime: "October to April",
    tips: ["Located 22 km from Munsiyari", "Carry a towel and a change of clothes", "Avoid during peak monsoon flood"],
    nearby: ["Gori Ganga River", "Darkot Village"]
  },
  {
    name: "Meshar Kund",
    category: "Lakes & Trails",
    difficulty: "Short Hike",
    story: "An ancient small lake. Legend says a local shepherd dried it up in anger, and dry spells followed until locals prayed to the lake deity.",
    whyVisit: "Extremely quiet forest pond surrounded by ancient oaks, offering reflections of Panchachuli.",
    bestTime: "September to June",
    tips: ["40-minute uphill walk from town area", "Path can be slippery in winter", "Ideal for birdwatching"],
    nearby: ["Maheshwari Kund", "Munsiyari Market"]
  }
];

export const photoCategories = ["Landscape", "Sunrise/Sunset", "Astrophotography", "Cultural"];

export const photoSpots = [
  {
    name: "Nanda Devi Viewpoint Deck",
    category: "Sunrise/Sunset",
    bestTime: "05:45 AM / 05:30 PM",
    difficulty: "Easy (Roadside)",
    coordinates: "30.0682° N, 80.2371° E",
    lens: "70-200mm telephoto for peak details",
    season: "October to February for clear orange skies",
    tip: "Arrive 30 minutes before sunrise. The first rays of light turning the Panchachuli peaks pink and then golden is the ultimate shot."
  },
  {
    name: "Kalamuni Pass Temple Bend",
    category: "Landscape",
    bestTime: "12:00 PM - 03:00 PM",
    difficulty: "Moderate Road Ride",
    coordinates: "30.0242° N, 80.2173° E",
    lens: "16-35mm wide-angle",
    season: "September to December",
    tip: "Capture the winding mountain road with prayer flags in the foreground and the towering peaks in the background. Fog often rolls in after 2 PM."
  },
  {
    name: "Balati Bend Forest Trail",
    category: "Astrophotography",
    bestTime: "10:00 PM - 02:00 AM",
    difficulty: "Short Trek",
    coordinates: "30.0487° N, 80.2281° E",
    lens: "f/2.8 or faster wide lens",
    season: "April to June (Milky Way core visibility)",
    tip: "Zero light pollution here. Look South-East for the Milky Way rising over the pine silhouette. Carry extra batteries, cold drains them fast."
  }
];

export const knowledgeGuides = [
  {
    slug: "panchachuli-peaks-guide",
    title: "Complete Panchachuli Peaks Guide",
    summary: "The ultimate guide to viewing, photographing, and experiencing the five majestic peaks of Panchachuli.",
    overview: "Panchachuli is a group of five snow-capped Himalayan peaks lying at the end of the eastern Kumaon region. Their elevations range from 6,334 meters to 6,904 meters. They form a spectacular backdrop to the entire town of Munsiyari and hold deep spiritual and historical significance.",
    history: "In local mythology, the five peaks represent the five cooking hearths (chulis) where the Pandavas of the Mahabharata cooked their last meal before ascending to heaven. Historically, these peaks marked the boundary of the ancient Indo-Tibetan trading routes.",
    attractions: [
      "Nanda Devi Temple Viewpoint",
      "Panchachuli Sunrise Deck",
      "Maheshwari Kund Path",
      "Sarmoli Village Walks"
    ],
    travelTips: [
      "Bring a high-quality telephoto lens (at least 200mm) to capture the details of the ridges.",
      "Stay in the Sarmoli area or upper Munsiyari hotels for unobstructed morning views from your balcony.",
      "The peaks are usually clearest in the morning; clouds often roll in by afternoon."
    ],
    bestTime: "October to March offers dry, cloudless skies with the sharpest views of the peaks.",
    photographyTips: [
      "Shoot during the 'golden hour' just before sunrise when the peaks glow in pink, orange, and golden hues.",
      "Use a tripod and a circular polarizer to enhance the sky contrast.",
      "Include local houses or pine silhouettes in the foreground to give a sense of scale."
    ],
    routeInfo: "Easily accessible by any vehicle. You can ride a scooty or classic bike directly to the Nanda Devi Viewpoint, just 3 km from the town center.",
    nearby: ["Sarmoli Village", "Maheshwari Kund", "Tribal Heritage Museum"],
    faqs: [
      {
        q: "Can we trek to the base of Panchachuli?",
        a: "Yes, the Panchachuli Base Camp trek starts from Darma Valley, which is a multi-day high-altitude trek requiring permits."
      },
      {
        q: "Which peak of Panchachuli is the tallest?",
        a: "Panchachuli II is the tallest peak, standing at 6,904 meters above sea level."
      }
    ]
  },
  {
    slug: "khaliya-top-trekking-guide",
    title: "Khaliya Top Trekking & Riding Guide",
    summary: "Plan your ride to Balati Bend and the subsequent trek to the alpine meadows of Khaliya Top.",
    overview: "Khaliya Top is a high-altitude alpine meadow (bugyal) situated at 3,500 meters. The journey involves a scenic 12 km ride from Munsiyari to Balati Bend, followed by a moderately challenging 6 km uphill trek through dense forests of oak, pine, and rhododendrons.",
    history: "Khaliya Top has been used for centuries by local shepherds as summer pastures. In recent decades, it has developed into Pithoragarh's premier trekking destination and is also popular for winter skiing.",
    attractions: [
      "Balati Bend Starting Point",
      "Forest Department Rest House",
      "Alpine Meadow Summit",
      "Zero Point (360° views)"
    ],
    travelTips: [
      "Start the trek by 7 AM to avoid the midday sun and reach the summit before clouds block the view.",
      "Hire a local guide if you plan to go all the way to Zero Point, as trails can get confusing in bad weather.",
      "Carry ample water (at least 2L per person) as there are no water sources on the trail."
    ],
    bestTime: "April-May for blooming red rhododendrons, or October-November for crystal clear autumn peak views.",
    photographyTips: [
      "Capture the transition from dense forest canopy to open alpine meadows.",
      "Wide-angle lenses are essential at the summit for the 360-degree Himalayan range panorama.",
      "Drone photography is highly rewarding but watch out for high mountain winds."
    ],
    routeInfo: "Ride a Royal Enfield Classic or Himalayan 12 km up the steep, winding road from Munsiyari town to Balati Bend. Safe parking is available at the trailhead.",
    nearby: ["Kalamuni Temple", "Balati Farm", "Betuli Dhar"],
    faqs: [
      {
        q: "Is there snow at Khaliya Top in winter?",
        a: "Yes, from late December to early March, Khaliya Top is covered in 3-5 feet of snow, making it a great snow trekking and skiing spot."
      },
      {
        q: "Can beginners do the Khaliya Top trek?",
        a: "Yes, it is a moderate trek. The trail is well-defined, and anyone with basic fitness can complete it in 3-4 hours."
      }
    ]
  }
];
