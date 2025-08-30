
import React from 'react';

// FIX: Declare icon components before they are used in the SERVICES array.
const WebDevIcon: React.FC = () => (
  <svg className="w-6 h-6 text-[#10c186]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
);
const DesignTrendsIcon: React.FC = () => (
  <svg className="w-6 h-6 text-[#10c186]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path></svg>
);
const ResearchIcon: React.FC = () => (
  <svg className="w-6 h-6 text-[#10c186]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
);
const CustomerSupportIcon: React.FC = () => (
  <svg className="w-6 h-6 text-[#10c186]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2V4a2 2 0 012-2h6a2 2 0 012 2v4z"></path></svg>
);
const ResponsiveIcon: React.FC = () => (
  <svg className="w-6 h-6 text-[#10c186]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
);
const PsdDesignIcon: React.FC = () => (
  <svg className="w-6 h-6 text-[#10c186]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
);

export const NAV_LINKS = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#' },
  { name: 'Services', href: '#' },
  { name: 'Blog', href: '#', dropdown: true },
  { name: 'Pages', href: '#', dropdown: true },
  { name: 'Contact', href: '#' },
];

export const SERVICES = [
  {
    icon: <WebDevIcon />,
    title: 'Web Development',
    description: 'Lorem ipsum viverra libero set. Pellen ut justo, in ligula at.',
  },
  {
    icon: <DesignTrendsIcon />,
    title: 'Design Trends',
    description: 'Lorem ipsum viverra libero set. Pellen ut justo, in ligula at.',
  },
  {
    icon: <ResearchIcon />,
    title: 'Research & Analysis',
    description: 'Lorem ipsum viverra libero set. Pellen ut justo, in ligula at.',
  },
  {
    icon: <CustomerSupportIcon />,
    title: 'Customer support',
    description: 'Lorem ipsum viverra libero set. Pellen ut justo, in ligula at.',
  },
  {
    icon: <ResponsiveIcon />,
    title: 'Responsive design',
    description: 'Lorem ipsum viverra libero set. Pellen ut justo, in ligula at.',
  },
  {
    icon: <PsdDesignIcon />,
    title: 'PSD Design',
    description: 'Lorem ipsum viverra libero set. Pellen ut justo, in ligula at.',
  },
];

export const STATS = [
    { number: '1350', label: 'Finished Projects' },
    { number: '2250', label: 'Working Hours' },
    { number: '1146', label: 'Online Support' },
    { number: '2703', label: 'Happy Customers' },
];

export const PORTFOLIO_IMAGES = [
    'https://i.imgur.com/8LroG1W.jpeg',
    'https://i.imgur.com/KxEU0Vd.jpeg',
    'https://i.imgur.com/p59arvE.jpeg',
    'https://i.imgur.com/qVTGk4C.jpeg',
    'https://i.imgur.com/T03h0bK.jpeg',
    'https://i.imgur.com/5AIpY4I.jpeg',
];

// Icons
export const LogoIcon: React.FC = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const ChevronDownIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
);

export const SearchIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
);

export const MenuIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
