
import React from 'react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import RightSidebar from './components/RightSidebar';
import SponsorsSection from './components/SponsorsSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-[#F0F2F5] min-h-screen flex flex-col">
      <main className="w-full max-w-[1400px] mx-auto p-4 sm:p-6 lg:p-8 flex-grow">
        <div className="flex flex-col gap-8">
          <HeroSection />
          <AboutSection />
          <RightSidebar />
        </div>
        <SponsorsSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;