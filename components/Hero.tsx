import React, { useState, useEffect } from 'react';
import { Button } from './ui/Button';
import { CheckCircle } from 'lucide-react';
import { LINKS } from '../constants';

const BG_IMAGES = [
  '/med (1).jpg',
  '/med (2).jpg',
  '/med (3).jpg',
  '/med2.jpg',
];

export const Hero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % BG_IMAGES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden py-16 md:py-24 border-b border-gray-900">
      {/* Background Carousel */}
      {BG_IMAGES.map((src, i) => (
        <img
          key={src}
          src={src}
          alt=""
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
          style={{ opacity: i === currentIndex ? 1 : 0 }}
        />
      ))}

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/75 z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60 z-[2]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tight uppercase leading-[0.9]">
            Rent a <span className="text-skeet-green inline-block transform hover:scale-105 transition-transform duration-300">Star</span><br />
            For Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-skeet-green to-white">Pump.fun</span> Stream
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl mx-auto font-light">
            Professional talent. Maximum engagement. Pay with <span className="text-skeet-green font-bold">$SKEET</span>.
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-16">
            <a href="#browse">
              <Button size="lg" className="min-w-[200px] shadow-[0_0_20px_rgba(76,217,100,0.3)]">Browse Talent</Button>
            </a>
            <a href="#how-it-works">
               <Button size="lg" variant="outline" className="min-w-[200px]">How It Works</Button>
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center border-t border-gray-800 pt-8">
            <div className="p-2">
              <div className="text-2xl md:text-3xl font-bold text-white">200+</div>
              <div className="text-xs text-gray-500 uppercase tracking-widest mt-1">Talent Available</div>
            </div>
            <div className="p-2">
              <div className="text-2xl md:text-3xl font-bold text-white">10k+</div>
              <div className="text-xs text-gray-500 uppercase tracking-widest mt-1">Streams Booked</div>
            </div>
            <div className="p-2">
              <div className="text-2xl md:text-3xl font-bold text-white">500M+</div>
              <div className="text-xs text-gray-500 uppercase tracking-widest mt-1">Views Generated</div>
            </div>
            <div className="p-2">
              <div className="text-2xl md:text-3xl font-bold text-skeet-green">$69M</div>
              <div className="text-xs text-gray-500 uppercase tracking-widest mt-1">In Tokens Pumped</div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mt-8 text-xs md:text-sm text-gray-500">
             <span className="flex items-center"><CheckCircle size={14} className="text-skeet-green mr-1" /> Verified Performers</span>
             <span className="flex items-center"><CheckCircle size={14} className="text-skeet-green mr-1" /> Pump.fun Approved</span>
             <span className="flex items-center"><CheckCircle size={14} className="text-skeet-green mr-1" /> 100% Pump Guarantee</span>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {BG_IMAGES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === currentIndex ? 'bg-skeet-green w-6' : 'bg-white/40 hover:bg-white/60'
            }`}
          />
        ))}
      </div>
    </section>
  );
};
