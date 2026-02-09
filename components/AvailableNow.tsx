import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { TalentCard } from './TalentCard';
import { AVAILABLE_NOW } from '../constants';

export const AvailableNow: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  }, []);

  const scroll = useCallback((direction: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.querySelector('div')?.offsetWidth || 300;
    const amount = direction === 'left' ? -(cardWidth + 24) : (cardWidth + 24);
    el.scrollBy({ left: amount, behavior: 'smooth' });
  }, []);

  // Auto-scroll
  useEffect(() => {
    const interval = setInterval(() => {
      const el = scrollRef.current;
      if (!el) return;
      // If we've reached the end, scroll back to start
      if (el.scrollLeft >= el.scrollWidth - el.clientWidth - 10) {
        el.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        scroll('right');
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [scroll]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener('scroll', checkScroll);
    checkScroll();
    return () => el.removeEventListener('scroll', checkScroll);
  }, [checkScroll]);

  return (
    <section id="available-now" className="py-16 bg-black border-t border-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl md:text-2xl font-black text-white uppercase tracking-wide flex items-center">
            <span className="w-3 h-3 bg-skeet-green rounded-full mr-3 animate-pulse"></span>
            Available Now
          </h2>
          <div className="flex gap-2">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className="w-10 h-10 flex items-center justify-center border border-gray-700 hover:border-skeet-green text-gray-400 hover:text-skeet-green rounded transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className="w-10 h-10 flex items-center justify-center border border-gray-700 hover:border-skeet-green text-gray-400 hover:text-skeet-green rounded transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth"
        >
          {AVAILABLE_NOW.map(talent => (
            <div key={talent.id} className="flex-shrink-0 w-[260px]">
              <TalentCard talent={talent} condensed />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
