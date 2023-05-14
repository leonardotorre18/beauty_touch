import Carousel from '../components/Carousel';

export default function AboutCentral() {
  return (
    <section className='p-4'>
      <h2 className="mb-2 text-4xl font-medium font-MainFont leading-tight text-center mt-4">Sobre Nuestro Personal</h2>
      <p className='py-3'>Es un Centro de Belleza Integral, porque abarca todo lo que tiene que ver con la imagen personal. Por eso cuenta con servicios profesionales como:</p>

      <Carousel />

    </section>
  )
}
