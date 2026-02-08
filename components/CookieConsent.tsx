import React, { useState } from 'react';
import { Button } from './ui/Button';

export const CookieConsent: React.FC = () => {
  const [accepted, setAccepted] = useState(false);

  if (accepted) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#111] border-t border-skeet-green p-4 z-50 flex flex-col md:flex-row items-center justify-between gap-4 shadow-[0_-5px_20px_rgba(0,0,0,0.8)]">
      <p className="text-gray-300 text-sm text-center md:text-left">
        This site uses cookies. By continuing, you agree to get pumped.
      </p>
      <Button size="sm" onClick={() => setAccepted(true)} className="whitespace-nowrap">
        Got it
      </Button>
    </div>
  );
};