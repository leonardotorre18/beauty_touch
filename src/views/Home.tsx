// import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

export default function Home() {
  return (
    <div>
      <div className='w-full max-h-screen'>
        <video itemType="video/mp4" className='w-full object-cover' src="/intro-presentacion.mp4" loop autoPlay muted />
      </div>

      <Swiper
        // spaceBetween={50}
        slidesPerView={3}
        loop={true}
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
    </div>
  )
}
