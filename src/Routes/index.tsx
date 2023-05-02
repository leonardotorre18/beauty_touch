import { Routes, Route } from "react-router-dom";
import Layout from "../views/Layout";
import Services from "../views/Services";
import Home from "../views/Home";
import AboutCentral from "../views/AboutCentral";
import AboutPersonal from "../views/AboutPersonal";

export default function index() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="about">
          <Route path="central" element={<AboutCentral />} />
          <Route path="personal" element={<AboutPersonal />} />
        </Route>
      </Route>

    </Routes>
  )
}
