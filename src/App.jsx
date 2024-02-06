import './index.css'
import Logo from "./assets/logo192.png"
import LogoFirstLego from "./assets/first-lego-logo.png"
import LogoVertical from "./assets/robocoons-logo2.png"
import Team from "./assets/hero.jpeg"
import Member1 from "./assets/alejandro.jpg";

import { useState, useEffect } from 'react';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const year = new Date().getFullYear();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Agregar el listener para el evento de scroll
    window.addEventListener('scroll', handleScroll);

    // Limpiar el listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='font-serif'>
      <nav className={`block py-4 w-full max-w-full rounded-none px-4 fixed top-0 z-50 border-0 ${isScrolled ? 'bg-white text-gray-900' : 'bg-transparent text-white'}`}>
        <div className="container mx-auto flex items-center justify-between">
          <img src={Logo} alt="logo" className="h-32 w-auto  mb-[-30px] mt-[-20px]" />
          <ul className="ml-10 hidden items-center gap-6 lg:flex ">
            <li>
              <a href="#" target="_self" className="block antialiased font-sans text-sm leading-normal text-inherit font-medium">Inicio</a>
            </li>
            <li>
              <a href="#" target="_self" className="block antialiased font-sans text-sm leading-normal text-inherit font-medium">Equipo</a>
            </li>
            <li>
              <a href="#" target="_self" className="block antialiased font-sans text-sm leading-normal text-inherit font-medium">Investigación</a>
            </li>
            <li>
              <a href="#" target="_self" className="block antialiased font-sans text-sm leading-normal text-inherit font-medium">Robot</a>
            </li>
          </ul>
          <div className="hidden gap-2 lg:flex">
            <a href="https://github.com/NeftaliVenancio/Robocoons-FLL-Challenge" target="_blank" rel="noreferrer" className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-8 max-w-[32px] h-8 max-h-[32px] rounded-lg text-xs text-white hover:bg-white/10 active:bg-white/30" type="button">
              <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                <svg viewBox="0 0 16 16" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg" fill={`${isScrolled ? 'black' : 'white'}`}>
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                </svg>
              </span>
            </a>
            <a href="https://drive.google.com/file/d/1zHs7kh_D_7befzZAVY0BcfwB2R5L8w4C/view" target="_blank" rel="noreferrer" >
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

      <section className="text-center relative overflow-hidden">
        <img src={Team} alt="main" className="block mt-[-50px] mb-[-250px]" />
        <div className="absolute top-28 left-1/2 transform -translate-x-1/2">
          <img src={LogoVertical} alt="Logo" className="mx-auto" />
        </div>
      </section>

      <section className="-mt-32 bg-white px-4 pb-20 pt-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="relative flex flex-col bg-clip-border bg-white text-gray-700 rounded-lg shadow-lg shadow-gray-500/10">
              <div className="p-6 px-8 text-center">
                <button className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-12 max-w-[48px] h-12 max-h-[48px] text-sm bg-gradient-to-tr from-gray-900 to-gray-800 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] pointer-events-none mb-6 rounded-full" type="button">
                  <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-5 h-5 text-white">
                      <path d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97zM6.75 8.25a.75.75 0 01.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H7.5z">
                      </path>
                    </svg>
                  </span>
                </button>
                <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900 mb-2">Objetivo</h5>
                <p className="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
                  Ser un equipo de alto rendimiento dedicado al diseño de proyectos tecnológicos con la meta de generar un impacto positivo en la comunidad a través del uso de aplicaciones STEM.</p>
              </div>
            </div>
            <div className="relative flex flex-col bg-clip-border bg-white text-gray-700 rounded-lg shadow-lg shadow-gray-500/10">
              <div className="p-6 px-8 text-center">
                <button className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-12 max-w-[48px] h-12 max-h-[48px] text-sm bg-gradient-to-tr from-gray-900 to-gray-800 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] pointer-events-none mb-6 rounded-full" type="button">
                  <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-5 h-5 text-white">
                      <path d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97zM6.75 8.25a.75.75 0 01.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H7.5z"></path>
                    </svg>
                  </span>
                </button>
                <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900 mb-2">Vision</h5>
                <p className="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
                  Ser un equipo relevante y expandir el área de alcance de nuestros proyectos a un ámbito internacional para el 2024.</p>
              </div>
            </div>
            <div className="relative flex flex-col bg-clip-border bg-white text-gray-700 rounded-lg shadow-lg shadow-gray-500/10">
              <div className="p-6 px-8 text-center">
                <button className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-12 max-w-[48px] h-12 max-h-[48px] text-sm bg-gradient-to-tr from-gray-900 to-gray-800 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] pointer-events-none mb-6 rounded-full" type="button">
                  <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-5 h-5 text-white">
                      <path d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97zM6.75 8.25a.75.75 0 01.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H7.5z"></path>
                    </svg>
                  </span>
                </button>
                <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900 mb-2">Verified Company</h5>
                <p className="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
                  Desde febrero de 2001 iniciamos espacios donde no sólo los niños, sino también los jóvenes y adultos pueden trabajar desarrollando ideas poderosas aprendiendo con principios aplicados tanto a la ciencia e ingeniería, como física y matemáticas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='mb-32 mt-20 mx-64'>
        <h1 className="text-4xl font-bold text-center mb-10 text-primary">Historia</h1>
        <div className="-my-8">
          <div className="relative pl-8 sm:pl-32 py-6 group">
            <div className="font-caveat font-medium text-2xl text-[#f0a500] mb-1 sm:mb-0">El origin</div>
            <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-[rgba(240,136,0,0.99)] after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
              <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold w-20 h-6 mb-3 sm:mb-0 text-white bg-[#123456] rounded-full">Feb, 2002</time>
              <div className="text-xl font-bold text-gray-700">Se inició a estudiar la plataforma en Septiembre del 2001. </div>
            </div>
            <div className="text-slate-500">En Febrero del 2002, el taller de Robótica empezó como el primer taller vespertino impartido por Profesores en el Colegio Las Hayas.</div>
          </div>

          <div className="relative pl-8 sm:pl-32 py-6 group">
            <div className="font-caveat font-medium text-2xl text-[#f0a500] mb-1 sm:mb-0">FLL en México</div>
            <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-[rgba(240,136,0,0.99)] after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
              <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold w-20 h-6 mb-3 sm:mb-0 text-white bg-[#123456] rounded-full">2004</time>
              <div className="text-xl font-bold text-gray-700">Primera competencia de FLL a México</div>
            </div>
            <div className="text-slate-500">En el 2004 llega la primera competencia de FLL a México gracias a Bárbara Gómez de Navarro, lo que nos permitió participar.</div>
          </div>

          <div className="relative pl-8 sm:pl-32 py-6 group">
            <div className="font-caveat font-medium text-2xl text-[#f0a500] mb-1 sm:mb-0">Competencias de robótica</div>
            <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-[rgba(240,136,0,0.99)] after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
              <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold w-20 h-6 mb-3 sm:mb-0 text-white bg-[#123456] rounded-full">May, 2008</time>
              <div className="text-xl font-bold text-gray-700">NanoQuest, No Limits y Ocean Odyssey.</div>
            </div>
            <div className="text-slate-500">Con ayuda de la Maestra Lula y el Maestro Carlos, el equipo de &quot;Robocoot; comenzó a participar en distintas competencias de robótica, como &quot;NanoQuest&quot;, &quot;No Limits&quot; y &quot;Ocean Odyssey&quot;.</div>
          </div>

          <div className="relative pl-8 sm:pl-32 py-6 group">
            <div className="font-caveat font-medium text-2xl text-[#f0a500] mb-1 sm:mb-0">Equipos</div>
            <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-[rgba(240,136,0,0.99)] after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
              <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold w-20 h-6 mb-3 sm:mb-0 text-white bg-[#123456] rounded-full">Jun, 2010</time>
              <div className="text-xl font-bold text-gray-700">Formanción de distintos equipos.</div>
            </div>
            <div className="text-slate-500">A través de los años, distintos estudiantes y profesores se han posicionado en podios Regionales, Naciones e Internacionales, formando así distintos equipos.</div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto w-full px-4 text-center lg:w-6/12">
          <h2 className="block antialiased tracking-normal font-sans text-4xl font-semibold leading-[1.3] text-blue-gray-900 my-3">Los Fases</h2>
        </div>
        <div className="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-none lg:!flex-row mb-10 lg:items-end">
          <div className="relative bg-clip-border mt-4 mx-4 rounded-xl overflow-hidden bg-white text-gray-700 h-[32rem] max-w-[28rem] shrink-0">
            <img alt="testimonial image" loading="lazy" width="768" height="768" decoding="async" data-nimg="1" className="h-full w-full object-cover" src={Member1} />
          </div>
          <div className="p-6 col-span-full lg:col-span-3">
            <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-blue-gray-900 mb-4">Workshop</h6>
            <h2 className="block antialiased tracking-normal font-sans text-4xl leading-[1.3] text-blue-gray-900 mb-4 font-medium">Introduction to Machine Learning</h2>
            <p className="block antialiased font-sans text-base leading-relaxed text-inherit mb-12 md:w-8/12 font-medium !text-gray-500">Explore the basic principles, algorithms, and applications of Machine Learning. Through hands-on exercises and practical examples, youll develop a solid understanding of how Machine Learning powers AI-driven solutions.</p>
          </div>
        </div>
        <div className="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-none lg:!flex-row mb-10 lg:items-end">
          <div className="p-6 col-span-full lg:col-span-3 text-right">
            <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-blue-gray-900 mb-4">Workshop</h6>
            <h2 className="block antialiased tracking-normal font-sans text-4xl leading-[1.3] text-blue-gray-900 mb-4 font-medium">Introduction to Machine Learning</h2>
            <p className="block antialiased font-sans text-base leading-relaxed float-end text-inherit mb-12 md:w-8/12 font-medium !text-gray-500">Explore the basic principles, algorithms, and applications of Machine Learning. Through hands-on exercises and practical examples, youll develop a solid understanding of how Machine Learning powers AI-driven solutions.</p>
          </div>
          <div className="relative bg-clip-border mt-4 mx-4 rounded-xl overflow-hidden bg-white text-gray-700 h-[32rem] max-w-[28rem] shrink-0">
            <img alt="testimonial image" loading="lazy" width="768" height="768" decoding="async" data-nimg="1" className="h-full w-full object-cover" src={Member1} />
          </div>
        </div>
        <div className="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-none lg:!flex-row mb-10 lg:items-end">
          <div className="relative bg-clip-border mt-4 mx-4 rounded-xl overflow-hidden bg-white text-gray-700 h-[32rem] max-w-[28rem] shrink-0">
            <img alt="testimonial image" loading="lazy" width="768" height="768" decoding="async" data-nimg="1" className="h-full w-full object-cover" src={Member1} />
          </div>
          <div className="p-6 col-span-full lg:col-span-3">
            <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-blue-gray-900 mb-4">Workshop</h6>
            <h2 className="block antialiased tracking-normal font-sans text-4xl leading-[1.3] text-blue-gray-900 mb-4 font-medium">Introduction to Machine Learning</h2>
            <p className="block antialiased font-sans text-base leading-relaxed text-inherit mb-12 md:w-8/12 font-medium !text-gray-500">Explore the basic principles, algorithms, and applications of Machine Learning. Through hands-on exercises and practical examples, youll develop a solid understanding of how Machine Learning powers AI-driven solutions.</p>
          </div>
        </div>
        <div className="relative flex flex-col lg:flex-row items-end bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-none mb-10">
          <div className="p-6 col-span-full lg:col-span-3 text-right">
            <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-blue-gray-900 mb-4">Workshop</h6>
            <h2 className="block antialiased tracking-normal font-sans text-4xl leading-[1.3] text-blue-gray-900 mb-4 font-medium">Introduction to Machine Learning</h2>
            <p className="block antialiased font-sans text-base leading-relaxed text-inherit mb-12 md:w-8/12 float-end font-medium !text-gray-500">Explore the basic principles, algorithms, and applications of Machine Learning. Through hands-on exercises and practical examples, youll develop a solid understanding of how Machine Learning powers AI-driven solutions.</p>
          </div>
          <div className="relative mt-4 mx-4 lg:mx-0 lg:ml-4 rounded-xl overflow-hidden bg-white text-gray-700 h-[32rem] max-w-[28rem] shrink-0">
            <img alt="testimonial image" className="h-full w-full object-cover" src={Member1} />
          </div>
        </div>
      </section>

      <section className='p-10'>
        <div className="mx-auto w-full px-4 text-center lg:w-6/12">
          <h2 className="block antialiased tracking-normal font-sans text-4xl font-semibold leading-[1.3] text-blue-gray-900 my-3">La Investigación</h2>
        </div>
        <div className="mt-8 w-full grid grid-cols-1 md:grid-cols-2 gap-4 ">
          <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700">
            <div className="h-[453px] p-5 flex flex-col justify-center items-center rounded-2xl bg-gray-900">
              <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-white mb-4 text-center">Presentation</h6>
              <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-white text-center">Cutting-Edge Insights!</h4>
              <p className="block antialiased font-sans text-white mt-2 mb-10 text-base w-full lg:w-8/12 text-center font-normal">Gain deep insights into the latest AI trends, developments, and applications that are reshaping industries worldwide. </p>
            </div>
          </div>
          <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700">
            <div className="h-[453px] p-5 flex flex-col justify-center items-center rounded-2xl bg-gray-900">
              <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-white mb-4 text-center">Presentation</h6>
              <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-white text-center">Cutting-Edge Insights!</h4>
              <p className="block antialiased font-sans text-white mt-2 mb-10 text-base w-full lg:w-8/12 text-center font-normal">Gain deep insights into the latest AI trends, developments, and applications that are reshaping industries worldwide. </p>
            </div>
          </div>
        </div>
        <div className="mt-8 w-full grid grid-cols-1 md:grid-cols-2 gap-4 ">
          <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700">
            <div className="h-[453px] p-5 flex flex-col justify-center items-center rounded-2xl bg-gray-900">
              <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-white mb-4 text-center">Presentation</h6>
              <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-white text-center">Cutting-Edge Insights!</h4>
              <p className="block antialiased font-sans text-white mt-2 mb-10 text-base w-full lg:w-8/12 text-center font-normal">Gain deep insights into the latest AI trends, developments, and applications that are reshaping industries worldwide. </p>
            </div>
          </div>
          <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700">
            <div className="h-[453px] p-5 flex flex-col justify-center items-center rounded-2xl bg-gray-900">
              <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-white mb-4 text-center">Presentation</h6>
              <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-white text-center">Cutting-Edge Insights!</h4>
              <p className="block antialiased font-sans text-white mt-2 mb-10 text-base w-full lg:w-8/12 text-center font-normal">Gain deep insights into the latest AI trends, developments, and applications that are reshaping industries worldwide. </p>
            </div>
          </div>
        </div>
      </section>

      <section className='mb-20'>
        <div className="mx-auto w-full px-4 text-center lg:w-6/12">
          <p className="block antialiased font-sans text-xl leading-relaxed text-inherit font-semibold">El Equipo</p>
          <h2 className="block antialiased tracking-normal font-sans text-4xl font-semibold leading-[1.3] text-blue-gray-900 my-3">Los Heroes</h2>
        </div>
        <div className="mt-24 grid grid-cols-1 gap-12 gap-x-24 md:grid-cols-2 xl:grid-cols-4">
          <div className="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-none text-center">
            <img src={Member1} alt="Ryan Tompson" className="inline-block relative object-cover object-center rounded-2xl h-full w-full shadow-lg shadow-gray-500/25" />
            <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900 mt-6 mb-1">Ryan Tompson</h5>
            <p className="block antialiased font-sans text-base leading-relaxed font-bold text-blue-gray-500">Web Developer</p>
          </div>
          <div className="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-none text-center">
            <img src={Member1} alt="Ryan Tompson" className="inline-block relative object-cover object-center rounded-2xl h-full w-full shadow-lg shadow-gray-500/25" />
            <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900 mt-6 mb-1">Ryan Tompson</h5>
            <p className="block antialiased font-sans text-base leading-relaxed font-bold text-blue-gray-500">Web Developer</p>
          </div>
          <div className="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-none text-center">
            <img src={Member1} alt="Ryan Tompson" className="inline-block relative object-cover object-center rounded-2xl h-full w-full shadow-lg shadow-gray-500/25" />
            <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900 mt-6 mb-1">Ryan Tompson</h5>
            <p className="block antialiased font-sans text-base leading-relaxed font-bold text-blue-gray-500">Web Developer</p>
          </div>
          <div className="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-none text-center">
            <img src={Member1} alt="Ryan Tompson" className="inline-block relative object-cover object-center rounded-2xl h-full w-full shadow-lg shadow-gray-500/25" />
            <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900 mt-6 mb-1">Ryan Tompson</h5>
            <p className="block antialiased font-sans text-base leading-relaxed font-bold text-blue-gray-500">Web Developer</p>
          </div>
          <div className="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-none text-center">
            <img src={Member1} alt="Ryan Tompson" className="inline-block relative object-cover object-center rounded-2xl h-full w-full shadow-lg shadow-gray-500/25" />
            <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900 mt-6 mb-1">Ryan Tompson</h5>
            <p className="block antialiased font-sans text-base leading-relaxed font-bold text-blue-gray-500">Web Developer</p>
          </div>
          <div className="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-none text-center">
            <img src={Member1} alt="Ryan Tompson" className="inline-block relative object-cover object-center rounded-2xl h-full w-full shadow-lg shadow-gray-500/25" />
            <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900 mt-6 mb-1">Ryan Tompson</h5>
            <p className="block antialiased font-sans text-base leading-relaxed font-bold text-blue-gray-500">Web Developer</p>
          </div>
          <div className="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-none text-center">
            <img src={Member1} alt="Ryan Tompson" className="inline-block relative object-cover object-center rounded-2xl h-full w-full shadow-lg shadow-gray-500/25" />
            <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900 mt-6 mb-1">Ryan Tompson</h5>
            <p className="block antialiased font-sans text-base leading-relaxed font-bold text-blue-gray-500">Web Developer</p>
          </div>
          <div className="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-none text-center">
            <img src={Member1} alt="Ryan Tompson" className="inline-block relative object-cover object-center rounded-2xl h-full w-full shadow-lg shadow-gray-500/25" />
            <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900 mt-6 mb-1">Ryan Tompson</h5>
            <p className="block antialiased font-sans text-base leading-relaxed font-bold text-blue-gray-500">Web Developer</p>
          </div>
          <div className="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-none text-center">
            <img src={Member1} alt="Ryan Tompson" className="inline-block relative object-cover object-center rounded-2xl h-full w-full shadow-lg shadow-gray-500/25" />
            <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900 mt-6 mb-1">Ryan Tompson</h5>
            <p className="block antialiased font-sans text-base leading-relaxed font-bold text-blue-gray-500">Web Developer</p>
          </div>
          <div className="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-none text-center">
            <img src={Member1} alt="Ryan Tompson" className="inline-block relative object-cover object-center rounded-2xl h-full w-full shadow-lg shadow-gray-500/25" />
            <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900 mt-6 mb-1">Ryan Tompson</h5>
            <p className="block antialiased font-sans text-base leading-relaxed font-bold text-blue-gray-500">Web Developer</p>
          </div>
          <div className="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-none text-center">
            <img src={Member1} alt="Ryan Tompson" className="inline-block relative object-cover object-center rounded-2xl h-full w-full shadow-lg shadow-gray-500/25" />
            <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900 mt-6 mb-1">Ryan Tompson</h5>
            <p className="block antialiased font-sans text-base leading-relaxed font-bold text-blue-gray-500">Web Developer</p>
          </div>
          <div className="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-none text-center">
            <img src={Member1} alt="Ryan Tompson" className="inline-block relative object-cover object-center rounded-2xl h-full w-full shadow-lg shadow-gray-500/25" />
            <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900 mt-6 mb-1">Ryan Tompson</h5>
            <p className="block antialiased font-sans text-base leading-relaxed font-bold text-blue-gray-500">Web Developer</p>
          </div>
          <div className="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-none text-center">
            <img src={Member1} alt="Ryan Tompson" className="inline-block relative object-cover object-center rounded-2xl h-full w-full shadow-lg shadow-gray-500/25" />
            <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900 mt-6 mb-1">Ryan Tompson</h5>
            <p className="block antialiased font-sans text-base leading-relaxed font-bold text-blue-gray-500">Web Developer</p>
          </div>
          <div className="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-none text-center">
            <img src={Member1} alt="Ryan Tompson" className="inline-block relative object-cover object-center rounded-2xl h-full w-full shadow-lg shadow-gray-500/25" />
            <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900 mt-6 mb-1">Ryan Tompson</h5>
            <p className="block antialiased font-sans text-base leading-relaxed font-bold text-blue-gray-500">Web Developer</p>
          </div>
          <div className="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-none text-center">
            <img src={Member1} alt="Ryan Tompson" className="inline-block relative object-cover object-center rounded-2xl h-full w-full shadow-lg shadow-gray-500/25" />
            <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900 mt-6 mb-1">Ryan Tompson</h5>
            <p className="block antialiased font-sans text-base leading-relaxed font-bold text-blue-gray-500">Web Developer</p>
          </div>
        </div>
      </section>

      <section className="flex flex-col justify-between items-center px-10">
        <div className='flex justify-between items-center w-full'>
          <div className='flex w-1/2'>
            <img src={Logo} alt="logo" className="w-32 h-auto pr-10" />
            <img src={LogoFirstLego} alt="logo" className="w-32 h-auto" style={{ filter: 'invert(1)' }} />
          </div>
          <div className='flex w-1/2 justify-end'>
            <a href="https://github.com/IsaRamDev" className="pr-10 text-base font-normal text-gray-600 dark:text-gray-300" target="_blank" rel="noreferrer">
              <svg fill='black' viewBox="0 0 16 16" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/isaramdev/" className="pr-10 text-base font-normal text-gray-600 dark:text-gray-300" target="_blank" rel="noreferrer">
              <svg fill='black' viewBox="0 0 16 16" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"></path>
              </svg>
            </a>
          </div>
        </div>
        <div className='flex justify-between w-1/2 pl-10 pb-5'>
          <p className="">
            {year} © Robocoons. All Rights Reserved.
          </p>
          <p className='flex justify-end'>
            © Created by <a href="https://www.isaramdev.com/" target="_blank" rel="noreferrer"> Isabel Ramirez</a>
          </p>
        </div>
      </section>
    </div>
  );
}

export default App