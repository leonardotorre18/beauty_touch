import {Outlet} from "react-router-dom"
import Navbar from "../components/Layout/Navbar"
import Footer from "../components/Layout/Footer"

export default function Layout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}
