"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const expectedSlides = [
  "/slideshow/one.jpg",
  "/slideshow/two.jpg",
  "/slideshow/three.jpg",
  "/slideshow/four.png",
  "/slideshow/five.png",
];

export default function ImageCarousel() {
  const [validImages, setValidImages] = useState([]);

  useEffect(() => {
    const checkImages = async () => {
      const loadedImages = [];

      for (const src of expectedSlides) {
        try {
          const res = await fetch(src, { method: "HEAD" });

          if (res.ok) {
            loadedImages.push(src);
          }
        } catch (err) {
          // Ignore missing images
        }
      }

      setValidImages(loadedImages);
    };

    checkImages();
  }, []);

  if (validImages.length === 0) {
    return <p>No images available.</p>;
  }

  return (
    <div style={{ width: "100%", maxWidth: "750px", margin: "0 auto" }}>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        loop={validImages.length > 1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
      >
        {validImages.map((src, index) => (
          <SwiperSlide key={index}>
            <div style={{ position: "relative", width: "100%", height: "500px" }}>
              <Image
                src={src}
                alt={`Slide ${index + 1}`}
                fill
                style={{ objectFit: "cover" }}
                sizes="100vw"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
