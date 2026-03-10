"use client";
import React, { useEffect, useState, useCallback, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const expectedSlides = [
  "/slideshow/one.jpg",
  "/slideshow/two.jpg",
  "/slideshow/three.jpg",
  "/slideshow/five.png",
];

const FIXED_HEIGHT = 500;

export default function ImageCarousel() {
  const [validImages, setValidImages] = useState([]);
  const [imageDimensions, setImageDimensions] = useState({});
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center" },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  // Load images and get natural dimensions
  useEffect(() => {
    const checkImages = async () => {
      const loadedImages = [];
      const dims = {};

      for (const src of expectedSlides) {
        try {
          const res = await fetch(src, { method: "HEAD" });
          if (res.ok) {
            await new Promise((resolve) => {
              const img = new window.Image();
              img.onload = () => {
                dims[src] = {
                  width: img.naturalWidth,
                  height: img.naturalHeight,
                };
                resolve();
              };
              img.onerror = resolve;
              img.src = src;
            });
            loadedImages.push(src);
          }
        } catch (err) {}
      }

      setValidImages(loadedImages);
      setImageDimensions(dims);
    };

    checkImages();
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => emblaApi.off("select", onSelect);
  }, [emblaApi]);

  // Reinit embla when dimensions are loaded so it recalculates slide widths
  useEffect(() => {
    if (emblaApi && Object.keys(imageDimensions).length > 0) {
      emblaApi.reInit();
    }
  }, [imageDimensions, emblaApi]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  // Calculate width for each image to maintain its aspect ratio at FIXED_HEIGHT
  const getSlideWidth = (src) => {
    const dims = imageDimensions[src];
    if (!dims) return FIXED_HEIGHT; // fallback square
    const aspectRatio = dims.width / dims.height;
    return FIXED_HEIGHT * aspectRatio;
  };

  // Current slide's width drives the carousel container width
  const currentWidth = validImages[selectedIndex]
    ? getSlideWidth(validImages[selectedIndex])
    : FIXED_HEIGHT;

  if (validImages.length === 0) {
    return <p>No images available.</p>;
  }

  return (
    <div
      style={{
        width: `${currentWidth}px`,
        maxWidth: "100%",
        margin: "0 auto",
        position: "relative",
        transition: "width 0.4s ease",
      }}
    >
      <div
        ref={emblaRef}
        style={{ overflow: "hidden", height: `${FIXED_HEIGHT}px` }}
      >
        <div style={{ display: "flex", height: "100%" }}>
          {validImages.map((src, index) => {
            const w = getSlideWidth(src);
            return (
              <div
                key={index}
                style={{
                  flex: `0 0 ${w}px`,
                  width: `${w}px`,
                  height: `${FIXED_HEIGHT}px`,
                  overflow: "hidden",
                }}
              >
                <img
                  src={src}
                  alt={`Slide ${index + 1}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: src.includes("one") || src.includes("five") ? "top" : "center",
                    display: "block",
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={scrollPrev}
        style={{
          position: "absolute",
          left: "10px",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 10,
          background: "rgba(255, 255, 255, 0.8)",
          border: "none",
          borderRadius: "50%",
          width: "40px",
          height: "40px",
          cursor: "pointer",
          fontSize: "20px",
        }}
      >
        ‹
      </button>
      <button
        onClick={scrollNext}
        style={{
          position: "absolute",
          right: "10px",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 10,
          background: "rgba(255, 255, 255, 0.8)",
          border: "none",
          borderRadius: "50%",
          width: "40px",
          height: "40px",
          cursor: "pointer",
          fontSize: "20px",
        }}
      >
        ›
      </button>

      {/* Pagination Dots */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "8px",
          marginTop: "16px",
        }}
      >
        {validImages.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              border: "none",
              cursor: "pointer",
              background: index === selectedIndex ? "#333" : "#ccc",
              padding: 0,
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}