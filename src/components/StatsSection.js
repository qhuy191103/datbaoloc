import React from 'react'
function StatsSection() {
  return (<section className="py-20 bg-blue-950">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-yellow-300">
      <div className="transform hover:scale-110 transition-transform duration-300" data-aos="fade-up">
        <div className="text-4xl md:text-5xl font-bold mb-2">45 ha</div>
        <div className="text-lg opacity-90">Quy mô dự án</div>
      </div>

      <div className="transform hover:scale-110 transition-transform duration-300" data-aos="fade-up" data-aos-delay="100">
        <div className="text-4xl md:text-5xl font-bold mb-2">900 sản phẩm</div>
        <div className="text-lg opacity-90">Đất nền - shophouse - biệt thự vườn</div>
      </div>

      <div className="transform hover:scale-110 transition-transform duration-300" data-aos="fade-up" data-aos-delay="200">
        <div className="text-4xl md:text-5xl font-bold mb-2">45%</div>
        <div className="text-lg opacity-90">Mật độ xây dựng</div>
      </div>

      <div className="transform hover:scale-110 transition-transform duration-300" data-aos="fade-up" data-aos-delay="300">
        <div className="text-4xl md:text-5xl font-bold mb-2">7 phân khu</div>
        <div className="text-lg opacity-90">Đa dạng chủ đề thiết kế</div>
      </div>
    </div>

  </section>);
}

export default StatsSection;