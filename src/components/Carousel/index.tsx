import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function index() {
  return (
    <Swiper
    // modules={[Navigation]}
    modules={[ Navigation, Pagination ]}
    // spaceBetween={50}
    slidesPerView={1}
    breakpoints={{
      640: {
        slidesPerView: 2
      },
      768: {
        slidesPerView: 3
      },
      1024: {
        slidesPerView: 4
      }
    }}
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
  )
}
