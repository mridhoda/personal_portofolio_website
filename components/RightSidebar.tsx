
import React from 'react';
import { SERVICES, STATS, PORTFOLIO_IMAGES } from '../constants';

const Services: React.FC = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
    {SERVICES.map((service, index) => (
      <div key={index} className="flex gap-4">
        <div className="flex-shrink-0">{service.icon}</div>
        <div>
          <h4 className="font-bold text-gray-800">{service.title}</h4>
          <p className="text-gray-500 text-sm mt-1">{service.description}</p>
        </div>
      </div>
    ))}
  </div>
);

const Stats: React.FC = () => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
    {STATS.map((stat, index) => (
      <div key={index}>
        <p className="text-3xl font-bold text-gray-800">{stat.number}</p>
        <p className="text-gray-500 text-sm mt-1">{stat.label}</p>
      </div>
    ))}
  </div>
);

const Portfolio: React.FC = () => (
  <div>
    <h3 className="text-2xl font-bold text-gray-800 mb-6">My Success Work</h3>
    <div className="grid grid-cols-2 gap-4">
      {PORTFOLIO_IMAGES.map((src, index) => (
        <div key={index} className="overflow-hidden rounded-lg">
          <img src={src} alt={`Portfolio work ${index + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
        </div>
      ))}
    </div>
  </div>
);

const RightSidebar: React.FC = () => {
  return (
    <aside className="bg-white rounded-3xl flex flex-col divide-y divide-gray-200">
      <div className="flex flex-col sm:flex-row p-8">
        <div className="flex-1">
          <Services />
        </div>
        <div className="flex-shrink-0 mt-8 sm:mt-0 sm:ml-8 flex justify-center">
          <img 
            src="https://i.imgur.com/N7Nb56N.png" 
            alt="John Watson Sidebar" 
            className="h-64 w-48 object-cover object-top rounded-lg"
          />
        </div>
      </div>
      <div className="p-8">
        <Stats />
      </div>
      <div className="p-8">
        <Portfolio />
      </div>
    </aside>
  );
};

export default RightSidebar;
