import React from 'react';

export const TrustTicker: React.FC = () => {
  const items = [
    "🏆 #1 TALENT AGENCY ON SOLANA",
    "🏆 69 PUMPS DELIVERED",
    "🏆 PUMP.FUN PARTNER",
    "🏆 420 5-STAR REVIEWS",
    "🏆 $69M MCAP GENERATED FOR CLIENTS",
    "🏆 TRUSTED BY 1,337 DEVS"
  ];

  return (
    <div className="bg-skeet-gold text-black py-3 overflow-hidden border-y border-yellow-600">
      <div className="flex animate-scroll whitespace-nowrap">
        {[...items, ...items, ...items].map((item, index) => (
          <span key={index} className="mx-8 font-black uppercase text-sm md:text-base tracking-wider flex items-center">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};