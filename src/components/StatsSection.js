import React from 'react';

const statsData = [
  {
    number: "45 ha",
    label: "Quy mô dự án",
    delay: 0,
  },
  {
    number: "900 sản phẩm",
    label: "Đất nền - shophouse - biệt thự vườn",
    delay: 100,
  },
  {
    number: "45%",
    label: "Mật độ xây dựng",
    delay: 200,
  },
  {
    number: "7 phân khu",
    label: "Đa dạng chủ đề thiết kế",
    delay: 300,
  },
];

function StatsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-[#FFD700] ]">
        {statsData.map((item, index) => (
          <div
            key={index}
            className="transform hover:scale-110 transition-transform duration-300"
            data-aos="fade-up"
            data-aos-delay={item.delay}
          >
            <div className="text-3xl md:text-4xl font-bold mb-2">{item.number}</div>
            <div className="text-lg opacity-90">{item.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default StatsSection;
