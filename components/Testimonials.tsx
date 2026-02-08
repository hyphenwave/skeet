import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-16 bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-black text-white mb-12 uppercase tracking-wide border-l-4 border-skeet-green pl-4">
          What Devs Are Saying
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-skeet-card p-6 border border-gray-800 relative">
              <Quote size={40} className="text-gray-800 absolute top-4 right-4" />
              <p className="text-gray-300 text-lg mb-6 relative z-10 italic">"{t.quote}"</p>
              
              <div className="border-t border-gray-800 pt-4">
                <div className="font-bold text-white">{t.name}</div>
                <div className="text-sm text-gray-500 mb-2">Dev of <span className="text-skeet-green">{t.token}</span></div>
                <div className="bg-[#111] inline-block px-3 py-1 text-xs font-mono text-skeet-gold border border-gray-800">
                  Result: {t.result}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};