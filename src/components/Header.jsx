import { useState, useEffect } from 'react';
import data from '../data.js';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
      <nav className={`block py-4 w-full max-w-full rounded-none px-4 fixed top-0 z-50 border-0 ${isScrolled ? 'bg-white text-gray-900' : 'bg-transparent text-white'}`}>
        <div className="container mx-auto flex items-center justify-between">
          <img src={data.logos.main} alt="logo" className="h-32 w-auto  mb-[-30px] mt-[-20px]" />
          <ul className="ml-10 hidden items-center gap-6 lg:flex font-bold">
            <li>
              <a href="#start" target="_self" className="block antialiased font-sans leading-normal text-inherit">Inicio</a>
            </li>
            <li>
              <a href="#team" target="_self" className="block antialiased font-sans leading-normal text-inherit">Equipo</a>
            </li>
            <li>
              <a href="#investigation" target="_self" className="block antialiased font-sans leading-normal text-inherit">Investigación</a>
            </li>
            <li>
              <a href="#phases" target="_self" className="block antialiased font-sans leading-normal text-inherit">Robot</a>
            </li>
          </ul>
          <div className="hidden gap-2 lg:flex">
            <a href={data.socialLinks.robocoon.github} target="_blank" rel="noreferrer" className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-8 max-w-[32px] h-8 max-h-[32px] rounded-lg text-xs text-white hover:bg-white/10 active:bg-white/30" type="button">
              <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                <svg viewBox="0 0 16 16" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg" fill={`${isScrolled ? 'black' : 'white'}`}>
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                </svg>
              </span>
            </a>
            <a href={data.socialLinks.robocoon.pdf} target="_blank" rel="noreferrer" >
              <button className={`align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-4 rounded-lg shadow-md shadow-blue-gray-500/10 hover:shadow-lg hover:shadow-blue-gray-500/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none ${isScrolled ? 'bg-black text-white' : 'bg-white text-gray-900'}`} type="button">
                Documentación</button>
            </a>
          </div>
          <button className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-white hover:bg-white/10 active:bg-white/30 ml-auto inline-block lg:hidden" type="button">
            <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-6 w-6">
                <path d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" ></path>
              </svg>
            </span>
          </button>
        </div>
      </nav>
  );
}

export default Header