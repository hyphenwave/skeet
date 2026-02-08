import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/Button';
import { LINKS } from '../constants';

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const NavLinks = () => (
    <>
      <a href="#available-now" className="text-gray-300 hover:text-skeet-green text-sm font-bold uppercase tracking-wide transition-colors">Browse Talent</a>
      <a href="#services" className="text-gray-300 hover:text-skeet-green text-sm font-bold uppercase tracking-wide transition-colors">Services</a>
      <a href="#how-it-works" className="text-gray-300 hover:text-skeet-green text-sm font-bold uppercase tracking-wide transition-colors">How It Works</a>
      <a href="#browse" className="text-gray-300 hover:text-skeet-green text-sm font-bold uppercase tracking-wide transition-colors">Top Rated</a>
    </>
  );

  return (
    <nav className="bg-skeet-dark border-b border-[#333] py-4 sticky top-[36px] z-40">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex flex-col items-start cursor-pointer group">
          <div className="text-2xl md:text-3xl font-black tracking-tighter leading-none">
            <span className="text-white">TEAM</span>
            <span className="text-skeet-green group-hover:drop-shadow-[0_0_8px_rgba(76,217,100,0.8)] transition-all">SKEET</span>
          </div>
          <span className="text-[10px] md:text-xs text-gray-400 font-bold tracking-[0.2em] ml-0.5">TALENT AGENCY</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLinks />
        </div>

        {/* Right Actions */}
        <div className="hidden md:flex items-center space-x-4">
           <a href={LINKS.PUMP} target="_blank" rel="noopener noreferrer">
            <Button size="sm">Book Now</Button>
           </a>
           <a href={LINKS.TWITTER} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-400 hover:text-white text-xs font-bold border border-gray-700 hover:border-white px-3 py-1.5 rounded uppercase transition-colors">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              <span>Follow</span>
           </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#111] absolute top-full left-0 w-full border-b border-[#333] shadow-2xl py-6 flex flex-col space-y-4 px-6 z-50">
          <NavLinks />
          <div className="h-px bg-gray-800 my-2"></div>
          <a href={LINKS.PUMP} className="block w-full">
            <Button fullWidth>Book Now</Button>
          </a>
          <a href={LINKS.TWITTER} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center space-x-2 text-gray-400 hover:text-white border border-gray-700 hover:border-white py-3 rounded uppercase font-bold transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              <span>Follow on X</span>
           </a>
        </div>
      )}
    </nav>
  );
};