import React from 'react';
import { CATEGORIES } from '../constants';

export const CategoryPills: React.FC = () => {
  return (
    <section className="py-12 bg-black border-b border-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-xl font-bold text-gray-400 mb-6 uppercase tracking-wider text-center md:text-left">Browse by Specialty</h2>
        <div className="flex flex-wrap justify-center md:justify-start gap-3">
          {CATEGORIES.map((cat, idx) => (
            <button 
              key={idx}
              className="bg-[#111] hover:bg-[#222] text-white hover:text-skeet-green border border-gray-800 hover:border-skeet-green px-4 py-2 rounded-full text-xs md:text-sm font-bold transition-all duration-200 uppercase"
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};