import { useState, useEffect } from 'react';
import { Search, MapPin, Home, Users, Star, Phone, Mail, ArrowRight, CheckCircle, TrendingUp, Shield, Award } from 'lucide-react';

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  const heroSlides = [
    {
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2075&q=80",
      title: "Tìm Ngôi Nhà Mơ Ước Của Bạn",
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
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "12.5 tỷ",
      title: "Villa Sang Trọng Quận 2",
      location: "Thủ Đức, TP.HCM",
      beds: 4,
      baths: 3,
      area: "250m²",
      type: "hot"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "8.2 tỷ",
      title: "Căn Hộ Penthouse View Sông",
      location: "Quận 1, TP.HCM",
      beds: 3,
      baths: 2,
      area: "180m²",
      type: "new"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "6.8 tỷ",
      title: "Nhà Phố Hiện Đại Quận 7",
      location: "Quận 7, TP.HCM",
      beds: 3,
      baths: 3,
      area: "120m²",
      type: "featured"
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
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md shadow-lg z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Home className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                RealEstate Pro
              </span>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Trang chủ</a>
              <a href="#properties" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Bất động sản</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Dịch vụ</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Về chúng tôi</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Liên hệ</a>
            </nav>

            <div className="flex items-center space-x-4">
              <button className="hidden md:block px-6 py-2 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 transition-all duration-300 font-medium">
                Đăng nhập
              </button>
              <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300 font-medium">
                Đăng ký
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative h-screen overflow-hidden">
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

        <div className="relative z-10 h-full flex items-center justify-center text-center text-white px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="block transform animate-pulse">
                {heroSlides[currentSlide].title}
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              {heroSlides[currentSlide].subtitle}
            </p>

            {/* Search Bar */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 mb-8 max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Vị trí"
                    className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <select className="px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-blue-400">
                  <option>Loại BDS</option>
                  <option>Căn hộ</option>
                  <option>Nhà phố</option>
                  <option>Villa</option>
                </select>
                <select className="px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-blue-400">
                  <option>Khoảng giá</option>
                  <option>Dưới 5 tỷ</option>
                  <option>5-10 tỷ</option>
                  <option>Trên 10 tỷ</option>
                </select>
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 font-medium">
                  <Search className="h-5 w-5" />
                  <span>Tìm kiếm</span>
                </button>
              </div>
            </div>

            <div className="flex justify-center space-x-4">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-medium text-lg">
                Khám phá ngay
              </button>
              <button className="px-8 py-4 border-2 border-white text-white rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300 font-medium text-lg">
                Xem video
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
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div className="transform hover:scale-110 transition-transform duration-300">
              <div className="text-4xl md:text-5xl font-bold mb-2">5000+</div>
              <div className="text-lg opacity-90">Bất động sản</div>
            </div>
            <div className="transform hover:scale-110 transition-transform duration-300">
              <div className="text-4xl md:text-5xl font-bold mb-2">1200+</div>
              <div className="text-lg opacity-90">Khách hàng hài lòng</div>
            </div>
            <div className="transform hover:scale-110 transition-transform duration-300">
              <div className="text-4xl md:text-5xl font-bold mb-2">15+</div>
              <div className="text-lg opacity-90">Năm kinh nghiệm</div>
            </div>
            <div className="transform hover:scale-110 transition-transform duration-300">
              <div className="text-4xl md:text-5xl font-bold mb-2">98%</div>
              <div className="text-lg opacity-90">Tỷ lệ thành công</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section id="properties" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Bất Động Sản Nổi Bật
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Khám phá những căn hộ, nhà phố và villa cao cấp nhất với vị trí đắc địa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${property.type === 'hot' ? 'bg-red-500 text-white' :
                      property.type === 'new' ? 'bg-green-500 text-white' :
                        'bg-blue-500 text-white'
                      }`}>
                      {property.type === 'hot' ? 'Hot' :
                        property.type === 'new' ? 'Mới' : 'Nổi bật'}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <button className="w-10 h-10 bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition-colors">
                      <Star className="h-5 w-5 text-gray-600" />
                    </button>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-gray-900 leading-tight">
                      {property.title}
                    </h3>
                    <span className="text-2xl font-bold text-blue-600">
                      {property.price}
                    </span>
                  </div>

                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">{property.location}</span>
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                    <div className="flex items-center">
                      <Home className="h-4 w-4 mr-1" />
                      <span>{property.beds} phòng ngủ</span>
                    </div>
                    <div className="flex items-center">
                      <span>{property.baths} phòng tắm</span>
                    </div>
                    <div className="flex items-center">
                      <span>{property.area}</span>
                    </div>
                  </div>

                  <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 font-medium">
                    Xem chi tiết
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 font-medium text-lg">
              Xem tất cả bất động sản
            </button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Dịch Vụ Của Chúng Tôi
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Đội ngũ chuyên gia giàu kinh nghiệm sẵn sàng hỗ trợ bạn trong mọi giao dịch bất động sản
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
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

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Real estate team"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl">
                <div className="flex items-center space-x-4">
                  <Award className="h-12 w-12 text-yellow-500" />
                  <div>
                    <div className="text-2xl font-bold text-gray-900">Top 1</div>
                    <div className="text-sm text-gray-600">Công ty BDS uy tín</div>
                  </div>
                </div>
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
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Sẵn Sàng Tìm Ngôi Nhà Mơ Ước?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Hãy để chúng tôi giúp bạn tìm được bất động sản hoàn hảo. Liên hệ ngay để được tư vấn miễn phí!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-blue-600 rounded-full hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 font-medium text-lg flex items-center justify-center space-x-2">
              <Phone className="h-5 w-5" />
              <span>Gọi ngay: 0123-456-789</span>
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-full hover:bg-white hover:text-blue-600 transition-all duration-300 font-medium text-lg flex items-center justify-center space-x-2">
              <ArrowRight className="h-5 w-5" />
              <span>Đăng ký tư vấn</span>
            </button>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Liên Hệ Với Chúng Tôi
            </h2>
            <p className="text-xl text-gray-600">
              Hãy để lại thông tin, chúng tôi sẽ liên hệ tư vấn miễn phí trong 24h
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Gửi tin nhắn</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Họ tên</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="Nhập họ tên của bạn"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Số điện thoại</label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="Nhập số điện thoại"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Nhập email của bạn"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Loại bất động sản quan tâm</label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300">
                      <option>Chọn loại bất động sản</option>
                      <option>Căn hộ chung cư</option>
                      <option>Nhà phố</option>
                      <option>Villa</option>
                      <option>Đất nền</option>
                      <option>Văn phòng</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nội dung</label>
                    <textarea
                      rows="4"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Mô tả nhu cầu của bạn..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 font-medium text-lg"
                  >
                    Gửi thông tin
                  </button>
                </form>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-white p-6 rounded-2xl shadow-lg flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Hotline</h4>
                  <p className="text-gray-600">0123-456-789</p>
                  <p className="text-gray-600">0987-654-321</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Email</h4>
                  <p className="text-gray-600">info@realestatepro.vn</p>
                  <p className="text-gray-600">support@realestatepro.vn</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Địa chỉ</h4>
                  <p className="text-gray-600">123 Nguyễn Huệ, Quận 1</p>
                  <p className="text-gray-600">TP. Hồ Chí Minh, Việt Nam</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-2xl text-white">
                <h4 className="text-lg font-semibold mb-4">Giờ làm việc</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Thứ 2 - Thứ 6:</span>
                    <span>8:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Thứ 7:</span>
                    <span>8:00 - 17:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Chủ nhật:</span>
                    <span>9:00 - 16:00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Home className="h-6 w-6 text-white" />
                </div>
                <span className="text-2xl font-bold">RealEstate Pro</span>
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
                © 2024 RealEstate Pro. Tất cả quyền được bảo lưu.
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
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center z-50"
      >
        <ArrowRight className="h-5 w-5 transform -rotate-90" />
      </button>
    </div>
  );
}

export default App;