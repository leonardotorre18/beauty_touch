import React from "react";
import {BiMenu} from "react-icons/bi"
import {Link} from "react-router-dom"

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  const toggleNavbar = () => setNavbarOpen(!navbarOpen)
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-MainColor mb-3 shadow">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
            >
              Beauty Touch
            </a>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={toggleNavbar}
            >
              <BiMenu />
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <Link to="/" className="px-3 py-1 lg:py-2 flex items-center uppercase font-bold leading-snug text-white hover:opacity-75">
                  Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/services" className="px-3 py-1 lg:py-2 flex items-center uppercase font-bold leading-snug text-white hover:opacity-75">
                  Servicios
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="px-3 py-1 lg:py-2 flex items-center uppercase font-bold leading-snug text-white hover:opacity-75">
                  Sobre Nosotros
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}