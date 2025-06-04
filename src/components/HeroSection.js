import React, { useState, useEffect } from 'react';
import MiniVilla from '../assets/images/MiniVilla.jpg';
import MiniVilla2 from '../assets/images/MiniVilla2.jpg';
import Bungalow2 from '../assets/images/Bungalow2.JPG';


const heroSlides = [
  {
    image: MiniVilla2,
    title: "Tìm Ngôi Nhà Mơ Ước",
    subtitle: "Khám phá hàng nghìn bất động sản cao cấp"
  },
  {
    image: MiniVilla,
    title: "Đầu Tư Thông Minh",
    subtitle: "Cơ hội đầu tư bất động sản sinh lời cao"
  },
  {
    image: Bungalow2,
    title: "Không Gian Sống Đẳng Cấp",
    subtitle: "Tận hưởng môi trường xanh, không khí trong lành và tiện ích hiện đại"
  }

];


function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Tự động chuyển slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative h-screen overflow-hidden pt-28">
      {/* Background slides */}
      <div className="absolute inset-0">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${currentSlide === index ? 'opacity-100' : 'opacity-0'
              }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/10"></div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full">
        <div className="h-full flex flex-col justify-center items-center px-4">
          {/* Title and subtitle */}
          <div className="text-center text-white mb-8">
            <h1 className="text-7xl md:text-7xl font-playfair font-bold mb-6 leading-tight">
              <span className="block">
                {heroSlides[currentSlide].title}
              </span>
            </h1>
            <p className="font-thin text-3xl md:text-3xl opacity-90">
              {heroSlides[currentSlide].subtitle}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
