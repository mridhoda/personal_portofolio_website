import React from 'react';

const SocialIcon: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <a href="#" className="text-gray-600 hover:text-[#10c186] transition-colors">{children}</a>
);

const AboutSection: React.FC = () => {
  return (
    <section className="bg-white p-8 lg:p-12 rounded-3xl">
      <div className="flex flex-col md:flex-row gap-10 items-center">
        <div className="md:w-1/3 flex-shrink-0">
          <img
            src="https://i.imgur.com/rV9AmkC.png"
            alt="John Watson Biography"
            className="rounded-2xl object-cover w-full h-auto"
          />
        </div>
        <div className="md:w-2/3">
          <p className="text-gray-500 font-medium tracking-widest">MY BIOGRAPHY</p>
          <h2 className="text-3xl font-bold text-gray-800 my-4">A Lead UI Designer & Web Developer Based In UK</h2>
          <p className="text-gray-600 mb-6">
            I love Graphic design and Photography and have been working on my portfolio since 2016. I can give your business a new Creative start right away! Contact me and we will discuss your projects!
          </p>
          <hr className="my-6" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 text-gray-700">
            <div className="flex">
                <p className="font-semibold w-16">Name</p>
                <p>: John Watson</p>
            </div>
            <div className="flex">
                <p className="font-semibold w-16">From</p>
                <p>: London, UK</p>
            </div>
            <div className="flex">
                <p className="font-semibold w-16">Email</p>
                <p>: example@mail.com</p>
            </div>
            <div className="flex">
                <p className="font-semibold w-16">Phone</p>
                <p>: +21 234 567 8901</p>
            </div>
          </div>
          <hr className="my-6" />
          <div className="flex items-center gap-4">
            <span className="font-semibold text-gray-700">Follow me on</span>
            <SocialIcon>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M14 12h-4v10h4V12zM20 10h-4v12h4V10zM9.5 0C4.264 0 0 4.312 0 9.625c0 4.106 2.588 7.584 6.062 8.914l.11-.643c-.117.023-.238.043-.357.043C2.695 18 0 15.312 0 12.125 0 8.938 2.695 6.25 5.812 6.25c2.425 0 4.375 1.406 4.375 4.125 0 2.21-1.168 4.625-2.812 4.625-.92 0-1.55-.83-1.55-1.816 0-1.48 1.04-2.932 1.04-4.156 0-1.148-.95-2.073-2.18-2.073-1.63 0-2.825 1.5-2.825 3.328 0 .804.28 1.343.645 1.343.32 0 .543-.44.543-.88 0-.6-.2-1.04-.2-1.54 0-.92.402-1.74 1.25-1.74.83 0 1.4.67 1.4 1.63 0 1.14-.38 2.55-.38 3.55 0 1.35.91 2.375 2.12 2.375 2.25 0 3.5-2.58 3.5-5.188C15.688 8.125 12.812 4 9.5 4S3.312 8.125 3.312 11.438c0 .88.243 1.812.243 1.812l-1.09 4.375c-.2 1.15.52 1.75 1.11 1.06l1.32-1.5c.34.62.77 1.16 1.28 1.62.18.16.36.32.55.47l-.14.73C2.1 20.3 0 16.5 0 12.124 0 5.437 4.265 0 9.5 0zm-.312 10.312c0 .53-.25.938-.75.938-.56 0-.81-.5-.81-1.06 0-.96.68-1.58 1.56-1.58.87 0 1.31.75 1.31 1.7z"/></svg>
            </SocialIcon>
            <SocialIcon>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M2.52,2.52,6.34,20.48l8.36-8.36Zm18.96,0-17.92,3.82,8.36,8.36Z"/></svg>
            </SocialIcon>
            <SocialIcon>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM8.5 18H6v-7h2.5v7zm-1.25-8.25c-.97 0-1.75-.78-1.75-1.75s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.75-1.75 1.75zM18 18h-2.5v-3.5c0-.83-.02-1.9-1.16-1.9s-1.34.9-1.34 1.84V18h-2.5v-7h2.4v1.1h.03c.33-.62 1.14-1.27 2.37-1.27 2.54 0 3 1.67 3 3.85V18z"/></svg>
            </SocialIcon>
          </div>
          <div className="flex gap-4 mt-8">
            <button className="bg-[#1f3438] text-white px-8 py-3 rounded-full hover:bg-opacity-80 transition-opacity">Hire me</button>
            <button className="bg-[#10c186] text-white px-8 py-3 rounded-full hover:bg-opacity-80 transition-opacity">Download CV</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;