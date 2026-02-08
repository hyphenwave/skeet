import React, { useState } from 'react';
import { X } from 'lucide-react';
import { LINKS } from '../constants';

export const Banner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-red-600 to-pink-600 text-white text-xs md:text-sm py-2 px-4 flex justify-between items-center sticky top-0 z-50 shadow-lg">
      <div className="flex-1 text-center font-bold tracking-wider">
        🔥 PUMP.FUN LIVE PROMO: Book talent for your stream! 🔥
        <a 
          href={LINKS.PUMP} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="ml-4 underline decoration-white decoration-2 underline-offset-2 hover:text-skeet-green hover:decoration-skeet-green transition-colors"
        >
          BOOK NOW
        </a>
      </div>
      <button 
        onClick={() => setIsVisible(false)} 
        className="text-white hover:text-gray-200 ml-4"
      >
        <X size={18} />
      </button>
    </div>
  );
};