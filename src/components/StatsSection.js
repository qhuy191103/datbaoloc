import React from 'react';
import CountUp from 'react-countup';

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

function extractNumberAndUnit(str) {
  const match = str.match(/^(\d+)(.*)$/);
  if (!match) return { number: 0, unit: '' };
  return {
    number: Number(match[1]),
    unit: match[2].trim(),
  };
}

function StatsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-[#FFD700]">
        {statsData.map((item, index) => {
          const { number, unit } = extractNumberAndUnit(item.number);

          return (
            <div
              key={index}
              className="transform hover:scale-110 transition-transform duration-300"
              data-aos="fade-up"
              data-aos-delay={item.delay}
            >
              <div className="text-3xl md:text-4xl font-bold mb-2">
                <CountUp start={0} end={number} duration={2} delay={item.delay / 1000} />
                {unit && <span> {unit}</span>}
              </div>
              <div className="text-lg opacity-90">{item.label}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default StatsSection;
