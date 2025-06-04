import React from 'react'


function MapSlide() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-white to-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up" data-aos-delay="100">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-4">
            Sơ Đồ 360° dự án
          </h2>
          <p className="font-thin text-lg text-gray-600 max-w-2xl mx-auto">
            Khám phá toàn cảnh không gian sống hiện đại của Sun Valley thông qua tour 360° thực tế ảo sống động.
          </p>
        </div>
      </div>

      <div className="w-full px-4">
        <div className="p-[2px] rounded-3xl bg-gradient-to-r from-white to-gray-100 shadow-2xl max-w-[1400px] mx-auto">
          <div className="relative rounded-3xl overflow-hidden bg-white">
            <div className="absolute inset-0 bg-black/20 z-10"></div>
            <iframe
              src="https://view360.flyingcam-vietnam.com/Project2021/SunValleyGd2/"
              title="Sun Valley 3D Tour"
              allowFullScreen
              className="w-full h-[800px] sm:h-[900px] md:h-[1000px] relative z-20 rounded-2xl"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MapSlide;