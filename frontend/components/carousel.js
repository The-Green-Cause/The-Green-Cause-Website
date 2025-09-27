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
              src="/slideshow/three.jpg"
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
              src="/slideshow/six.png"
              alt="Slide 6"
              layout="fill"
              objectFit="cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ position: 'relative', width: '100%', height: '500px' }}>
            <Image
              src="/slideshow/seven.png"
              alt="Slide 7"
              layout="fill"
              objectFit="cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ position: 'relative', width: '100%', height: '500px' }}>
            <Image
              src="/slideshow/eight.png"
              alt="Slide 8"
              layout="fill"
              objectFit="cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ position: 'relative', width: '100%', height: '500px' }}>
            <Image
              src="/slideshow/nine.png"
              alt="Slide 9"
              layout="fill"
              objectFit="cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ position: 'relative', width: '100%', height: '500px' }}>
            <Image
              src="/slideshow/ten.png"
              alt="Slide 10"
              layout="fill"
              objectFit="cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ position: 'relative', width: '100%', height: '500px' }}>
            <Image
              src="/slideshow/eleven.jpg"
              alt="Slide 11"
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