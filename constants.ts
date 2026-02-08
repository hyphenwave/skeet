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

export const SERVICE_PACKAGES: ServicePackage[] = [
  {
    id: "basic",
    name: "QUICK PUMP",
    price: 250,
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
    price: 750,
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
    price: 2500,
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
    name: "Anonymous Dev",
    token: "$COPIUM",
    quote: "Luna did a 2-hour stream for us. We 10x'd. My wife came back. Thank you TeamSkeet Talent.",
    result: "+1,200% in 24h"
  },
  {
    id: "2",
    name: "Degen Dan",
    token: "$SENDOOR",
    quote: "Chad's energy is unmatched. He called out the contract address 47 times in one hour. Legend.",
    result: "Sold out in 3 minutes"
  },
  {
    id: "3",
    name: "Trapped Terry",
    token: "$NOSELLDOOR",
    quote: "We hired Diamond Destiny to shame paper hands. Worked too well. No one can sell now. Help.",
    result: "∞ hold time"
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