import React from 'react';
import { SERVICE_PACKAGES } from '../constants';
import { Button } from './ui/Button';
import { Check, X } from 'lucide-react';
import { LINKS } from '../constants';

export const ServiceSection: React.FC = () => {
  return (
    <section id="services" className="py-16 bg-[#050505] border-t border-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-black text-white mb-12 uppercase tracking-wide border-l-4 border-skeet-green pl-4">
          Service Packages
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {SERVICE_PACKAGES.map((pkg) => (
            <div 
              key={pkg.id} 
              className={`relative bg-skeet-card flex flex-col p-6 md:p-8 border ${
                pkg.isPopular ? 'border-skeet-green shadow-[0_0_20px_rgba(76,217,100,0.15)] transform md:-translate-y-4' : 
                pkg.isPremium ? 'border-skeet-gold' : 'border-gray-800'
              }`}
            >
              {pkg.isPopular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-skeet-green text-black font-black uppercase text-xs px-4 py-1 tracking-widest">
                  Most Popular
                </div>
              )}
              {pkg.isPremium && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-skeet-gold text-black font-black uppercase text-xs px-4 py-1 tracking-widest">
                  VIP
                </div>
              )}

              <h3 className={`text-xl font-bold uppercase mb-2 ${pkg.isPremium ? 'text-skeet-gold' : 'text-white'}`}>{pkg.name}</h3>
              <div className="flex items-baseline mb-4">
                <span className="text-2xl md:text-3xl font-bold text-skeet-green">{pkg.price.toLocaleString()} $SKEET</span>
              </div>
              <div className="text-sm text-gray-400 mb-6 uppercase tracking-wider font-bold border-b border-gray-800 pb-4">
                Duration: {pkg.duration}
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-sm text-gray-300">
                    <Check size={16} className="text-skeet-green mr-2 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
                {pkg.missingFeatures?.map((feature, idx) => (
                  <li key={`missing-${idx}`} className="flex items-start text-sm text-gray-600">
                    <X size={16} className="text-gray-700 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="line-through">{feature}</span>
                  </li>
                ))}
              </ul>

              <a href={LINKS.PUMP} target="_blank" rel="noopener noreferrer" className="mt-auto">
                <Button 
                  fullWidth 
                  variant={pkg.isPopular ? 'primary' : pkg.isPremium ? 'outline' : 'secondary'}
                  className={pkg.isPremium ? '!border-skeet-gold !text-skeet-gold hover:!bg-skeet-gold hover:!text-black' : ''}
                >
                  {pkg.isPremium ? 'Contact Us' : 'Select'}
                </Button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};