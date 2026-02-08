import React from 'react';
import { Search, Calendar, Rocket } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <Search className="w-10 h-10 text-black" />,
      title: "BROWSE",
      desc: "Browse our roster of professional talent ready to promote your token on Pump.fun Live."
    },
    {
      icon: <Calendar className="w-10 h-10 text-black" />,
      title: "BOOK",
      desc: "Select your talent, choose your package, and schedule your stream. All payments in $SKEET."
    },
    {
      icon: <Rocket className="w-10 h-10 text-black" />,
      title: "PUMP",
      desc: "Watch your token pump as professional talent brings the viewers and the energy."
    }
  ];

  return (
    <section id="how-it-works" className="py-16 bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-black text-white mb-12 uppercase tracking-wide border-l-4 border-skeet-green pl-4">
          How It Works
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="bg-skeet-card p-8 border border-gray-800 hover:border-skeet-green transition-colors group">
              <div className="w-20 h-20 bg-skeet-green rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 uppercase">{step.title}</h3>
              <p className="text-gray-400 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};