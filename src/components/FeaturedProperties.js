import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import SunCoffee from '../assets/images/SunCoffee.jpg';
import SunFarm from '../assets/images/SunFarm.JPG';
import CongVienGalaxy from '../assets/images/CongVienGalaxy.jpg';
import TongQuanDuAn from '../assets/images/TongQuanDuAn.jpg';
import hoanghon from '../assets/images/hoanghon.jpg';
import HoCanhBuom from '../assets/images/HoCanhBuom.jpg';
import NongTraiHuuCo from '../assets/images/NongTraiHuuCo.JPG';
import tongquan from '../assets/images/tongquan.jpg';
import background from '../assets/images/background.jpg';

const properties = [
  { id: 1, image: SunCoffee, title: "Sun Valley Coffee", description: "Không gian cà phê ngoài trời xanh mát" },
  { id: 2, image: HoCanhBuom, title: "Hồ cánh bướm", description: "Hồ nước trong xanh, cảnh sắc thơ mộng" },
  { id: 3, image: CongVienGalaxy, title: "Công viên Galaxy", description: "Sky bar sang trọng với tầm nhìn rộng" },
  { id: 5, image: SunFarm, title: "Sun Farm", description: "Khu vườn hữu cơ xanh mát, nơi trải nghiệm nông nghiệp sạch" },
  { id: 6, image: tongquan, title: "Tuyến phố Shophouse", description: "Dãy nhà phố thương mại sầm uất" },
  { id: 7, image: NongTraiHuuCo, title: "Nông trại hữu cơ", description: "Nông trại xanh, sạch, bền vững, gắn kết thiên nhiên" },
];

function FeatuaredProperties() {
  return (
    <section
      id="properties"
      className="py-20 bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="absolute inset-0 bg-white bg-opacity-80 backdrop-blur-sm" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-extrabold font-playfair bg-clip-text text-transparent"
            style={{
              background: "linear-gradient(to right, #f9f6d3, #caa340, #66400c)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}
          >
            Tiện ích nội khu
          </h2>
          <p className="mt-3 font-thin text-xl text-gray-700 max-w-2xl mx-auto">
            Tận hưởng không gian sống đẳng cấp với hệ thống tiện ích nội khu đa dạng và hiện đại
          </p>
        </div>

        <div className="mb-16 text-gray-800 text-lg space-y-6">
          <div className="flex flex-col md:flex-row items-start gap-4">
            {/* Table Info - Hàng 1 */}
            <div className="w-full md:w-1/3">
              <table className="w-full table-auto border-t border-b border-gray-300">
                <tbody>
                  {[
                    ['Vị trí', '178 Tản Đà, Phường 1, TP. Bảo Lộc, Lâm Đồng'],
                    ['Đơn vị phát triển', 'Công ty cổ phần tập đoàn Khải Hưng'],
                    ['Tổng diện tích', '40 ha'],
                    ['Loại hình', 'Đất nền nghỉ dưỡng'],
                    ['Phân khu', 'The Sound – The Heart – The Beat – The Soul – The Park – The Palm'],
                    ['Diện tích', '99 – 500 m²'],
                    ['Hạ tầng', 'Đường nhựa, điện âm, nước máy, hệ thống xử lý nước thải'],
                    ['Pháp lý', 'Sổ hồng riêng từng nền, sở hữu lâu dài']
                  ].map(([label, value], index) => (
                    <tr
                      key={index}
                      className={
                        label === 'Vị trí' || label === 'Pháp lý'
                          ? ''
                          : 'border-b border-gray-300'
                      }
                    >
                      <td className="font-medium text-base px-4 py-2">{label}</td>
                      <td className="font-thin text-base px-4 py-2">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Image - Hàng 2 */}
            <div className="w-full md:w-2/3 flex items-stretch justify-center">
              <img
                src={TongQuanDuAn}
                alt="Hình ảnh dự án"
                className="rounded-lg shadow-md w-full h-full object-cover"
              />
            </div>
          </div>
          {/* <div className="font-normal flex items-start gap-2 mt-24">
            <p>
              <strong>Sun Valley</strong> – Điểm đến tiên phong theo mô hình Bất động sản du lịch trải nghiệm tại Bảo Lộc, được phát triển với triết lý "lấy khách hàng làm trung tâm", dựa trên ba trụ cột: <strong>Lưu trú – Giải trí – Du lịch</strong>.
              Dự án mang lại không gian thư giãn yên bình giữa thiên nhiên trong lành, kết hợp khu vui chơi, giải trí và tiện ích hiện đại, bao gồm:
            </p>
          </div> */}


        </div>
        <div className="font-normal flex items-start gap-2 mt-5 mb-10">
          <p>
            <strong>Sun Valley</strong> – Điểm đến tiên phong theo mô hình Bất động sản du lịch trải nghiệm tại Bảo Lộc, được phát triển với triết lý "lấy khách hàng làm trung tâm", dựa trên ba trụ cột: <strong>Lưu trú – Giải trí – Du lịch</strong>.
            Dự án mang lại không gian thư giãn yên bình giữa thiên nhiên trong lành, kết hợp khu vui chơi, giải trí và tiện ích hiện đại, bao gồm:
          </p>
        </div>

        {/* Swiper - Mobile */}
        <div className="block lg:hidden">
          <Swiper
            spaceBetween={16}
            slidesPerView={1.1}
            pagination={{ clickable: true }}
            modules={[Pagination]}
          >
            {properties.map((property, index) => (
              <SwiperSlide key={property.id}>
                <div
                  className="flex flex-col h-full bg-white rounded-2xl shadow-md overflow-hidden transform transition duration-500 hover:shadow-2xl hover:scale-[1.05]"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="relative group overflow-hidden">
                    <img
                      src={property.image}
                      alt={property.title}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  {/* <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-yellow-500 cursor-pointer transition-colors">
                      {property.title}
                    </h3>
                    <p className="text-gray-600 text-sm flex-grow">{property.description}</p>
                  </div> */}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Grid - Desktop */}
        <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <div
              key={property.id}
              className="flex flex-col h-full bg-white rounded-2xl shadow-md overflow-hidden transform transition duration-500 hover:shadow-2xl hover:scale-[1.05]"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="relative group overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-yellow-500 cursor-pointer transition-colors">
                  {property.title}
                </h3>
                <p className="text-gray-600 text-sm flex-grow">{property.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeatuaredProperties;
