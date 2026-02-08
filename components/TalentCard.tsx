import React from 'react';
import { Talent } from '../types';
import { Button } from './ui/Button';
import { Star, Video, User } from 'lucide-react';
import { LINKS } from '../constants';

interface TalentCardProps {
  talent: Talent;
  condensed?: boolean;
}

export const TalentCard: React.FC<TalentCardProps> = ({ talent, condensed = false }) => {
  // Placeholder visual using gradient and icon
  const ProfileImage = () => (
    <div className={`w-full ${condensed ? 'h-64' : 'h-80'} relative overflow-hidden group-hover:opacity-90 transition-opacity`}>
        {talent.image ? (
          <img src={talent.image} alt={talent.name} className="w-full h-full object-cover object-center" />
        ) : (
          <div className={`w-full h-full bg-gradient-to-b ${talent.imageGradient} flex items-end justify-center`}>
            <User size={condensed ? 120 : 160} className="text-black opacity-40 translate-y-4" fill="currentColor" />
          </div>
        )}
        <div className="absolute inset-0 bg-black bg-opacity-10"></div>

        {/* Overlay Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {talent.badges.map(badge => (
            <span key={badge} className={`text-[10px] font-bold px-2 py-0.5 uppercase tracking-wider ${
              badge === 'TOP RATED' ? 'bg-skeet-gold text-black' :
              badge === 'PREMIUM' ? 'bg-purple-600 text-white' :
              'bg-gray-800 text-white border border-gray-600'
            }`}>
              {badge}
            </span>
          ))}
        </div>

        {talent.isOnline && (
           <div className="absolute top-2 right-2 flex items-center bg-black/60 backdrop-blur-sm px-2 py-1 rounded-full border border-skeet-green/50">
             <div className="w-2 h-2 rounded-full bg-skeet-green animate-pulse-fast mr-1.5"></div>
             <span className="text-[10px] font-bold text-skeet-green uppercase">Live</span>
           </div>
        )}
    </div>
  );

  if (condensed) {
    return (
      <div className="bg-skeet-card group hover:-translate-y-1 transition-transform duration-300 border border-gray-800 hover:border-skeet-green flex flex-col h-full">
        <ProfileImage />
        <div className="p-4 flex flex-col flex-grow">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-bold text-white text-lg leading-tight">{talent.name}</h3>
            <div className="flex items-center text-skeet-gold text-xs font-bold">
               <Star size={12} fill="currentColor" className="mr-0.5" />
               {talent.rating}
            </div>
          </div>
          <div className="text-skeet-green font-bold text-sm mb-3">{talent.rate.toLocaleString()} $SKEET <span className="text-gray-500 text-xs font-normal">/hr</span></div>
          <div className="mt-auto">
             <a href={LINKS.PUMP} target="_blank" rel="noopener noreferrer">
              <Button size="sm" fullWidth className="text-xs">Book Instant</Button>
             </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-skeet-card group hover:-translate-y-2 transition-transform duration-300 border border-gray-800 hover:border-gray-600 flex flex-col h-full overflow-hidden">
      <ProfileImage />
      
      <div className="p-5 flex flex-col flex-grow relative">
        {/* Name and Verified */}
        <div className="flex items-center justify-between mb-1">
          <h3 className="text-xl font-bold text-white group-hover:text-skeet-green transition-colors">{talent.name}</h3>
          <span className="text-blue-400" title="Verified">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
          </span>
        </div>

        {/* Rating */}
        <div className="flex items-center mb-4 text-sm">
          <div className="flex text-skeet-gold mr-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} fill={i < Math.floor(talent.rating) ? "currentColor" : "none"} className={i < Math.floor(talent.rating) ? "" : "text-gray-600"} />
            ))}
          </div>
          <span className="text-gray-400 text-xs">({talent.rating}) • {talent.reviews} bookings</span>
        </div>

        {/* Specialties */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {talent.specialties.map(tag => (
            <span key={tag} className="text-[10px] uppercase bg-[#222] text-gray-300 px-2 py-1 rounded border border-[#333]">
              {tag}
            </span>
          ))}
        </div>

        {/* Bio */}
        <p className="text-gray-400 text-sm mb-4 italic line-clamp-2">"{talent.bio}"</p>

        {/* Footer */}
        <div className="mt-auto pt-4 border-t border-[#222] flex items-center justify-between">
          <div className="flex flex-col">
             <span className="text-xs text-gray-500 uppercase">Rate</span>
             <span className="text-skeet-green font-bold">{talent.rate.toLocaleString()} $SKEET <span className="text-xs text-gray-500">/hr</span></span>
          </div>
          <a href={LINKS.PUMP} target="_blank" rel="noopener noreferrer">
             <Button size="sm">Book Now</Button>
          </a>
        </div>
      </div>
    </div>
  );
};