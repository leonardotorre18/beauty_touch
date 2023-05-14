import React from "react";
import {BiMenu} from "react-icons/bi"
import {Link} from "react-router-dom"

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen)
  const showDropdown = () => setDropdownOpen(true)
  const hiddeDropdown = () => setDropdownOpen(false)
  const toggleNavbar = () => setNavbarOpen(!navbarOpen);
  return (
    <>
      <nav className="sticky top-0 left-0 z-50 flex flex-wrap items-center justify-between bg-MainColor shadow">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="font-MainFont text-3xl tracking-wider font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap text-white"
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
              (navbarOpen ? "flex" : " hidden")
            }
          >
            <ul className="flex flex-col lg:flex-row list-none font-MainFont lg:ml-auto">
              <li className="nav-item" onClick={toggleNavbar}>
                <Link to="/" className="px-3 py-3 lg:py-2 flex text-3xl tracking-wider items-center font-bold leading-snug text-white hover:opacity-75">
                  Inicio
                </Link>
              </li>
              <li className="nav-item" onClick={toggleNavbar}>
                <Link to="/services" className="px-3 py-3 lg:py-2  text-3xl tracking-wider flex items-center font-bold leading-snug text-white hover:opacity-75">
                  Servicios
                </Link>
              </li>
              <li className="nav-item" onClick={toggleDropdown} onMouseEnter={showDropdown}>
                <div className="px-3 py-3 lg:py-2  text-3xl tracking-wider flex items-center font-bold leading-snug text-white hover:opacity-75 cursor-pointer">
                  Sobre Nosotros
                </div>
                <div className={" w-auto bg-SecondColor flex flex-col p-3 absolute right-0" + (dropdownOpen ? "flex" : " hidden")} onMouseLeave={hiddeDropdown}>
                  <Link 
                    to="/about/personal"
                    className="px-3 py-3 lg:py-2  text-3xl tracking-wider flex items-center font-bold leading-none text-white hover:opacity-75"
                    onClick={() => {toggleNavbar();toggleDropdown()}}
                  >
                      Personal Capacitado
                  </Link>
                  <Link 
                    to="/about/central"
                    className="px-3 py-3 lg:py-2  text-3xl tracking-wider flex items-center font-bold leading-none text-white hover:opacity-75"
                    onClick={() => {toggleNavbar();toggleDropdown()}}
                  >
                      Ubicación central
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}