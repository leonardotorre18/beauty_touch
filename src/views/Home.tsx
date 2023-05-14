import Casrousel from '../components/Carousel'
import Jumbotron from '../components/Jumbotron'

export default function Home() {
  return (
    <div>
      <Jumbotron />
      <section className="m-8">
          <h3 className="mb-2 mt-0 text-2xl font-medium leading-tight">Servicios</h3>
        
        <Casrousel />
      </section>

    </div>
  )
}
