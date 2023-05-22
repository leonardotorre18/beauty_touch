// import React from 'react'
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination } from 'swiper';
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


// Import Swiper styless
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

export default function index(
  {children}
  : {children?: React.ReactNode } )
{

  return (
    <Carousel responsive={{
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    }}>

    { children ?
      children : (
      [1,2,3,4,5,6].map(id => (
        <div key={id}>
          <img src="https://thumbs.dreamstime.com/b/masaje-con-el-massager-65389651.jpg" alt="" />
        </div>
      ))
    )}

    </Carousel>
  )
  // return (
  //   <Swiper
  //   // modules={[Navigation]}
  //   modules={[ Navigation, Pagination ]}
  //   // spaceBetween={50}
  //   slidesPerView={1}
  //   breakpoints={{
  //     640: {
  //       slidesPerView: 2
  //     },
  //     768: {
  //       slidesPerView: 3
  //     },
  //     1024: {
  //       slidesPerView: 4
  //     }
  //   }}
  //   loop={true}
  //   pagination={{clickable:true}}
  //   navigation
  //   // onSlideChange={() => console.log('slide change')}
  //   // onSwiper={(swiper) => console.log(swiper)}
  // >
  //   {
  //     [1,2,3,4,5,6].map(id => (
  //       <SwiperSlide key={id}>
  //         <img src="https://thumbs.dreamstime.com/b/masaje-con-el-massager-65389651.jpg" alt="" />
  //       </SwiperSlide>
  //     ))
  //   }
  // </Swiper>
  // )
}
