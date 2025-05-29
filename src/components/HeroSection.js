import React, { useState, useEffect } from 'react';

const heroSlides = [
  {
    image: "https://aqland.vn/wp-content/uploads/2024/09/hinh-anh-thuc-te-xay-dung-sun-valley-bao-loc-2023-4.jpg",
    title: "Tìm Ngôi Nhà Mơ Ước",
    subtitle: "Khám phá hàng nghìn bất động sản cao cấp"
  },
  {
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80",
    title: "Đầu Tư Thông Minh",
    subtitle: "Cơ hội đầu tư bất động sản sinh lời cao"
  },
  {
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    title: "Dịch Vụ Chuyên Nghiệp",
    subtitle: "Tư vấn miễn phí từ chuyên gia hàng đầu"
  }
];


function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Tự động chuyển slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

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
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full">
        <div className="h-full flex flex-col justify-center items-center px-4">
          {/* Title and subtitle */}
          <div className="text-center text-white mb-8">
            <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6 leading-tight">
              <span className="block">
                {heroSlides[currentSlide].title}
              </span>
            </h1>
            <p className="font-thin text-xl md:text-2xl opacity-90">
              {heroSlides[currentSlide].subtitle}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
