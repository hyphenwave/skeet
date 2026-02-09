import React, { useState, useEffect } from 'react';
import { Button } from './ui/Button';
import { Copy, Check } from 'lucide-react';
import { LINKS } from '../constants';

interface TokenStats {
  price: string;
  marketCap: string;
  liquidity: string;
}

const FALLBACK_STATS: TokenStats = {
  price: '$0.00069',
  marketCap: '$690,420',
  liquidity: '$42,069',
};

export const TokenSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [stats, setStats] = useState<TokenStats>(FALLBACK_STATS);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch(
          `https://api.dexscreener.com/tokens/v1/solana/${LINKS.CONTRACT}`
        );
        if (!res.ok) throw new Error('API error');
        const data = await res.json();

        if (Array.isArray(data) && data.length > 0) {
          const pair = data[0];
          const price = parseFloat(pair.priceUsd || '0');
          const mc = pair.marketCap || pair.fdv || 0;
          const liq = pair.liquidity?.usd || 0;

          setStats({
            price: price < 0.01
              ? `$${price.toPrecision(4)}`
              : `$${price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 6 })}`,
            marketCap: `$${Number(mc).toLocaleString(undefined, { maximumFractionDigits: 0 })}`,
            liquidity: `$${Number(liq).toLocaleString(undefined, { maximumFractionDigits: 0 })}`,
          });
        }
      } catch {
        // Keep fallback stats
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
    const interval = setInterval(fetchStats, 30000);
    return () => clearInterval(interval);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(LINKS.CONTRACT);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-black relative border-t border-b border-gray-800">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-black text-white uppercase mb-4">Pay With <span className="text-skeet-green">$SKEET</span></h2>
        <p className="text-gray-400 mb-10 max-w-xl mx-auto text-lg">
          The official currency of TeamSkeet Talent Agency. Get your tokens now to access our premium talent roster.
        </p>

        <div className="bg-[#050505] border border-gray-700 rounded-lg p-6 max-w-2xl mx-auto mb-10 shadow-2xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-left">
              <div className="text-xs text-gray-500 uppercase font-bold tracking-widest mb-1">Solana Contract Address</div>
              <div className="font-mono text-sm md:text-base text-white break-all">{LINKS.CONTRACT}</div>
            </div>
            <button
              onClick={handleCopy}
              className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded transition-colors"
            >
              {copied ? <Check size={18} className="text-skeet-green" /> : <Copy size={18} />}
              <span className="text-xs font-bold uppercase">{copied ? 'Copied!' : 'Copy'}</span>
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12">
          <a href={LINKS.PUMP} target="_blank" rel="noopener noreferrer">
             <Button size="lg" className="min-w-[200px]">Buy $SKEET</Button>
          </a>
          <a href={LINKS.TWITTER} target="_blank" rel="noopener noreferrer">
             <Button size="lg" variant="secondary" className="min-w-[200px]">Follow @TeamSkeet</Button>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto text-center">
          <div className="bg-[#111] p-4 border-l-2 border-skeet-green">
             <div className="text-gray-500 text-xs uppercase mb-1">Current Price</div>
             <div className={`text-xl font-mono text-white ${loading ? 'animate-pulse' : ''}`}>{stats.price}</div>
          </div>
          <div className="bg-[#111] p-4 border-l-2 border-skeet-green">
             <div className="text-gray-500 text-xs uppercase mb-1">Liquidity</div>
             <div className={`text-xl font-mono text-white ${loading ? 'animate-pulse' : ''}`}>{stats.liquidity}</div>
          </div>
          <div className="bg-[#111] p-4 border-l-2 border-skeet-green">
             <div className="text-gray-500 text-xs uppercase mb-1">Market Cap</div>
             <div className={`text-xl font-mono text-white ${loading ? 'animate-pulse' : ''}`}>{stats.marketCap}</div>
          </div>
        </div>
      </div>
    </section>
  );
};
