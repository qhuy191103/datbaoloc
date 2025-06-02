import React from 'react';
import SunCoffee from '../assets/images/SunCoffee.jpg';
import SunFarm from '../assets/images/SunFarm.JPG';
import CongVienGalaxy from '../assets/images/CongVienGalaxy.jpg';
import hoanghon from '../assets/images/hoanghon.jpg';
import HoCanhBuom from '../assets/images/HoCanhBuom.jpg';
import tongquan from '../assets/images/tongquan.jpg';
import background from '../assets/images/background.jpg';


const properties = [
  { id: 1, image: SunCoffee, title: "Sun Valley Coffee", description: "Không gian cà phê ngoài trời xanh mát" },
  { id: 2, image: HoCanhBuom, title: "Hồ cánh bướm", description: "Hồ nước trong xanh, cảnh sắc thơ mộng" },
  { id: 3, image: CongVienGalaxy, title: "Công viên Galaxy", description: "Sky bar sang trọng với tầm nhìn rộng" },
  // { id: 4, image: hoanghon, title: "Hồ Chanson", description: "Khung cảnh hoàng hôn tuyệt đẹp bên hồ." },
  { id: 5, image: SunFarm, title: "Sun Farm", description: "Khu vườn " },
  { id: 6, image: tongquan, title: "Tuyến phố Shophouse", description: "Dãy nhà phố thương mại sầm uất  " },
];

function FeatuaredProperties() {
  return (
    <section
      id="properties"
      className="py-20 bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${background})` }}
    >
      {/* Lớp phủ để dễ đọc nội dung trên ảnh nền */}
      <div className="absolute inset-0 bg-white bg-opacity-80 backdrop-blur-sm" />

      {/* Nội dung chính */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold font-playfair text-gray-900 mb-4">
            Tiện ích nội khu
          </h2>

          <p className="font-thin text-xl text-gray-700 max-w-2xl mx-auto">
            Tận hưởng không gian sống đẳng cấp với hệ thống tiện ích nội khu đa dạng và hiện đại
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {properties.map((property, index) => (
            <div
              key={property.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden transform transition duration-500 hover:shadow-2xl hover:scale-[1.05]"
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
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-yellow-500 cursor-pointer transition-colors">
                  {property.title}
                </h3>
                <p className="text-gray-600 text-sm">{property.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeatuaredProperties;
