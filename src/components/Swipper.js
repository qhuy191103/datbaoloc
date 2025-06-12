import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { CheckCircle } from 'lucide-react';

const projectSlides = [
  {
    title: "Giao lộ vàng, ngàn tiện ích",
    description:
      "Nằm giữa 3 trục đường chính là Tản Đà – Lý Thường Kiệt – cao tốc Dầu Giây – Liên Khương nên việc di chuyển đến các nơi là vô cùng thuận tiện...",
    features: [
      "Thiết kế hiện đại, tối ưu không gian",
      "Tiện ích nội khu: hồ bơi, gym, công viên, trung tâm thương mại",
    ],
    image:
      "https://sunvalley.vn/wp-content/uploads/2024/08/Ban-do-vi-tri-va-cao-toc@4x-2048x1575.png.webp",
  },
  {
    title: "Sun Valley thuận tiện di chuyển",
    description:
      "Các điểm tham quan du lịch nổi tiếng: thác ĐamB’ri, tu viện Bát Nhã, đồi chè Tâm Châu,…",
    features: [
      "Các điểm tham quan du lịch nổi tiếng: thác ĐamB’ri, tu viện Bát Nhã, đồi chè Tâm Châu,…",
      "Trung tâm thành phố Bảo Lộc: đơn vị hành chính, các dịch vụ vui chơi, ăn uống, cửa hàng,…",
      "Các huyện, thành phố, tỉnh thành lân cận: Đà Lạt, Nha Trang, Phan Thiết, TP. Hồ Chí Minh.",
    ],
    image:
      "https://sunvalley.vn/wp-content/uploads/2024/08/18170306-9-du-an-sun-valley-bao-loc.jpeg",
  },
];

function Swipper() {
  const imageRefs = useRef([]);

  const handleImageClick = (index) => {
    const imgEl = imageRefs.current[index];
    if (imgEl.requestFullscreen) {
      imgEl.requestFullscreen();
    } else if (imgEl.webkitRequestFullscreen) {
      imgEl.webkitRequestFullscreen(); // Safari
    } else if (imgEl.msRequestFullscreen) {
      imgEl.msRequestFullscreen(); // IE11
    }
  };

  return (
    <section id="location">
      <div className="w-full py-14 bg-gray-50">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 7000, disableOnInteraction: false }}
          spaceBetween={50}
          slidesPerView={1}
          className="w-full"
          loop={true}
          effect="fade"
          fadeEffect={{ crossFade: true }}
        >
          {projectSlides.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="px-6 lg:px-16 min-h-[600px] flex items-center">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 items-center w-full">
                  {/* Nội dung */}
                  <div data-aos="fade-right" data-aos-delay="200">
                    <h1
                      className="text-4xl mb-5 md:text-5xl font-extrabold font-playfair bg-clip-text text-transparent "
                      style={{
                        background: "linear-gradient(to right, #d2be85, #caa340)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        paddingBottom: "1rem"
                      }}
                    >
                      {project.title}
                    </h1>

                    <p className="mt-5 text-gray-600 text-thin mb-6">
                      {project.description}
                    </p>
                    <ul className="space-y-4">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-start space-x-3">
                          <CheckCircle className="text-green-500 mt-1" />
                          <span className="font-thin text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Hình ảnh */}
                  <div
                    className="overflow-hidden rounded-3xl shadow-xl cursor-pointer"
                    data-aos="zoom-in-left"
                    data-aos-delay="400"
                    onClick={() => handleImageClick(index)}
                  >
                    <img
                      ref={(el) => (imageRefs.current[index] = el)}
                      src={project.image}
                      alt={project.title}
                      className="w-full h-[550px] object-cover object-center transition-transform duration-500 ease-in-out hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Swipper;
