import { Talent, Testimonial, ServicePackage } from './types';

export const LINKS = {
  PUMP: "https://pump.fun/board",
  TWITTER: "https://twitter.com",
  CONTRACT: "SKEETxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
};

export const TALENT_ROSTER: Talent[] = [
  {
    id: "1",
    name: "Riley Reid",
    rating: 5.0,
    reviews: 420,
    specialties: ["Rug Calls", "Diamond Hands Energy", "ASMR Shilling"],
    rate: 50000,
    bio: "I'll make your holders feel things they've never felt before... like hope.",
    isOnline: true,
    badges: ["TOP RATED", "VERIFIED"],
    imageGradient: "from-purple-500 to-pink-500",
    image: "/riley_reid.jpg"
  },
  {
    id: "2",
    name: "Abella Danger",
    rating: 4.9,
    reviews: 690,
    specialties: ["Hype Man", "FUD Destroyer", "Whale Whisperer"],
    rate: 75000,
    bio: "I've pumped more bags than your wife's boyfriend. Let's go.",
    isOnline: false,
    badges: ["FAN FAVORITE"],
    imageGradient: "from-blue-500 to-cyan-500",
    image: "/abella_danger.jpg"
  },
  {
    id: "3",
    name: "Pristine Edge",
    rating: 4.8,
    reviews: 333,
    specialties: ["HODL Motivation", "Paperhands Shaming", "Emotional Support"],
    rate: 42000,
    bio: "I'll hold your bags and your hand. Mostly your bags.",
    isOnline: true,
    badges: ["RISING STAR"],
    imageGradient: "from-emerald-400 to-teal-500",
    image: "/pristine_edge.jpg"
  },
  {
    id: "4",
    name: "Vina Sky",
    rating: 4.7,
    reviews: 888,
    specialties: ["Technical Analysis", "Chart Reading", "Hopium Dealer"],
    rate: 30000,
    bio: "That's definitely a cup and handle. Trust me babe.",
    isOnline: false,
    badges: ["BEST VALUE"],
    imageGradient: "from-orange-400 to-red-500",
    image: "/vina_sky.jpg"
  },
  {
    id: "5",
    name: "Gina Valentina",
    rating: 5.0,
    reviews: 1337,
    specialties: ["Alpha Calls", "Whale Energy", "Dev Intimidation"],
    rate: 100000,
    bio: "When I enter a stream, paper hands leave. Whales stay.",
    isOnline: true,
    badges: ["PREMIUM", "VERIFIED"],
    imageGradient: "from-yellow-400 to-amber-600",
    image: "/gina_valentina.jpg"
  }
];

export const AVAILABLE_NOW: Talent[] = [
  {
    id: "a1",
    name: "Emma Hix",
    rating: 4.9,
    reviews: 512,
    specialties: ["Hype Energy", "Diamond Hands"],
    rate: 45000,
    bio: "I turn red candles green just by showing up.",
    isOnline: false,
    badges: ["VERIFIED"],
    imageGradient: "from-pink-400 to-rose-500",
    image: "/emma_hix.jpg"
  },
  {
    id: "a2",
    name: "Penelope Kay",
    rating: 4.8,
    reviews: 377,
    specialties: ["FOMO Generation", "Shilling"],
    rate: 38000,
    bio: "Your chart will look better after I'm done with it.",
    isOnline: false,
    badges: ["RISING STAR"],
    imageGradient: "from-violet-400 to-purple-500",
    image: "/penelope_kay.jpg"
  },
  {
    id: "a3",
    name: "Lana Rhoades",
    rating: 5.0,
    reviews: 2100,
    specialties: ["Alpha Calls", "Whale Magnet"],
    rate: 120000,
    bio: "When I shill, whales listen. Simple as that.",
    isOnline: false,
    badges: ["TOP RATED", "PREMIUM"],
    imageGradient: "from-amber-400 to-orange-500",
    image: "/lana_rhoades.jpg"
  },
  {
    id: "a4",
    name: "Alexa Grace",
    rating: 4.7,
    reviews: 290,
    specialties: ["Community Building", "AMA Host"],
    rate: 35000,
    bio: "I'll make your community feel like family. A degen family.",
    isOnline: false,
    badges: ["VERIFIED"],
    imageGradient: "from-sky-400 to-blue-500",
    image: "/alexa_grace.jpg"
  },
  {
    id: "a5",
    name: "Anya Olsen",
    rating: 4.8,
    reviews: 445,
    specialties: ["Chart Reading", "Hopium Dealer"],
    rate: 40000,
    bio: "That's a triple bottom reversal. Trust the process.",
    isOnline: false,
    badges: ["FAN FAVORITE"],
    imageGradient: "from-teal-400 to-cyan-500",
    image: "/anya_olsen.jpg"
  },
  {
    id: "a6",
    name: "Ella Knox",
    rating: 4.9,
    reviews: 610,
    specialties: ["Pump Specialist", "Raid Leader"],
    rate: 55000,
    bio: "I don't just pump bags. I send them to the stratosphere.",
    isOnline: false,
    badges: ["VERIFIED"],
    imageGradient: "from-red-400 to-pink-500",
    image: "/ella_knox.jpg"
  },
  {
    id: "a7",
    name: "Britney Amber",
    rating: 4.6,
    reviews: 320,
    specialties: ["FUD Destroyer", "Hype Machine"],
    rate: 32000,
    bio: "FUD doesn't stand a chance when I'm on stream.",
    isOnline: false,
    badges: ["BEST VALUE"],
    imageGradient: "from-lime-400 to-green-500",
    image: "/britney_amber.jpg"
  },
  {
    id: "a8",
    name: "Becky Bandini",
    rating: 4.7,
    reviews: 480,
    specialties: ["Emotional Support", "HODL Coach"],
    rate: 42000,
    bio: "I'll hold your hand through the dip. And the next one.",
    isOnline: false,
    badges: ["VERIFIED"],
    imageGradient: "from-fuchsia-400 to-purple-500",
    image: "/becky_bandini.jpg"
  },
  {
    id: "a9",
    name: "Mandy Muse",
    rating: 4.8,
    reviews: 555,
    specialties: ["ASMR Shilling", "Whale Whisperer"],
    rate: 48000,
    bio: "My voice alone has caused three 100x pumps.",
    isOnline: false,
    badges: ["RISING STAR"],
    imageGradient: "from-indigo-400 to-violet-500",
    image: "/mandy_muse.jpg"
  },
  {
    id: "a10",
    name: "Angela White",
    rating: 5.0,
    reviews: 1800,
    specialties: ["Alpha Calls", "Dev Intimidation"],
    rate: 95000,
    bio: "I've never seen a chart go down while I'm streaming. Ever.",
    isOnline: false,
    badges: ["TOP RATED", "VERIFIED"],
    imageGradient: "from-yellow-400 to-amber-500",
    image: "/angela_white.jpg"
  },
];

export const SERVICE_PACKAGES: ServicePackage[] = [
  {
    id: "basic",
    name: "QUICK PUMP",
    price: 25000,
    duration: "15 minutes",
    features: [
      "Basic shilling",
      "Contract address callout",
      "'LFG' energy"
    ],
    missingFeatures: [
      "Custom script",
      "Social media post"
    ]
  },
  {
    id: "full",
    name: "FULL SERVICE",
    price: 75000,
    duration: "1 hour",
    isPopular: true,
    features: [
      "Extended shilling",
      "Contract address callout (x5)",
      "Custom talking points",
      "'Diamond Hands' speech",
      "Twitter/X post",
      "FOMO generation"
    ]
  },
  {
    id: "premium",
    name: "PREMIUM EXPERIENCE",
    price: 250000,
    duration: "3 hours",
    isPremium: true,
    features: [
      "Everything in Full Service",
      "Multiple talent option",
      "Raid coordination",
      "FUD response team",
      "Post-stream Twitter spaces",
      "'Dev Doxxed' energy",
      "Guaranteed pump (NFA)"
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "0xMarc.sol",
    token: "$WHITEWHALE",
    quote: "Booked Riley Reid for a 2-hour pump.fun stream. Within 30 minutes the chart went vertical. We 10x'd before she even finished. Absolutely unreal ROI.",
    result: "10x in 2 hours. 50x by morning."
  },
  {
    id: "2",
    name: "solandy.eth",
    token: "$PNUT",
    quote: "Angela White joined our stream and the buy pressure was instant. Whales started aping in within seconds. She read the contract address once and the token sold out.",
    result: "$2M market cap in under 3 minutes."
  },
  {
    id: "3",
    name: "jpegmaxi_",
    token: "$LAMB",
    quote: "We brought in Lana Rhoades to hype our launch. The community went so diamond hands that literally no one will sell. Liquidity is locked forever. Send help.",
    result: "0% sell pressure. Community still holding."
  }
];

export const CATEGORIES = [
  "Pump Specialists 🚀",
  "Diamond Hands Coaches 💎",
  "FUD Destroyers 🛡️",
  "ASMR Shillers 🎤",
  "Technical Analysts 📊",
  "Hype Machines 🔥",
  "Whale Callers 🐋",
  "Emotional Support 🤗",
  "Rug Prevention ⚠️",
  "Bilingual (EN/中文) 🌏"
];