// import { useId } from "react";
import ServicesCard from "../components/ServicesCard";
import data from "../json/services.json";


export default function Services() {

  return (
    <div>
      <h2 className="mb-2 text-4xl font-medium font-MainFont leading-tight text-center mt-4">Servicios</h2>

      <div>

        {/* Sección de Estética Básica */}
        <section className="m-8">
          <h3 className="mb-2 mt-0 text-2xl font-medium leading-tight">Estética Básica</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {
            data.filter(item => item.tag === 'EBásica')
              .map(item => <ServicesCard data={item} key={item._id.$oid} />)
          }
          </div>
        </section>

        {/* Sección de Estética Avanzada */}
        <section className="m-8">
          <h3 className="mb-2 mt-0 text-2xl font-medium leading-tight">Estética Avanzada</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {
            data.filter(item => item.tag === 'EAvanzada')
              .map(item => <ServicesCard data={item} key={item._id.$oid} />)
          }
          </div>
        </section>

        {/* Sección de Cejas (Micro, pelo a pelo) */}
        <section className="m-8">
          <h3 className="mb-2 mt-0 text-2xl font-medium leading-tight">Cejas (Micro, pelo a pelo)</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {
            data.filter(item => item.tag === 'Cejas')
              .map(item => <ServicesCard data={item} key={item._id.$oid} />)
          }
          </div>
        </section>

        {/* Sección de Maquillaje Integral */}
        <section className="m-8">
          <h3 className="mb-2 mt-0 text-2xl font-medium leading-tight">Maquillaje Integral</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {
            data.filter(item => item.tag === 'Integral')
              .map(item => <ServicesCard data={item} key={item._id.$oid} />)
          }
          </div>
        </section>

        {/* Sección de Masajes Estéticos */}
        <section className="m-8">
          <h3 className="mb-2 mt-0 text-2xl font-medium leading-tight">Masajes Estéticos</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {
            data.filter(item => item.tag === 'Masajes')
              .map(item => <ServicesCard data={item} key={item._id.$oid} />)
          }
          </div>
        </section>

      </div>
    </div>
  )
}
