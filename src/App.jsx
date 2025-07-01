import Navbar from "./components/Navbar";
import { useState } from "react"; // 👈 Necesario para el botón "Leer más"

function App() {
   const [mostrarMasLaboral, setMostrarMasLaboral] = useState(false);
const [mostrarMasPremedic, setMostrarMasPremedic] = useState(false);
const [mostrarMasActualidad, setMostrarMasActualidad] = useState(false); // 👈 Para controlar el botón de esta sección

// 👈 Estado para mostrar texto adicional

  return (
    <div>
      {/* 🔹 MENÚ DE NAVEGACIÓN */}
      <Navbar />

      {/* 🔹 SECCIÓN DE INICIO CON IMAGEN DE FONDO */}
      <section
        id="inicio"
        className="h-[200px] bg-cover bg-center flex items-center justify-center text-slate-600"
        style={{ backgroundImage: "url('/fondo2.png')" }}
      >
        <div className="text-center px-4">
          <h1 className="text-4xl font-bold mb-4"></h1>
        </div>
      </section>

      {/* 🔹 SECCIÓN SOBRE MÍ */}
      <section id="sobre-mi" className="bg-black text-white py-12 px-4">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8">
          {/* Imagen */}
          <img
            className="rounded-r-full w-48 h-48 object-cover"
            src="/yoimagen.png"
            alt="Tu foto"
          />

          {/* Texto al costado */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold mb-4">Hola, soy Gabriel Capocasale</h2>
            <p className="text-lg leading-relaxed">
              Desarrollador frontend con conocimientos en React, JavaScript, HTML, CSS y QA. Manejo fluido de Visual Studio Code y GitHub. Me enfoco en crear interfaces limpias, responsivas y funcionales, y en seguir creciendo profesionalmente dentro del mundo del desarrollo web.
            </p>
          </div>
        </div>
      </section>

      {/* 🔹 TARJETA DE EXPERIENCIA LABORAL */}
      {/* 🔹 SECCIÓN DE EXPERIENCIA LABORAL + PREMEDIC */}
<section className="bg-zinc-900 text-white py-12 px-4">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 justify-center items-start">

    {/* TARJETA 1: EXPERIENCIA LABORAL GENERAL */}
    <div className="max-w-sm w-full p-6 bg-zinc-800 border border-zinc-700 rounded-lg shadow-sm">
      <h5 className="mb-4 text-2xl font-bold tracking-tight">Mi expectativa laboral</h5>
      <p className="mb-3 text-gray-300">
       Me gusta trabajar en equipo y contribuir a un buen clima laboral. Busco nuevas oportunidades que me permitan seguir creciendo como programador y sumarme a proyectos que representen un verdadero desafío profesional.
      </p>

   {mostrarMasLaboral && (
  <p className="mb-4 text-gray-400">
     Busco formar parte de un equipo donde pueda aprender de otros desarrolladores, colaborar activamente y enfrentar nuevos retos. Me entusiasma sumarme a proyectos que tengan impacto real y donde pueda aplicar mis habilidades técnicas al mismo tiempo que desarrollo nuevas. Creo en la mejora continua y en la importancia de adaptarse a los cambios del entorno tecnológico.
  </p>
)}

<button
  onClick={() => setMostrarMasLaboral(!mostrarMasLaboral)}
  className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
>
  {mostrarMasLaboral ? "Leer menos" : "Leer más"}
  <svg
    className="w-4 h-4 ml-2 transition-transform"
    style={{ transform: mostrarMasLaboral ? "rotate(180deg)" : "rotate(0deg)" }}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 14 10"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M1 5h12m0 0L9 1m4 4L9 9"
    />
  </svg>
</button>
     </div>

    {/* TARJETA 2: EXPERIENCIA EN PREMEDIC */}
    <div className="max-w-sm w-full p-6 bg-zinc-800 border border-zinc-700 rounded-lg shadow-sm">
      <h5 className="mb-4 text-2xl font-bold tracking-tight">Experiencia empresarial</h5>
      <p className="mb-3 text-gray-300">
        Trabajé 3 años en Premedic. Comencé como cadete y luego me integré al área de programación.
      </p>

{mostrarMasPremedic && (
  <p className="mb-4 text-gray-400">
    Durante el primer año realicé tareas administrativas y de mensajería. Posteriormente fui incorporado al equipo de QA, donde comencé a involucrarme en el mundo del desarrollo de software. Participé en pruebas, control de calidad y revisión de funcionalidades. A medida que avanzaba, fui adquiriendo conocimientos de programación, aprendiendo herramientas como Visual Studio Code, Git, y metodologías ágiles. Esta experiencia despertó mi vocación por la programación, y gracias al trabajo en equipo y la formación interna, logré formarme como desarrollador.Anteriormente trabaje en empresas como Yenny el Ateneo donde me destacaba en el sector de ventas.
  </p>
)}

<button
  onClick={() => setMostrarMasPremedic(!mostrarMasPremedic)}
  className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
>
  {mostrarMasPremedic ? "Leer menos" : "Leer más"}
  <svg
    className="w-4 h-4 ml-2 transition-transform"
    style={{ transform: mostrarMasPremedic ? "rotate(180deg)" : "rotate(0deg)" }}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 14 10"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M1 5h12m0 0L9 1m4 4L9 9"
    />
  </svg>
</button>

    </div>
      </div>
  </section>


{/* 🔹 SECCIÓN DE PROYECTOS */}
<section id="proyectos" className="bg-gray-700 text-white py-12 px-4">

  {/* 🔹 TÍTULO DE LA SECCIÓN */}
  <div className="text-center mb-10">
    <h2 className="text-3xl font-bold">Mis proyectos destacados</h2>
    <p className="text-slate-200 mt-2">Algunos de los trabajos que realicé recientemente</p>
  </div>

  {/* 🔹 CONTENEDOR DE LAS TARJETAS */}
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center items-stretch gap-6 flex-wrap">

    {/* TARJETA 1 */}
    <a href="https://www.elyeite.com.ar/"target="_blank" rel="noopener noreferrer" className="flex flex-col items-center bg-gray-700 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-black">
      <img
        className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
        src="/proyecto1.png"
        alt="Imagen del proyecto 1"
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight">www.elyeite.com.ar</h5>
        <p className="mb-3 font-normal">"Sitio web desarrollado con HTML, CSS , totalmente responsive y optimizado para dispositivos móviles. El proyecto presenta la casa de alquiler ‘El Yeite’ con diseño claro, secciones informativas y enlaces a contacto directo."</p>
      </div>
    </a>

    {/* TARJETA 2 */}
    <a href="https://matafuegosasuncion.com/"target="_blank" rel="noopener noreferrer" className="flex flex-col items-center bg-gray-700 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-black">
      <img
        className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
        src="/proyecto2.png"
        alt="Imagen del proyecto 2"
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight">matafuegosasuncion.com</h5>
        <p className="mb-3 font-normal">"Página institucional creada con HTML, CSS , con diseño responsive y navegación sencilla. Presenta los servicios de seguridad y mantenimiento ofrecidos, junto a información de contacto accesible desde cualquier dispositivo."</p>
      </div>
    </a>

    {/* TARJETA 3 */}
    <a href="https://gbdstudio1.github.io/invitacion-violeta/" target="_blank" rel="noopener noreferrer"
  className="flex flex-col items-center bg-gray-700 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-black">
       <img
        className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
        src="/proyecto3.png"
        alt="Imagen del proyecto 3"
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight">invitacion digital</h5>
        <p className="mb-3 font-normal">"Invitación interactiva desarrollada con HTML, CSS . Incluye imagen destacada, animaciones suaves y un diseño responsive pensado para compartir fácilmente por WhatsApp o redes sociales."</p>
      </div>
    </a>

  </div>
</section>


{/* 🔹 SECCIÓN: MI ACTUALIDAD */}
<section id="actualidad" className="bg-gray-400 text-gray-900 py-12 px-4">
  <div className="max-w-6xl mx-auto">

    {/* 🔹 TÍTULO DE LA SECCIÓN */}
    <div className="text-center mb-10">
      <h2 className="text-3xl font-bold">Mi actualidad</h2>
      <p className="text-zinc-900 mt-2">En qué estoy trabajando y aprendiendo hoy</p>
    </div>

    {/* 🔹 TARJETA DE ACTUALIDAD */}
    <div className="max-w-sm bg-white border border-gray-300 rounded-lg shadow-sm mx-auto">
      <img className="rounded-t-lg" src="/actualidad.png" alt="Imagen ilustrativa" />
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Mi presente profesional</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Actualmente trabajo de forma freelance creando sitios web personalizados, adaptados a las necesidades de cada cliente.
        </p>

        {mostrarMasActualidad && (
          <p className="mb-3 font-normal text-gray-500">
            Además de mi trabajo freelance, me encuentro en constante aprendizaje, explorando nuevas áreas del desarrollo y profundizando en conceptos avanzados. Esta etapa de formación la complemento con proyectos propios, que me permiten aplicar lo que voy aprendiendo de forma práctica, consolidar conocimientos y ampliar mis capacidades como desarrollador. Mi objetivo es seguir creciendo profesionalmente y estar preparado para enfrentar nuevos desafíos en el mundo del desarrollo web.
          </p>
        )}

        <button
          onClick={() => setMostrarMasActualidad(!mostrarMasActualidad)}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
        >
          {mostrarMasActualidad ? "Leer menos" : "Leer más"}
          <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>
        </button>
      </div>
    </div>

  </div>
</section>





{/* 🔹 PIE DE PÁGINA / FOOTER */}
<footer id="contacto" className="bg-slate-800 dark:bg-white">
  <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
    
    <div className="md:flex md:justify-between">

      {/* 🔹 LOGO Y NOMBRE */}
      <div className="mb-6 md:mb-0">
        <a href="#" className="flex items-center">
          {/* 🔸 ACA: Reemplazá la ruta de imagen por tu logo */}
          <img src="/yoimagen.png" className="h-8 me-3" alt="Logo GBD" />
          {/* 🔸 ACA: Reemplazá por el nombre de tu marca */}
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">G.Capocasale</span>
        </a>
      </div>

      {/* 🔹 INFORMACIÓN DE CONTACTO */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Contacto</h2>
          <ul className="text-white dark:text-gray-400 font-medium">
            {/* 🔸 ACA: Cambiá por tu mail */}
            <li className="mb-2">
              Email: <a href="mailto:gbd.dev@gmail.com" className="hover:underline">g.capocasale10@gmail.com</a>
            </li>
            {/* 🔸 ACA: Cambiá por tu número real de WhatsApp */}
            <li>
              WhatsApp: <a href="https://wa.me/541131889692" className="hover:underline">+54 11-3188-9692</a>
            </li>
          </ul>
        </div>

        {/* 🔹 REDES SOCIALES OPCIONALES */}
        <div>
          <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Redes</h2>
          <ul className="text-white dark:text-white font-medium">
            {/* 🔸 ACA: Agregá tus redes si querés */}
            <li className="mb-2">
              GitHub: <a href="https://github.com/gbdstudio1" className="hover:underline">github.com/gbd.studio</a>
            </li>
            <li>
              LinkedIn: <a href="//www.linkedin.com/in/gabriel-capocasale-b837a7369/" className="hover:underline">//www.linkedin.com/in/gabriel-capocasale</a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    {/* 🔹 LÍNEA DIVISORIA + COPYRIGHT */}
    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-white lg:my-8" />
    <div className="sm:flex sm:items-center sm:justify-between">
      <span className="text-sm text-white sm:text-center dark:text-white">
        © 2025 <span className="font-semibold">GBD</span>. Todos los derechos reservados.
      </span>
    </div>
  </div>
</footer>




 </div>
  );
}

export default App;
