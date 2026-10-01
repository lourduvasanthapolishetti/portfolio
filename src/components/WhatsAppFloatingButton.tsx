import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const WhatsAppFloatingButton: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    // Open in new window/tab safely
    window.open(PERSONAL_INFO.whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      id="whatsapp-floating-container"
      className="fixed right-6 bottom-6 z-50 flex items-center gap-3 select-none"
    >
      {/* Tooltip on hover */}
      <div
        id="whatsapp-tooltip"
        className={`hidden sm:flex items-center gap-2 bg-[#0A1B2E]/95 backdrop-blur-md text-white border border-[#25D366]/40 px-3.5 py-2 rounded-lg text-xs font-mono shadow-2xl transition-all duration-300 pointer-events-none ${
          isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
        }`}
      >
        <span className="w-2 h-2 rounded-full bg-[#25D366] inline-block" />
        <span className="text-[#25D366] font-semibold">Online:</span>
        <span>Chat on WhatsApp</span>
      </div>

      {/* Floating Glow Button */}
      <a
        id="whatsapp-glow-button"
        href={PERSONAL_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label="Contact Lourdu Vasantha on WhatsApp"
        className="whatsapp-glow group relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] text-white shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#25D366]/50"
      >
        {/* Continuous high-radiance ambient glow layers */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-85 blur-md animate-pulse pointer-events-none" />
        <span className="absolute -inset-2.5 rounded-full bg-gradient-to-r from-[#25D366] via-[#10b981] to-[#128C7E] opacity-80 blur-lg group-hover:opacity-100 group-hover:blur-xl transition-all duration-300 pointer-events-none" />
        <span className="absolute -inset-4 rounded-full bg-[#25D366]/40 blur-2xl group-hover:bg-[#25D366]/65 pointer-events-none" />

        {/* WhatsApp Icon */}
        <svg
          className="relative z-10 w-7 h-7 sm:w-8 sm:h-8 fill-current drop-shadow-md transition-transform duration-300 group-hover:rotate-6"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.04 14.69 2 12.04 2ZM12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.59 20.15 12.05 20.15C10.56 20.15 9.11 19.75 7.85 19L7.55 18.82L4.43 19.64L5.26 16.6L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67ZM9.11 7.27C8.94 7.27 8.66 7.33 8.43 7.58C8.19 7.84 7.52 8.46 7.52 9.74C7.52 11.02 8.45 12.25 8.58 12.42C8.71 12.6 10.4 15.22 13 16.34C15.17 17.27 15.61 17.08 16.08 17.04C16.55 17 17.59 16.42 17.81 15.8C18.03 15.18 18.03 14.65 17.96 14.53C17.89 14.41 17.72 14.34 17.46 14.21C17.2 14.08 15.93 13.45 15.7 13.36C15.46 13.28 15.29 13.24 15.12 13.5C14.95 13.75 14.45 14.34 14.3 14.51C14.15 14.68 14 14.71 13.74 14.58C13.48 14.45 12.65 14.18 11.66 13.3C10.89 12.61 10.37 11.76 10.22 11.51C10.07 11.25 10.21 11.11 10.34 10.98C10.46 10.86 10.6 10.68 10.74 10.53C10.88 10.37 10.93 10.26 11.02 10.08C11.11 9.9 11.06 9.74 11 9.61C10.93 9.48 10.42 8.23 10.21 7.72C10 7.22 9.79 7.29 9.63 7.28L9.11 7.27Z" />
        </svg>
      </a>
    </div>
  );
};
