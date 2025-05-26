import { useState, useEffect } from 'react';
import { Search, Star, ArrowRight, CheckCircle, TrendingUp, Shield } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay } from "swiper/modules";

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState({});

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

  const properties = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Sun Valley Coffee",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Hồ cánh bướm",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Club house - Sky bar",
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Hồ Chanson",
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Khu vườn Yoga",
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1594484208280-efa00f96fc21?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Tuyến phố Shophouse",
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1596276020587-8044fe049813?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Khu vui chơi trẻ em",
    },
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1560749003-f4b1e17e2dff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Nông trại Organic",
    },
    {
      id: 9,
      image: "https://images.unsplash.com/photo-1587162146766-e06b1189b907?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Công viên mê cung Pisani",
    },
    {
      id: 10,
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Sky Central Park - Babylon Garden",
    }
  ];


  const testimonials = [
    {
      name: "Nguyễn Văn A",
      role: "Khách hàng",
      content: "Dịch vụ tuyệt vời! Tôi đã tìm được căn nhà ưng ý chỉ trong 2 tuần.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    },
    {
      name: "Trần Thị B",
      role: "Nhà đầu tư",
      content: "Đội ngũ tư vấn chuyên nghiệp, giúp tôi đầu tư hiệu quả.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b2e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    },
    {
      name: "Lê Minh C",
      role: "Chủ nhà",
      content: "Bán nhà nhanh chóng với giá tốt nhất thị trường.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    }
  ];
  const projectSlides = [
    {
      title: "GIAO LỘ THỊNH VƯỢNG MỘT BƯỚC CHÂN NGÀN TIỆN ÍCH",
      description:
        "Nằm giữa 3 trục đường chính là Tản Đà – Lý Thường Kiệt – cao tốc Dầu Giây – Liên Khương nên việc di chuyển đến các nơi là vô cùng thuận tiện. Vị trí này vừa giúp cư dân dễ dàng tiếp cận các địa điểm trung tâm lại vừa là vị trí dễ tiếp cận đối với những người di chuyển từ TP. Hồ Chí Minh và các tỉnh thành khác đến với Sun Valley..",
      features: [

        "Thiết kế hiện đại, tối ưu không gian",
        "Tiện ích nội khu: hồ bơi, gym, công viên, trung tâm thương mại",
      ],
      image:
        "https://sunvalley.vn/wp-content/uploads/2024/08/Ban-do-vi-tri-va-cao-toc@4x-2048x1575.png.webp",
    },
    {
      title: "Từ Sun Valley cũng dễ dàng di chuyển đến các địa điểm như:",
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


  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[id]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-transparent backdrop-blur-md shadow-lg z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">

              <img src="https://sunvalley.vn/wp-content/uploads/2018/12/sun-valley.png" alt="Mô tả ảnh" className="w-30 h-20 object-cover rounded-md" />
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-orange-200 hover:text-blue-600 transition-colors font-medium">Trang chủ</a>
              <a href="#properties" className="text-orange-200 hover:text-blue-600 transition-colors font-medium">Bất động sản</a>
              <a href="#services" className="text-orange-200 hover:text-blue-600 transition-colors font-medium">Dịch vụ</a>
              {/* <a href="#about" className="text-orange-200 hover:text-blue-600 transition-colors font-medium">Về chúng tôi</a> */}
              <a href="#contact" className="text-orange-200 hover:text-blue-600 transition-colors font-medium">Tổng quan dự án</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative h-screen overflow-hidden">
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
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="block">
                  {heroSlides[currentSlide].title}
                </span>
              </h1>
              <p className="text-xl md:text-2xl opacity-90">
                {heroSlides[currentSlide].subtitle}
              </p>
            </div>

            {/* Search Bar - Now fixed position */}
            <div className="w-full max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Họ và tên"
                      className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                  </div>

                  <div className="relative">
                    <input
                      type="tel"
                      placeholder="Số điện thoại"
                      className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                  </div>

                  <div className="relative">
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                  </div>

                  <div className="relative">
                    <input
                      placeholder="Ghi chú"
                      className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 h-[42px] resize-none"
                    ></input>
                  </div>

                  <div className="md:col-span-2">
                    <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 font-medium">
                      <ArrowRight className="h-5 w-5" />
                      <span>Gửi thông tin</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex justify-center space-x-4">
              <button
                className="px-8 py-4 bg-gradient-to-r from-blue-950 to-blue-900 text-white rounded-full hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-medium text-lg"
                onClick={() => window.location.href = "https://view360.flyingcam-vietnam.com/Project2021/SunValleyGd2/"}
              >
                Khám phá ngay
              </button>
            </div>
          </div>
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index
                ? 'bg-white scale-125'
                : 'bg-white/50 hover:bg-white/80'
                }`}
            />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-yellow-300">
            <div className="transform hover:scale-110 transition-transform duration-300">
              <div className="text-4xl md:text-5xl font-bold mb-2">45 ha</div>
              <div className="text-lg opacity-90">Quy mô dự án</div>
            </div>
            <div className="transform hover:scale-110 transition-transform duration-300">
              <div className="text-4xl md:text-5xl font-bold mb-2">900 sản phẩm</div>
              <div className="text-lg opacity-90">Đất nền - shophouse - biệt thự vườn</div>
            </div>
            <div className="transform hover:scale-110 transition-transform duration-300">
              <div className="text-4xl md:text-5xl font-bold mb-2">45%</div>
              <div className="text-lg opacity-90">Mật độ xây dựng</div>
            </div>
            <div className="transform hover:scale-110 transition-transform duration-300">
              <div className="text-4xl md:text-5xl font-bold mb-2">7 phân khu</div>
              <div className="text-lg opacity-90">Đa dạng chủ đề thiết kế</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section id="properties" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Tiện ích nội khu
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tận hưởng không gian sống đẳng cấp với hệ thống tiện ích nội khu đa dạng và đẳng cấp
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-7">
            {properties.map((property, index) => (
              <div
                key={property.id}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:scale-105 transition-all duration-500 ${isVisible[`property-${index}`] ? 'animate-fade-in-up' : 'opacity-0'
                  }`}
                id={`property-${index}`}
              >
                <div className="relative">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                  </div>
                  <div className="absolute top-4 right-4">
                    <button className="w-10 h-10 bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition-colors">
                      <Star className="h-5 w-5 text-gray-600" />
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h2 className="text-xl font-bold text-gray-900 leading-tight">
                      {property.title}
                    </h2>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* hahaha */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        spaceBetween={50}
        slidesPerView={1}
        className="w-full"
        loop={true}
      >
        {projectSlides.map((project, index) => (
          <SwiperSlide key={index}>
            <div className="px-6 lg:px-16 min-h-[600px] flex items-center">
              <div className="grid grid-cols-[1fr_2fr] gap-12 items-center w-full">
                <div>
                  <h3 className="text-3xl font-bold text-gray-800 mb-4">{project.title}</h3>
                  <p className="text-gray-600 text-lg mb-6">{project.description}</p>
                  <ul className="space-y-4">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-start space-x-3">
                        <CheckCircle className="text-green-500 mt-1" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="overflow-hidden rounded-3xl shadow-xl">
                  <img
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

      {/* Services */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Dịch Vụ Của Chúng Tôi
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Đội ngũ chuyên gia giàu kinh nghiệm luôn sẵn sàng hỗ trợ bạn trong mọi giao dịch bất động sản tại dự án Sun Valley, đảm bảo quá trình đầu tư, mua bán diễn ra thuận lợi, minh bạch và hiệu quả nhất.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Tìm kiếm BDS</h3>
              <p className="text-gray-600 leading-relaxed">
                Hệ thống tìm kiếm thông minh giúp bạn tìm được bất động sản phù hợp nhất với nhu cầu và ngân sách.
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Tư vấn đầu tư</h3>
              <p className="text-gray-600 leading-relaxed">
                Phân tích thị trường chuyên sâu và tư vấn chiến lược đầu tư hiệu quả để tối đa hóa lợi nhuận.
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Hỗ trợ pháp lý</h3>
              <p className="text-gray-600 leading-relaxed">
                Đội ngũ luật sư chuyên nghiệp hỗ trợ thủ tục pháp lý, đảm bảo giao dịch an toàn và minh bạch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

            {/* Nội dung bên trái: 5/12 */}
            <div className="lg:col-span-5">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Tại Sao Chọn Chúng Tôi?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Với hơn 15 năm kinh nghiệm trong lĩnh vực bất động sản, chúng tôi cam kết mang đến dịch vụ tốt nhất.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Uy tín hàng đầu</h4>
                    <p className="text-gray-600">Được hàng nghìn khách hàng tin tưởng và đánh giá cao.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Giá cả minh bạch</h4>
                    <p className="text-gray-600">Không phí ẩn, cam kết giá tốt nhất thị trường.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Hỗ trợ 24/7</h4>
                    <p className="text-gray-600">Đội ngũ tư vấn chuyên nghiệp luôn sẵn sàng hỗ trợ.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Ảnh bên phải: 7/12 */}
            <div className="lg:col-span-7">
              <div className="overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src="https://khaihungcorp.com/wp-content/uploads/2023/03/PDH01491-1.jpg"
                  alt="Delta Realty"
                  className="w-full h-[500px] object-cover object-center transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Khách Hàng Nói Gì
            </h2>
            <p className="text-xl text-gray-600">
              Hàng nghìn khách hàng đã tin tưởng và hài lòng với dịch vụ của chúng tôi
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}

      {/* Contact */}
      <section id="contact" className="py-24 bg-gradient-to-b from-white to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Tiêu đề */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Trải Nghiệm Dự Án Bằng Công Nghệ 3D
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Khám phá toàn cảnh không gian sống hiện đại của dự án thông qua tour 360° thực tế ảo sống động.
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
      </section>


      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <img src="https://sunvalley.vn/wp-content/uploads/2018/12/sun-valley.png" alt="Mô tả ảnh" className="w-30 h-20 object-cover rounded-md" />
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                Đối tác tin cậy trong mọi giao dịch bất động sản. Chúng tôi cam kết mang đến dịch vụ tốt nhất.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">f</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-400 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">t</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-pink-600 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">ig</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">Dịch vụ</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Mua bán nhà đất</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cho thuê BDS</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Tư vấn đầu tư</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Định giá BDS</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Hỗ trợ pháp lý</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">Loại BDS</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Căn hộ chung cư</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Nhà phố</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Villa</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Đất nền</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Văn phòng</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">Khu vực</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">TP. Hồ Chí Minh</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Hà Nội</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Đà Nẵng</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Nha Trang</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Vũng Tàu</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © 2025 Delta Realty. Tất cả quyền được bảo lưu.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Chính sách bảo mật</a>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Điều khoản sử dụng</a>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Sitemap</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-blue-800 to-purple-800 text-orange-300 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center z-50"
      >
        <ArrowRight className="h-5 w-5 transform -rotate-90" />
      </button>
    </div>
  );
}

export default App;