import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ImageCarousel = () => {
  return (
    <div style={{ width: '100%', maxWidth: '600px', maxHeight: '25rem', margin: '0 auto' }}>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
      >
        <SwiperSlide>
          <img src="/slideshow/two.jpg" alt="Slide 2" style={{ width: '100%', height: '100%' }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/slideshow/three.jpg" alt="Slide 3" style={{ width: '100%', height: '100%' }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/slideshow/four.png" alt="Slide 4" style={{ width: '100%', height: '100%' }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/slideshow/five.png" alt="Slide 5" style={{ width: '100%', height: '100%' }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/slideshow/six.png" alt="Slide 6" style={{ width: '100%', height: '100%' }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/slideshow/seven.png" alt="Slide 7" style={{ width: '100%', height: '100%' }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/slideshow/eight.png" alt="Slide 8" style={{ width: '100%', height: '100%' }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/slideshow/nine.png" alt="Slide 9" style={{ width: '100%', height: '100%' }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/slideshow/ten.png" alt="Slide 10" style={{ width: '100%', height: '100%' }} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ImageCarousel;