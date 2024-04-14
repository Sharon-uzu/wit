import React from 'react';
import slide1 from '../Assets/Artboard-1-copy-31692025303.png'
import slide2 from '../Assets/kcz3r44k1693914332.png';
import slide3 from '../Assets/Artboard-1-copy-41692025267.png';
import slide4 from '../Assets/blob1675071157.png';
import slide5 from '../Assets/blob1675071213.png';

import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from 'swiper/react';

const Slider = () => {
  return (
    <div className='slider'>
        <Swiper
        // install Swiper modules
        modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        style={{ zIndex: 1 }}
      >
        <SwiperSlide className='slide'>
          <img src={slide1} alt="" className=" w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" className="w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" className="w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" className="w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="" className="w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" className="w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide1} alt="" className="w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" className="w-full" />
        </SwiperSlide>
      </Swiper>


      
        

    </div>
  )
}

export default Slider