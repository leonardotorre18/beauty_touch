import ServicesCard from "../components/ServicesCard";
import data from "../json/services.json";

export default function Services() {
  return (
    <div>
      <h2 className="mb-2 text-4xl font-medium leading-tight text-center mt-4">Servicios</h2>

      <div>

      {
        data.map(section => (
          <section className="m-8">
            <h3 className="mb-2 mt-0 text-2xl font-medium leading-tight">{section.title}</h3>

            <div className=" grid grid-cols-3">
            {
              section.items.map(item => <ServicesCard data={item} key={item.id} />)
            }
            </div>
          </section>
        ))
      }

      </div>
      {/* <ServicesCard /> */}
    </div>
  )
}
