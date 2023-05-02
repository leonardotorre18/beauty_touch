import React from 'react'
import { Link } from "react-router-dom"

export default function index() {

  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen)
  const showDropdown = () => setDropdownOpen(true)
  const hiddeDropdown = () => setDropdownOpen(false)
  return (
    
    <footer>
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
            <div className="sm:flex sm:items-center sm:justify-between">
            <a
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-MainColor"
            >
              Beauty Touch
            </a>
                <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-MainColor">
                  <Link to="/" className="mr-4 hover:opacity-75 md:mr-6 ">Inicio</Link>
                  <Link to="/" className="mr-4 hover:opacity-75 md:mr-6 ">Servicios</Link>
                  <div onMouseEnter={showDropdown} onClick={toggleDropdown} className='relative'>
                    <div className={" w-auto bg-SecondColor flex flex-col p-3 absolute bottom-6 z-10 " + (dropdownOpen ? "flex" : "hidden")} onMouseLeave={hiddeDropdown}>
                      <Link 
                        to="/services"
                        className="px-3 py-3 lg:py-2 flex items-center uppercase font-bold leading-snug text-white hover:opacity-75"
                        onClick={toggleDropdown}
                      >
                        Personal Capacitado
                      </Link>
                      <Link 
                        to="/services"
                        className="px-3 py-3 lg:py-2 flex items-center uppercase font-bold leading-snug text-white hover:opacity-75"
                        onClick={toggleDropdown}
                      >
                        Ubicación central
                      </Link>
                    </div>
                    <div className="mr-4 hover:opacity-75 md:mr-6 cursor-pointer relative">
                      Sobre Nosotros
                    </div>
                  </div>
                </ul>
            </div>
            <hr className="my-6 border-SecondColor sm:mx-auto lg:my-8" />
            <span className="block text-sm border- text-SecondColor sm:text-center">
              © 2023 <a href="https://leonardotorre.netlify.app" target="_bank" className="hover:underline">LeonardoTorre™</a>. All Rights Reserved.
            </span>
        </div>
    </footer>
  )
}
