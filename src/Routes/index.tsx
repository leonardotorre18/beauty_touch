import { Routes, Route } from "react-router-dom";
import Layout from "../views/Layout";
import Services from "../views/Services";
import Home from "../views/Home";

export default function index() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="services" element={<Services />} />
      </Route>

    </Routes>
  )
}
