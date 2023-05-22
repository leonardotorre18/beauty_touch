import Carousel from '../components/Carousel'
import Jumbotron from '../components/Jumbotron'

export default function Home() {

  const data: Array<string> = [
    'belly_painting.png',
    'curso_auto_maquillaje.png',
    'curso_cuidados_faciales.png',
    'curso_cuidados_faciales_natural.png',
    'taller_auto_maquillaje.png'
  ]

  return (
    <div>
      <Jumbotron />
      <section className="m-8">
          <h3 className="mb-2 mt-0 text-2xl font-medium leading-tight">Servicios</h3>
        
        <Carousel>
          {
            data.map(url => (
              <div>
                <img src={url} alt="" />
              </div>
            ))
          }
        </Carousel>
      </section>

    </div>
  )
}
