import React from 'react';
import { Banner } from './components/Banner';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { TalentCard } from './components/TalentCard';
import { ServiceSection } from './components/ServiceSection';
import { Testimonials } from './components/Testimonials';
import { TokenSection } from './components/TokenSection';
import { TrustTicker } from './components/TrustTicker';
import { Footer } from './components/Footer';
import { CookieConsent } from './components/CookieConsent';
import { CategoryPills } from './components/CategoryPills';
import { TALENT_ROSTER, LINKS } from './constants';
import { ArrowRight } from 'lucide-react';

const App: React.FC = () => {
  // Filter for available talent
  const availableTalent = TALENT_ROSTER.filter(t => t.isOnline || t.rate > 450).slice(0, 4);

  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-skeet-green selection:text-black">
      <Banner />
      <Navbar />
      
      <main>
        <Hero />
        <HowItWorks />
        
        {/* Featured Talent Section */}
        <section id="browse" className="py-16 bg-[#050505]">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-end mb-12 border-b border-gray-800 pb-4">
               <h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-wide border-l-4 border-skeet-green pl-4">
                Featured Talent
              </h2>
              <a href="#browse" className="text-skeet-green font-bold text-sm flex items-center hover:underline">
                VIEW ALL <ArrowRight size={16} className="ml-1" />
              </a>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {TALENT_ROSTER.map(talent => (
                <TalentCard key={talent.id} talent={talent} />
              ))}
            </div>
          </div>
        </section>

        {/* Available Now Section */}
        <section id="available-now" className="py-16 bg-black border-t border-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-black text-white mb-8 uppercase tracking-wide flex items-center">
              <span className="w-3 h-3 bg-skeet-green rounded-full mr-3 animate-pulse"></span>
              Available Now
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {availableTalent.map(talent => (
                <div key={`avail-${talent.id}`} className="h-full">
                  <TalentCard talent={{...talent, isOnline: true}} condensed />
                </div>
              ))}
            </div>
          </div>
        </section>

        <ServiceSection />
        <CategoryPills />
        <Testimonials />
        <TokenSection />
        <TrustTicker />
      </main>

      <Footer />
      <CookieConsent />
    </div>
  );
};

export default App;