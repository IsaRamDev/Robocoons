// Importar imágenes
import Logo from "./assets/logo192.png";
import LogoFirstLego from "./assets/first-lego-logo.png";
import LogoVertical from "./assets/robocoons-logo2.png";
import Team from "./assets/hero.jpeg";
import Coach1 from "./assets/mentor-1.jpeg";
import Coach2 from "./assets/mentor-2.jpeg";
import Coach3 from "./assets/mentor-3.jpeg";
import Coach4 from "./assets/mentor-4.jpeg";
import Coach5 from "./assets/mentor-5.jpeg";
import Member1 from "./assets/JP.jpeg";
import Member2 from "./assets/Scarlett.jpeg";
import Member3 from "./assets/cuauh.jpeg";
import Member4 from "./assets/camila.jpeg";
import Member5 from "./assets/andre.jpeg";
import Member6 from "./assets/KAI.jpeg";
import Member7 from "./assets/jesus-zuñiga.jpeg";
import Member8 from "./assets/jesus.jpeg";
import Member9 from "./assets/alejandro.jpg";
import Member10 from "./assets/Mauricio.jpg";
import Inv1 from "./assets/investigation-1.jpg"
import Inv2 from "./assets/investigation-2.jpg"
import Inv3 from "./assets/investigation-3.jpg"
import Inv4 from "./assets/investigation-4.jpg"
import Robot1 from "./assets/robot-1.jpeg"
import Robot2 from "./assets/robot-2.jpeg"
import Robot3 from "./assets/robot-3.jpg";
import Robot4 from "./assets/robot-4.jpg"

const data = {
  logos: {
    main: Logo,
    firstLego: LogoFirstLego,
    vertical: LogoVertical,
  },
  teamImage: Team,
  timelineData: [
    {
      date: "Feb, 2002",
      title: "El origen",
      main: "Se inició a estudiar la plataforma en Septiembre del 2001.",
      description: "En Febrero del 2002, el taller de Robótica empezó como el primer taller vespertino impartido por Profesores en el Colegio Las Hayas.",
    },
    {
      date: "2004",
      title: "FLL en México",
      main: "Primera competencia de FLL a México",
      description: "En el 2004 llega la primera competencia de FLL a México gracias a Bárbara Gómez de Navarro, lo que nos permitió participar.",
    },
    {
      date: "May, 2008",
      title: "Competencias de robótica",
      main: "NanoQuest, No Limits y Ocean Odyssey.",
      description: "Con ayuda de la Maestra Lula y el Maestro Carlos, el equipo de &quot;Robocoot; comenzó a participar en distintas competencias de robótica, como &quot;NanoQuest&quot;, &quot;No Limits&quot; y &quot;Ocean Odyssey&quot;.",
    },
    {
      date: "Jun, 2010",
      title: "Equipos",
      main: "Formanción de distintos equipos.",
      description: "A través de los años, distintos estudiantes y profesores se han posicionado en podios Regionales, Naciones e Internacionales, formando así distintos equipos.",
    },
  ],
  coaches: [
    { id: 1, image: Coach1, name: "Neftalí", role: "Head Coach" },
    { id: 2, image: Coach2, name: "Ivanka", role: "Coach" },
    { id: 3, image: Coach3, name: "Pamela", role: "Mentor" },
    { id: 4, image: Coach4, name: "Karem", role: "Mentor" },
    { id: 5, image: Coach5, name: "Alejandra", role: "Mentor" },
  ],
  values: [
    {
      id: 'objetivo',
      title: 'Objetivo',
      description: 'Ser un equipo de alto rendimiento dedicado al diseño de proyectos tecnológicos con la meta de generar un impacto positivo en la comunidad a través del uso de aplicaciones STEM.'
    },
    {
      id: 'vision',
      title: 'Vision',
      description: 'Ser un equipo relevante y expandir el área de alcance de nuestros proyectos a un ámbito internacional para el 2024.'
    },
    {
      id: 'verifiedCompany',
      title: 'Verified Company',
      description: 'Desde febrero de 2001 iniciamos espacios donde no sólo los niños, sino también los jóvenes y adultos pueden trabajar desarrollando ideas poderosas aprendiendo con principios aplicados tanto a la ciencia e ingeniería, como física y matemáticas.'
    },
  ],
  members: [
    { id: 1, image: Member1, name: "José Pablo", role: "Capitan de equipo" },
    { id: 2, image: Member2, name: "Scarlett", role: "Operadora / Administradora" },
    { id: 3, image: Member3, name: "Cuauhtemoc", role: "Operador / Diseño - Creativo" },
    { id: 4, image: Member4, name: "Camila", role: "Operadora / Programadora" },
    { id: 5, image: Member5, name: "André", role: "Operador / Programador" },
    { id: 6, image: Member6, name: "Rodrigo", role: "Capitán de Proyecto de Innovación / Investigador" },
    { id: 7, image: Member7, name: "Jesús Armando", role: "Constructor" },
    { id: 8, image: Member8, name: "Jesús Ruiz", role: "Estratega" },
    { id: 9, image: Member9, name: "Alejandro", role: "Programador" },
    { id: 10, image: Member10, name: "Mauricio", role: "Constructor" },
  ],
  investigations: [
    { id: 1, image: Inv1, title: "Problemática", description: "Las PTAR consumen mucha energía eléctrica externa de fuentes no renovables y contaminantes, lo que representa una carga económica significativa." },
    { id: 2, image: Inv2, title: "Investigación", description: "Se investigaron sitios y expertos en ecología, energía, desarrollo ambiental, investigación e innovación." },
    { id: 3, image: Inv3, title: "Solución", description: "Crear una minicentral hidroeléctrica de tipo agua fluyente que reduzca los costos por consumo de electricidad y promueva una estrategia sustentable para la PTAR y la comunidad." },
    { id: 4, image: Inv4, title: "Desarrollo", description: "Mediante la convergencia de las experiencias obtenidas de la investigación, se realizó la redacción de nuestro artículo de divulgación." },
  ],
  robots: [
    { id: 1, image: Robot1, name: "Base motriz avanzada", description: "Construida con el manual proporcionado por LEGO, con el propósito de probar las propuestas de código y misiones proporcionados por FIRST Lego League (2 modelos construidos)." },
    { id: 2, image: Robot2, name: "Oaxaco", description: "Construido tomando como estructura inicial la base motriz avanzada, pero fue modificado para adaptar las herramientas de forma sencilla, no hace uso de sensores." },
    { id: 3, image: Robot3, name: "CHILANGOTE", description: "Construido para la fase Regional tomando en cuenta las necesidades del código, incorporando distintas adaptaciones que le permiten ser fácilmente adaptado a llevar a cabo cualquier misión." },
    { id: 4, image: Robot4, name: "Chilangote 2.0", description: "Construido para la fase Nacional. Versión compacta del CHILANGOTE que permite mayor rango de movilidad y versatilidad (2 modelos construidos)." },
  ],
  socialLinks: {
    github: "https://github.com/IsaRamDev",
    linkedin: "https://www.linkedin.com/in/isaramdev/",
    portfolio: "https://www.isaramdev.com/",
    robocoon: {
      github: "https://github.com/NeftaliVenancio/Robocoons-FLL-Challenge",
      pdf: "https://drive.google.com/file/d/1zHs7kh_D_7befzZAVY0BcfwB2R5L8w4C/view",
    }
  },
  year: new Date().getFullYear(),
};

export default data;
