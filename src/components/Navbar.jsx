import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // Controla apertura del menú

  return (
    <nav className="bg-transparent fixed w-full top-0 left-0 z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo + nombre */}
        <a href="#inicio" className="flex items-center space-x-3">
          <img src="/logo1.png" className="h-16" alt="Logo" />
          <span className="self-center text-2xl font-semibold text-lime-600"></span>
        </a>

        {/* Botón hamburguesa */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-lime-600 rounded-lg md:hidden hover:bg-transparent focus:outline-none"
          aria-controls="navbar"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Abrir menú</span>
          <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>

        {/* Menú responsive */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } w-full md:block md:w-auto mt-2 md:mt-0`}
          id="navbar"
        >
          <ul className="font-medium flex flex-col md:flex-row md:space-x-8 p-4 md:p-0 rounded-lg 
                         bg-neutral-500 md:bg-transparent shadow-md md:shadow-none text-white">
            <li>
              <a href="#inicio" onClick={() => setIsOpen(false)} className="block py-2 px-3 rounded hover:text-red-400">
                Inicio
              </a>
            </li>
            <li>
              <a href="#sobre-mi" onClick={() => setIsOpen(false)} className="block py-2 px-3 rounded hover:text-red-400">
                Sobre mí
              </a>
            </li>
            <li>
              <a href="#proyectos" onClick={() => setIsOpen(false)} className="block py-2 px-3 rounded hover:text-red-400">
                Proyectos
              </a>
            </li>
            <li>
              <a href="#contacto" onClick={() => setIsOpen(false)} className="block py-2 px-3 rounded hover:text-red-400">
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

