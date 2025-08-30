import React, { useState } from 'react';
import { NAV_LINKS, LogoIcon, ChevronDownIcon, SearchIcon, MenuIcon } from '../constants';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 p-8 z-10">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <LogoIcon />
          <span className="text-white text-xl font-semibold">UI Portfolio</span>
        </div>
        <nav className="hidden lg:flex items-center gap-8 text-white">
          {NAV_LINKS.map((link) => (
            <a key={link.name} href={link.href} className="flex items-center hover:text-[#10c186] transition-colors">
              {link.name}
              {link.dropdown && <ChevronDownIcon />}
            </a>
          ))}
        </nav>
        <div className="hidden lg:flex items-center gap-6 text-white">
          <button className="bg-[#10c186] px-6 py-2 rounded-full hover:bg-opacity-80 transition-opacity">Hire Me</button>
          <SearchIcon />
          <MenuIcon />
        </div>
        <div className="lg:hidden text-white">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <MenuIcon />
          </button>
        </div>
      </div>
       {isMenuOpen && (
        <div className="lg:hidden mt-4 bg-white/10 backdrop-blur-sm rounded-lg p-4">
          <nav className="flex flex-col gap-4 text-white">
            {NAV_LINKS.map((link) => (
              <a key={link.name} href={link.href} className="flex items-center justify-between hover:text-[#10c186] transition-colors">
                {link.name}
                {link.dropdown && <ChevronDownIcon />}
              </a>
            ))}
             <button className="bg-[#10c186] px-6 py-2 rounded-full hover:bg-opacity-80 transition-opacity mt-2">Hire Me</button>
          </nav>
        </div>
      )}
    </header>
  );
};

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-[#1f3438] rounded-3xl overflow-hidden text-white min-h-[600px] lg:min-h-[700px]">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10" 
        style={{backgroundImage: "url('https://png.pngtree.com/background/20240112/original/pngtree-selective-focus-3d-render-of-modern-office-workplace-with-close-up-picture-image_7227965.jpg')"}} // Subtle keyboard background
      ></div>
      <div className="absolute inset-0 bg-black/30"></div>
      <Header />
      <div className="absolute inset-0 flex flex-col lg:flex-row items-center pt-32 pb-16 lg:pt-0 lg:pb-0 px-8 lg:px-16">
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-3xl md:text-4xl font-bold">Hi, I'm Muhammad Ridho Darmawan</h1>
          <h2 className="text-6xl md:text-8xl font-bold my-4 text-outline">AI Developer</h2>
          <p className="text-gray-300 max-w-md mx-auto lg:mx-0">
            I love Graphic design and Photography and have been working on my portfolio since 2016. I can give your business a new Creative start right away!
          </p>
          <div className="flex gap-4 mt-8 justify-center lg:justify-start">
            <button className="bg-[#10c186] px-8 py-3 rounded-full hover:bg-opacity-80 transition-opacity">Hire Me</button>
            <button className="border border-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition-colors">My Portfolio</button>
          </div>
        </div>
        <div className="lg:w-1/2 flex justify-center items-end h-full mt-8 lg:mt-0">
          <img 
            src="https://i.imgur.com/kejH9Ch.png" 
            alt="John Watson" 
            className="w-full max-h-[500px] lg:max-h-[650px] object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;