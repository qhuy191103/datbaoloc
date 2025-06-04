import React from 'react'


function MapSlide() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-white to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Tiêu đề */}
        <div
          className="text-center mb-16"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-4">
            Sơ Đồ 360° dự án
          </h2>
          <p className=" font-thin text-lg text-gray-600 max-w-2xl mx-auto">
            Khám phá toàn cảnh không gian sống hiện đại của Sun Valley thông qua tour 360° thực tế ảo sống động.
          </p>
        </div>

        {/* Iframe 3D */}
        <div className="relative rounded-3xl shadow-2xl overflow-hidden border-8 border-white">
          <div className="absolute inset-0 bg-black/20 z-10"></div>
          <iframe
            src="https://view360.flyingcam-vietnam.com/Project2021/SunValleyGd2/"
            title="Sun Valley 3D Tour"
            frameBorder="0"
            allowFullScreen
            className="w-full h-[600px] sm:h-[700px] md:h-[800px] relative z-20"
          ></iframe>
        </div>
      </div>
    </section>);
}

export default MapSlide;