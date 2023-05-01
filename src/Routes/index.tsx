import { Routes, Route } from "react-router-dom";
import Layout from "../views/Layout";
import Services from "../views/Services";

export default function index() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={'Estoe s lago'} />
        <Route path="services" element={<Services />} />
      </Route>

    </Routes>
  )
}
