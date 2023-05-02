// import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function Home() {
  return (
    <div>
      <div className='w-full max-h-screen bg-black'>
        <video itemType="video/mp4" className='w-full object-cover' src="/intro-presentacion.mp4" loop autoPlay muted />
      </div>
      <section className="m-8">
        <h3 className="mb-2 mt-0 text-2xl font-medium leading-tight">Servicios</h3>
        
        <Swiper
          // modules={[Navigation]}
          modules={[ Navigation, Pagination ]}
          // spaceBetween={50}
          slidesPerView={3}
          loop={true}
          pagination={{clickable:true}}
          navigation
          // onSlideChange={() => console.log('slide change')}
          // onSwiper={(swiper) => console.log(swiper)}
        >
          {
            [1,2,3,4,5,6].map(id => (
              <SwiperSlide key={id}>
                <img src="https://thumbs.dreamstime.com/b/masaje-con-el-massager-65389651.jpg" alt="" />
              </SwiperSlide>
            ))
          }
        </Swiper>
      </section>

    </div>
  )
}
