import './index.css'
import Logo from "./assets/logo192.png"
import LogoFirstLego from "./assets/first-lego-logo.png"
import LogoVertical from "./assets/robocoons-logo2.png"
import Team from "./assets/hero.jpeg"

function App() {
  const year = new Date().getFullYear();
  return (
    <div className='font-serif'>
      <nav id="navbar" className="flex justify-between items-center w-full pl-10 pr-20 text-lg bg-primary text-white bg-[#123456]">
        <img src={Logo} alt="logo" className="h-32 w-auto  mb-[-30px] mt-[-20px]" />
        <ul className="flex space-x-4 md:space-x-8">
          <li className='hover:bg-[#f0a500] hover:text-white p-6' >
            <a href="#welcome-section">Inicio</a>
          </li>
          <li className='hover:bg-[#f0a500] hover:text-white p-6'>
            <a href="#projects">Equipo</a>
          </li>
          <li className='hover:bg-[#f0a500] hover:text-white p-6'>
            <a href="#contact">Robot</a>
          </li>
          <li className='hover:bg-[#f0a500] hover:text-white p-6'>
            <a href="#contact">Investigación</a>
          </li>
          <li>
            <a href="https://drive.google.com/file/d/1zHs7kh_D_7befzZAVY0BcfwB2R5L8w4C/view" target="_blank" rel="noreferrer" className='bg-[#f0a500] hover:bg-[rgba(240,136,0,0.99)]  p-6 flex'>
              Documentación
            </a>
          </li>
        </ul>
        <a href="https://github.com/NeftaliVenancio/Robocoons-FLL-Challenge" className="text-base font-normal text-gray-600 dark:text-gray-300" target="_blank" rel="noreferrer">
          <svg viewBox="0 0 16 16" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg" fill="white">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
          </svg>
        </a>
      </nav>

      <section className="text-center relative overflow-hidden">
        <img src={Team} alt="main" className="block mt-[-90px]" />
        <div className="absolute top-10 left-1/2 transform -translate-x-1/2">
          <img src={LogoVertical} alt="Logo" className="mx-auto" />
        </div>
      </section>


      <section className='m-32 mx-64'>
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

      <section className="flex justify-between mx-10 my-20">
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-7">
          <h2 className="text-3xl text-black mb-4">Objetivo</h2>
          <p className="text-base text-black leading-relaxed">Ser un equipo de alto rendimiento dedicado al diseño de proyectos tecnológicos con la meta de generar un impacto positivo en la comunidad a través del uso de aplicaciones STEM.</p>
          <div className="flex items-center justify-center h-16 w-16 rounded-full mx-auto my-8 bg-black">
            <svg stroke="currentColor" fill="currentColor" viewBox="0 0 24 24" className="h-10 w-10 text-white" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.92 2.38A15.72 15.72 0 0 0 17.5 2a8.26 8.26 0 0 0-6 2.06Q9.89 5.67 8.31 7.27c-1.21-.13-4.08-.2-6 1.74a1 1 0 0 0 0 1.41l11.3 11.32a1 1 0 0 0 1.41 0c1.95-2 1.89-4.82 1.77-6l3.21-3.2c3.19-3.19 1.74-9.18 1.68-9.43a1 1 0 0 0-.76-.73zm-2.36 8.75L15 14.67a1 1 0 0 0-.27.9 6.81 6.81 0 0 1-.54 3.94L4.52 9.82a6.67 6.67 0 0 1 4-.5A1 1 0 0 0 9.39 9s1.4-1.45 3.51-3.56A6.61 6.61 0 0 1 17.5 4a14.51 14.51 0 0 1 2.33.2c.24 1.43.62 5.04-1.27 6.93z">
              </path>
              <circle cx="15.73" cy="8.3" r="2">
              </circle>
              <path d="M5 16c-2 1-2 5-2 5a7.81 7.81 0 0 0 5-2z">
              </path>
            </svg>
          </div>
        </div>

        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-7">
          <h2 className="text-3xl text-black mb-4">Vision</h2>
          <p className="text-base text-black leading-relaxed">Ser un equipo relevante y expandir el área de alcance de nuestros proyectos a un ámbito internacional para el 2024.</p>
          <div className="flex items-center justify-center h-16 w-16 rounded-full mx-auto my-16 bg-black">
            <svg stroke="currentColor" fill="currentColor" viewBox="0 0 24 24" className="h-10 w-10 text-white" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path>
            </svg>
          </div>
        </div>

        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-7">
          <h2 className="text-3xl text-black mb-4">Alcance</h2>
          <p className="text-base text-black leading-relaxed">
            Desde febrero de 2001 iniciamos espacios donde no sólo los niños, sino también los jóvenes y adultos pueden trabajar desarrollando ideas poderosas aprendiendo con principios aplicados tanto a la ciencia e ingeniería, como física y matemáticas.
          </p>
          <div className="flex items-center justify-center h-16 w-16 rounded-full mx-auto my-6 bg-black">
            <svg stroke="currentColor" fill="currentColor" viewBox="0 0 512 512" className="h-10 w-10 text-white" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M414.39 97.74A224 224 0 1097.61 414.52 224 224 0 10414.39 97.74zM64 256.13a191.63 191.63 0 016.7-50.31c7.34 15.8 18 29.45 25.25 45.66 9.37 20.84 34.53 15.06 45.64 33.32 9.86 16.21-.67 36.71 6.71 53.67 5.36 12.31 18 15 26.72 24 8.91 9.08 8.72 21.52 10.08 33.36a305.36 305.36 0 007.45 41.27c0 .1 0 .21.08.31C117.8 411.13 64 339.8 64 256.13zm192 192a193.12 193.12 0 01-32-2.68c.11-2.71.16-5.24.43-7 2.43-15.9 10.39-31.45 21.13-43.35 10.61-11.74 25.15-19.68 34.11-33 8.78-13 11.41-30.5 7.79-45.69-5.33-22.44-35.82-29.93-52.26-42.1-9.45-7-17.86-17.82-30.27-18.7-5.72-.4-10.51.83-16.18-.63-5.2-1.35-9.28-4.15-14.82-3.42-10.35 1.36-16.88 12.42-28 10.92-10.55-1.41-21.42-13.76-23.82-23.81-3.08-12.92 7.14-17.11 18.09-18.26 4.57-.48 9.7-1 14.09.68 5.78 2.14 8.51 7.8 13.7 10.66 9.73 5.34 11.7-3.19 10.21-11.83-2.23-12.94-4.83-18.21 6.71-27.12 8-6.14 14.84-10.58 13.56-21.61-.76-6.48-4.31-9.41-1-15.86 2.51-4.91 9.4-9.34 13.89-12.27 11.59-7.56 49.65-7 34.1-28.16-4.57-6.21-13-17.31-21-18.83-10-1.89-14.44 9.27-21.41 14.19-7.2 5.09-21.22 10.87-28.43 3-9.7-10.59 6.43-14.06 10-21.46 1.65-3.45 0-8.24-2.78-12.75q5.41-2.28 11-4.23a15.6 15.6 0 008 3c6.69.44 13-3.18 18.84 1.38 6.48 5 11.15 11.32 19.75 12.88 8.32 1.51 17.13-3.34 19.19-11.86 1.25-5.18 0-10.65-1.2-16a190.83 190.83 0 01105 32.21c-2-.76-4.39-.67-7.34.7-6.07 2.82-14.67 10-15.38 17.12-.81 8.08 11.11 9.22 16.77 9.22 8.5 0 17.11-3.8 14.37-13.62-1.19-4.26-2.81-8.69-5.42-11.37a193.27 193.27 0 0118 14.14c-.09.09-.18.17-.27.27-5.76 6-12.45 10.75-16.39 18.05-2.78 5.14-5.91 7.58-11.54 8.91-3.1.73-6.64 1-9.24 3.08-7.24 5.7-3.12 19.4 3.74 23.51 8.67 5.19 21.53 2.75 28.07-4.66 5.11-5.8 8.12-15.87 17.31-15.86a15.4 15.4 0 0110.82 4.41c3.8 3.94 3.05 7.62 3.86 12.54 1.43 8.74 9.14 4 13.83-.41a192.12 192.12 0 019.24 18.77c-5.16 7.43-9.26 15.53-21.67 6.87-7.43-5.19-12-12.72-21.33-15.06-8.15-2-16.5.08-24.55 1.47-9.15 1.59-20 2.29-26.94 9.22-6.71 6.68-10.26 15.62-17.4 22.33-13.81 13-19.64 27.19-10.7 45.57 8.6 17.67 26.59 27.26 46 26 19.07-1.27 38.88-12.33 38.33 15.38-.2 9.81 1.85 16.6 4.86 25.71 2.79 8.4 2.6 16.54 3.24 25.21a158 158 0 004.74 30.07A191.75 191.75 0 01256 448.13z"></path>
            </svg>
          </div>
        </div>
      </section>

      <section className="flex justify-between items-center px-10 bg-[#123456] text-white">
        <img src={Logo} alt="logo" className="w-32 h-auto" />
        <img src={LogoFirstLego} alt="logo" className="w-32 h-auto" />
        <p className="mx-2 my-1">
          {year} © Robocoons. All Rights Reserved.
        </p>
        <p>
          © Created by <a href="https://www.isaramdev.com/" target="_blank" rel="noreferrer"> Isabel Ramirez</a>
        </p>
        <a href="https://github.com/IsaRamDev" className="text-base font-normal text-gray-600 dark:text-gray-300" target="_blank" rel="noreferrer">
          <svg fill='white' viewBox="0 0 16 16" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
          </svg>
        </a>
        <a href="https://www.linkedin.com/in/isaramdev/" className="text-base font-normal text-gray-600 dark:text-gray-300" target="_blank" rel="noreferrer">
          <svg fill='white' viewBox="0 0 16 16" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"></path>
          </svg>
        </a>
      </section>
    </div>
  );
}

export default App