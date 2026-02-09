import React from 'react';
import { Copy } from 'lucide-react';
import { LINKS } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#020202] border-t border-[#1a1a1a] pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <div className="text-2xl font-black tracking-tighter mb-2">
              <span className="text-white">TEAM</span>
              <span className="text-skeet-green">SKEET</span>
              <span className="text-gray-500 text-sm ml-2 tracking-widest">TALENT</span>
            </div>
            <p className="text-gray-500 text-sm">Professional shilling. Maximum pumping.</p>
          </div>
          
          <div className="flex gap-6">
            <a href={LINKS.TWITTER} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white flex items-center gap-2 transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              <span className="text-sm font-bold uppercase">X</span>
            </a>
            <a href={LINKS.PUMP} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-skeet-green flex items-center gap-2 transition-colors">
              <img src="/Pump_idrs8cZ-zg_0.png" alt="Pump.fun" className="w-5 h-5 rounded-full" />
              <span className="text-sm font-bold uppercase">Pump.fun</span>
            </a>
          </div>
        </div>

        <div className="border-t border-[#1a1a1a] py-8 flex flex-col items-center">
           <div className="text-gray-600 text-xs uppercase mb-2">Contract Address</div>
           <div className="flex items-center gap-2 bg-[#0a0a0a] px-3 py-1.5 rounded border border-[#222] text-gray-400 font-mono text-xs hover:border-gray-500 transition-colors cursor-pointer group"
                onClick={() => navigator.clipboard.writeText(LINKS.CONTRACT)}>
              {LINKS.CONTRACT.substring(0, 6)}...{LINKS.CONTRACT.substring(LINKS.CONTRACT.length - 6)}
              <Copy size={12} className="group-hover:text-white" />
           </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-700 mt-8">
          <div className="mb-4 md:mb-0">© 2026 TeamSkeet Talent Agency</div>
          <div className="text-center md:text-right max-w-md">
            Not affiliated with TeamSkeet. Talent are actors. Results not guaranteed. NFA.
          </div>
        </div>
      </div>
    </footer>
  );
};