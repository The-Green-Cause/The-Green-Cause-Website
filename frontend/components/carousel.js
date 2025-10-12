import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ImageCarousel = () => {
  return (
    <div style={{ width: '100%', maxWidth: '750px', maxHeight: '32rem', margin: '0 auto' }}>
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
          <div style={{ position: 'relative', width: '100%', height: '500px' }}>
            <Image
              src="/slideshow/one.jpg"
              alt="Slide 1"
              layout="fill"
              objectFit="cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ position: 'relative', width: '100%', height: '500px' }}>
            <Image
              src="/slideshow/two.jpg"
              alt="Slide 2"
              layout="fill"
              objectFit="cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ position: 'relative', width: '100%', height: '500px' }}>
            <Image
              src="/slideshow/three.png"
              alt="Slide 3"
              layout="fill"
              objectFit="cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ position: 'relative', width: '100%', height: '500px' }}>
            <Image
              src="/slideshow/four.png"
              alt="Slide 4"
              layout="fill"
              objectFit="cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ position: 'relative', width: '100%', height: '500px' }}>
            <Image
              src="/slideshow/five.jpg"
              alt="Slide 5"
              layout="fill"
              objectFit="cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </SwiperSlide>
                <SwiperSlide>
          <div style={{ position: 'relative', width: '100%', height: '500px' }}>
            <Image
              src="/slideshow/six.png"
              alt="Slide 6"
              layout="fill"
              objectFit="cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ImageCarousel;