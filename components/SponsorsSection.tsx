
import React from 'react';

const SponsorLogo: React.FC<{ name: string, children: React.ReactNode }> = ({ name, children }) => (
    <div className="flex items-center gap-2 text-white/70 hover:text-white transition-colors cursor-pointer">
        {children}
        <span className="font-semibold">{name}</span>
    </div>
);

const SponsorsSection: React.FC = () => {
  return (
    <section className="bg-[#38766a] rounded-3xl mt-8 py-8 px-4 sm:px-8">
      <div className="flex flex-wrap justify-around items-center gap-8">
          <SponsorLogo name="MASSAGE & SPA">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M12 6v6l4 2" /></svg>
          </SponsorLogo>
          <SponsorLogo name="BUTCHERY">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
          </SponsorLogo>
          <div className="flex flex-col items-center text-white/70">
            <span className="font-bold text-lg">NATURAL</span>
            <span className="text-xs">PROPER DIET</span>
          </div>
          <div className="flex flex-col items-center text-white/70 border-2 border-white/70 rounded-full p-2 h-20 w-20 justify-center">
            <span className="font-bold text-xl">100%</span>
            <span className="text-xs">GLUTEN FREE</span>
          </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
