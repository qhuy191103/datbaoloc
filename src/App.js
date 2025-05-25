// import { useState, useEffect } from 'react';
// import { Search, MapPin, Home, Star, Phone, Mail, ArrowRight, CheckCircle, TrendingUp, Shield, Award } from 'lucide-react';

// function App() {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isVisible, setIsVisible] = useState({});

//   const heroSlides = [
//     {
//       image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2075&q=80",
//       title: "Tìm Ngôi Nhà Mơ Ước Của Bạn",
//       subtitle: "Khám phá hàng nghìn bất động sản cao cấp"
//     },
//     {
//       image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80",
//       title: "Đầu Tư Thông Minh",
//       subtitle: "Cơ hội đầu tư bất động sản sinh lời cao"
//     },
//     {
//       image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
//       title: "Dịch Vụ Chuyên Nghiệp",
//       subtitle: "Tư vấn miễn phí từ chuyên gia hàng đầu"
//     }
//   ];

//   const properties = [
//     {
//       id: 1,
//       image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//       price: "12.5 tỷ",
//       title: "Villa Sang Trọng Quận 2",
//       location: "Thủ Đức, TP.HCM",
//       beds: 4,
//       baths: 3,
//       area: "250m²",
//       type: "hot"
//     },
//     {
//       id: 2,
//       image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//       price: "8.2 tỷ",
//       title: "Căn Hộ Penthouse View Sông",
//       location: "Quận 1, TP.HCM",
//       beds: 3,
//       baths: 2,
//       area: "180m²",
//       type: "new"
//     },
//     {
//       id: 3,
//       image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//       price: "6.8 tỷ",
//       title: "Nhà Phố Hiện Đại Quận 7",
//       location: "Quận 7, TP.HCM",
//       beds: 3,
//       baths: 3,
//       area: "120m²",
//       type: "featured"
//     }
//   ];

//   const testimonials = [
//     {
//       name: "Nguyễn Văn A",
//       role: "Khách hàng",
//       content: "Dịch vụ tuyệt vời! Tôi đã tìm được căn nhà ưng ý chỉ trong 2 tuần.",
//       rating: 5,
//       avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
//     },
//     {
//       name: "Trần Thị B",
//       role: "Nhà đầu tư",
//       content: "Đội ngũ tư vấn chuyên nghiệp, giúp tôi đầu tư hiệu quả.",
//       rating: 5,
//       avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b2e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
//     },
//     {
//       name: "Lê Minh C",
//       role: "Chủ nhà",
//       content: "Bán nhà nhanh chóng với giá tốt nhất thị trường.",
//       rating: 5,
//       avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
//     }
//   ];

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
//     }, 5000);
//     return () => clearInterval(timer);
//   }, []);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );

//     document.querySelectorAll('[id]').forEach((el) => observer.observe(el));
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Header */}
//       <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md shadow-lg z-50 transition-all duration-300">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center py-4">
//             <div className="flex items-center space-x-2">
//               <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
//                 <Home className="h-6 w-6 text-white" />
//               </div>
//               <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//                 RealEstate Pro
//               </span>
//             </div>

//             <nav className="hidden md:flex items-center space-x-8">
//               <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Trang chủ</a>
//               <a href="#properties" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Bất động sản</a>
//               <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Dịch vụ</a>
//               <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Về chúng tôi</a>
//               <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Liên hệ</a>
//             </nav>

//             <div className="flex items-center space-x-4">
//               <button className="hidden md:block px-6 py-2 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 transition-all duration-300 font-medium">
//                 Đăng nhập
//               </button>
//               <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300 font-medium">
//                 Đăng ký
//               </button>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Hero Section */}
//       <section id="home" className="relative h-screen overflow-hidden">
//         <div className="absolute inset-0">
//           {heroSlides.map((slide, index) => (
//             <div
//               key={index}
//               className={`absolute inset-0 transition-opacity duration-1000 ${currentSlide === index ? 'opacity-100' : 'opacity-0'
//                 }`}
//             >
//               <img
//                 src={slide.image}
//                 alt={slide.title}
//                 className="w-full h-full object-cover"
//               />
//               <div className="absolute inset-0 bg-black/40"></div>
//             </div>
//           ))}
//         </div>

//         <div className="relative z-10 h-full flex items-center justify-center text-center text-white px-4">
//           <div className="max-w-4xl mx-auto">
//             <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
//               <span className="block transform animate-pulse">
//                 {heroSlides[currentSlide].title}
//               </span>
//             </h1>
//             <p className="text-xl md:text-2xl mb-8 opacity-90">
//               {heroSlides[currentSlide].subtitle}
//             </p>

//             {/* Search Bar */}
//             <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 mb-8 max-w-4xl mx-auto">
//               <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
//                 <div className="relative">
//                   <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
//                   <input
//                     type="text"
//                     placeholder="Vị trí"
//                     className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
//                   />
//                 </div>
//                 <select className="px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-blue-400">
//                   <option>Loại BDS</option>
//                   <option>Căn hộ</option>
//                   <option>Nhà phố</option>
//                   <option>Villa</option>
//                 </select>
//                 <select className="px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-blue-400">
//                   <option>Khoảng giá</option>
//                   <option>Dưới 5 tỷ</option>
//                   <option>5-10 tỷ</option>
//                   <option>Trên 10 tỷ</option>
//                 </select>
//                 <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 font-medium">
//                   <Search className="h-5 w-5" />
//                   <span>Tìm kiếm</span>
//                 </button>
//               </div>
//             </div>

//             <div className="flex justify-center space-x-4">
//               <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-medium text-lg">
//                 Khám phá ngay
//               </button>
//               <button className="px-8 py-4 border-2 border-white text-white rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300 font-medium text-lg">
//                 Xem video
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Slide indicators */}
//         <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
//           {heroSlides.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrentSlide(index)}
//               className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index
//                 ? 'bg-white scale-125'
//                 : 'bg-white/50 hover:bg-white/80'
//                 }`}
//             />
//           ))}
//         </div>
//       </section>

//       {/* Stats Section */}
//       <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
//             <div className="transform hover:scale-110 transition-transform duration-300">
//               <div className="text-4xl md:text-5xl font-bold mb-2">5000+</div>
//               <div className="text-lg opacity-90">Bất động sản</div>
//             </div>
//             <div className="transform hover:scale-110 transition-transform duration-300">
//               <div className="text-4xl md:text-5xl font-bold mb-2">1200+</div>
//               <div className="text-lg opacity-90">Khách hàng hài lòng</div>
//             </div>
//             <div className="transform hover:scale-110 transition-transform duration-300">
//               <div className="text-4xl md:text-5xl font-bold mb-2">15+</div>
//               <div className="text-lg opacity-90">Năm kinh nghiệm</div>
//             </div>
//             <div className="transform hover:scale-110 transition-transform duration-300">
//               <div className="text-4xl md:text-5xl font-bold mb-2">98%</div>
//               <div className="text-lg opacity-90">Tỷ lệ thành công</div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Featured Properties */}
//       <section id="properties" className="py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//               Bất Động Sản Nổi Bật
//             </h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Khám phá những căn hộ, nhà phố và villa cao cấp nhất với vị trí đắc địa
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {properties.map((property, index) => (
//               <div
//                 key={property.id}
//                 className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:scale-105 transition-all duration-500 ${isVisible[`property-${index}`] ? 'animate-fade-in-up' : 'opacity-0'
//                   }`}
//                 id={`property-${index}`}
//               >
//                 <div className="relative">
//                   <img
//                     src={property.image}
//                     alt={property.title}
//                     className="w-full h-64 object-cover"
//                   />
//                   <div className="absolute top-4 left-4">
//                     <span className={`px-3 py-1 rounded-full text-sm font-medium ${property.type === 'hot' ? 'bg-red-500 text-white' :
//                       property.type === 'new' ? 'bg-green-500 text-white' :
//                         'bg-blue-500 text-white'
//                       }`}>
//                       {property.type === 'hot' ? 'Hot' :
//                         property.type === 'new' ? 'Mới' : 'Nổi bật'}
//                     </span>
//                   </div>
//                   <div className="absolute top-4 right-4">
//                     <button className="w-10 h-10 bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition-colors">
//                       <Star className="h-5 w-5 text-gray-600" />
//                     </button>
//                   </div>
//                 </div>

//                 <div className="p-6">
//                   <div className="flex justify-between items-start mb-3">
//                     <h3 className="text-xl font-bold text-gray-900 leading-tight">
//                       {property.title}
//                     </h3>
//                     <span className="text-2xl font-bold text-blue-600">
//                       {property.price}
//                     </span>
//                   </div>

//                   <div className="flex items-center text-gray-600 mb-4">
//                     <MapPin className="h-4 w-4 mr-1" />
//                     <span className="text-sm">{property.location}</span>
//                   </div>

//                   <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
//                     <div className="flex items-center">
//                       <Home className="h-4 w-4 mr-1" />
//                       <span>{property.beds} phòng ngủ</span>
//                     </div>
//                     <div className="flex items-center">
//                       <span>{property.baths} phòng tắm</span>
//                     </div>
//                     <div className="flex items-center">
//                       <span>{property.area}</span>
//                     </div>
//                   </div>

//                   <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 font-medium">
//                     Xem chi tiết
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="text-center mt-12">
//             <button className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 font-medium text-lg">
//               Xem tất cả bất động sản
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Services */}
//       <section id="services" className="py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//               Dịch Vụ Của Chúng Tôi
//             </h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Đội ngũ chuyên gia giàu kinh nghiệm sẵn sàng hỗ trợ bạn trong mọi giao dịch bất động sản
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
//               <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
//                 <Search className="h-10 w-10 text-white" />
//               </div>
//               <h3 className="text-2xl font-bold text-gray-900 mb-4">Tìm kiếm BDS</h3>
//               <p className="text-gray-600 leading-relaxed">
//                 Hệ thống tìm kiếm thông minh giúp bạn tìm được bất động sản phù hợp nhất với nhu cầu và ngân sách.
//               </p>
//             </div>

//             <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
//               <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
//                 <TrendingUp className="h-10 w-10 text-white" />
//               </div>
//               <h3 className="text-2xl font-bold text-gray-900 mb-4">Tư vấn đầu tư</h3>
//               <p className="text-gray-600 leading-relaxed">
//                 Phân tích thị trường chuyên sâu và tư vấn chiến lược đầu tư hiệu quả để tối đa hóa lợi nhuận.
//               </p>
//             </div>

//             <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
//               <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
//                 <Shield className="h-10 w-10 text-white" />
//               </div>
//               <h3 className="text-2xl font-bold text-gray-900 mb-4">Hỗ trợ pháp lý</h3>
//               <p className="text-gray-600 leading-relaxed">
//                 Đội ngũ luật sư chuyên nghiệp hỗ trợ thủ tục pháp lý, đảm bảo giao dịch an toàn và minh bạch.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Why Choose Us */}
//       <section className="py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//             <div>
//               <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
//                 Tại Sao Chọn Chúng Tôi?
//               </h2>
//               <p className="text-xl text-gray-600 mb-8">
//                 Với hơn 15 năm kinh nghiệm trong lĩnh vực bất động sản, chúng tôi cam kết mang đến dịch vụ tốt nhất.
//               </p>

//               <div className="space-y-6">
//                 <div className="flex items-start space-x-4">
//                   <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
//                   <div>
//                     <h4 className="text-lg font-semibold text-gray-900 mb-2">Uy tín hàng đầu</h4>
//                     <p className="text-gray-600">Được hàng nghìn khách hàng tin tưởng và đánh giá cao.</p>
//                   </div>
//                 </div>

//                 <div className="flex items-start space-x-4">
//                   <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
//                   <div>
//                     <h4 className="text-lg font-semibold text-gray-900 mb-2">Giá cả minh bạch</h4>
//                     <p className="text-gray-600">Không phí ẩn, cam kết giá tốt nhất thị trường.</p>
//                   </div>
//                 </div>

//                 <div className="flex items-start space-x-4">
//                   <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
//                   <div>
//                     <h4 className="text-lg font-semibold text-gray-900 mb-2">Hỗ trợ 24/7</h4>
//                     <p className="text-gray-600">Đội ngũ tư vấn chuyên nghiệp luôn sẵn sàng hỗ trợ.</p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="relative">
//               <img
//                 src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
//                 alt="Real estate team"
//                 className="rounded-2xl shadow-2xl"
//               />
//               <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl">
//                 <div className="flex items-center space-x-4">
//                   <Award className="h-12 w-12 text-yellow-500" />
//                   <div>
//                     <div className="text-2xl font-bold text-gray-900">Top 1</div>
//                     <div className="text-sm text-gray-600">Công ty BDS uy tín</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Testimonials */}
//       <section className="py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//               Khách Hàng Nói Gì
//             </h2>
//             <p className="text-xl text-gray-600">
//               Hàng nghìn khách hàng đã tin tưởng và hài lòng với dịch vụ của chúng tôi
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {testimonials.map((testimonial, index) => (
//               <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
//                 <div className="flex items-center mb-4">
//                   {[...Array(testimonial.rating)].map((_, i) => (
//                     <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
//                   ))}
//                 </div>
//                 <p className="text-gray-600 mb-6 leading-relaxed italic">
//                   "{testimonial.content}"
//                 </p>
//                 <div className="flex items-center">
//                   <img
//                     src={testimonial.avatar}
//                     alt={testimonial.name}
//                     className="w-12 h-12 rounded-full mr-4"
//                   />
//                   <div>
//                     <div className="font-semibold text-gray-900">{testimonial.name}</div>
//                     <div className="text-sm text-gray-600">{testimonial.role}</div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
//         <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
//           <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
//             Sẵn Sàng Tìm Ngôi Nhà Mơ Ước?
//           </h2>
//           <p className="text-xl text-white/90 mb-8">
//             Hãy để chúng tôi giúp bạn tìm được bất động sản hoàn hảo. Liên hệ ngay để được tư vấn miễn phí!
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <button className="px-8 py-4 bg-white text-blue-600 rounded-full hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 font-medium text-lg flex items-center justify-center space-x-2">
//               <Phone className="h-5 w-5" />
//               <span>Gọi ngay: 0123-456-789</span>
//             </button>
//             <button className="px-8 py-4 border-2 border-white text-white rounded-full hover:bg-white hover:text-blue-600 transition-all duration-300 font-medium text-lg flex items-center justify-center space-x-2">
//               <ArrowRight className="h-5 w-5" />
//               <span>Đăng ký tư vấn</span>
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Contact */}
//       <section id="contact" className="py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//               Liên Hệ Với Chúng Tôi
//             </h2>
//             <p className="text-xl text-gray-600">
//               Hãy để lại thông tin, chúng tôi sẽ liên hệ tư vấn miễn phí trong 24h
//             </p>
//           </div>

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
//             <div>
//               <div className="bg-white p-8 rounded-2xl shadow-lg">
//                 <h3 className="text-2xl font-bold text-gray-900 mb-6">Gửi tin nhắn</h3>
//                 <form className="space-y-6">
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">Họ tên</label>
//                       <input
//                         type="text"
//                         className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
//                         placeholder="Nhập họ tên của bạn"
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">Số điện thoại</label>
//                       <input
//                         type="tel"
//                         className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
//                         placeholder="Nhập số điện thoại"
//                       />
//                     </div>
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
//                     <input
//                       type="email"
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
//                       placeholder="Nhập email của bạn"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">Loại bất động sản quan tâm</label>
//                     <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300">
//                       <option>Chọn loại bất động sản</option>
//                       <option>Căn hộ chung cư</option>
//                       <option>Nhà phố</option>
//                       <option>Villa</option>
//                       <option>Đất nền</option>
//                       <option>Văn phòng</option>
//                     </select>
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">Nội dung</label>
//                     <textarea
//                       rows="4"
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
//                       placeholder="Mô tả nhu cầu của bạn..."
//                     ></textarea>
//                   </div>
//                   <button
//                     type="submit"
//                     className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 font-medium text-lg"
//                   >
//                     Gửi thông tin
//                   </button>
//                 </form>
//               </div>
//             </div>

//             <div className="space-y-8">
//               <div className="bg-white p-6 rounded-2xl shadow-lg flex items-start space-x-4">
//                 <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
//                   <Phone className="h-6 w-6 text-blue-600" />
//                 </div>
//                 <div>
//                   <h4 className="text-lg font-semibold text-gray-900 mb-2">Hotline</h4>
//                   <p className="text-gray-600">0123-456-789</p>
//                   <p className="text-gray-600">0987-654-321</p>
//                 </div>
//               </div>

//               <div className="bg-white p-6 rounded-2xl shadow-lg flex items-start space-x-4">
//                 <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
//                   <Mail className="h-6 w-6 text-green-600" />
//                 </div>
//                 <div>
//                   <h4 className="text-lg font-semibold text-gray-900 mb-2">Email</h4>
//                   <p className="text-gray-600">info@realestatepro.vn</p>
//                   <p className="text-gray-600">support@realestatepro.vn</p>
//                 </div>
//               </div>

//               <div className="bg-white p-6 rounded-2xl shadow-lg flex items-start space-x-4">
//                 <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
//                   <MapPin className="h-6 w-6 text-purple-600" />
//                 </div>
//                 <div>
//                   <h4 className="text-lg font-semibold text-gray-900 mb-2">Địa chỉ</h4>
//                   <p className="text-gray-600">123 Nguyễn Huệ, Quận 1</p>
//                   <p className="text-gray-600">TP. Hồ Chí Minh, Việt Nam</p>
//                 </div>
//               </div>

//               <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-2xl text-white">
//                 <h4 className="text-lg font-semibold mb-4">Giờ làm việc</h4>
//                 <div className="space-y-2 text-sm">
//                   <div className="flex justify-between">
//                     <span>Thứ 2 - Thứ 6:</span>
//                     <span>8:00 - 18:00</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span>Thứ 7:</span>
//                     <span>8:00 - 17:00</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span>Chủ nhật:</span>
//                     <span>9:00 - 16:00</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-900 text-white py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
//             <div>
//               <div className="flex items-center space-x-2 mb-6">
//                 <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
//                   <Home className="h-6 w-6 text-white" />
//                 </div>
//                 <span className="text-2xl font-bold">RealEstate Pro</span>
//               </div>
//               <p className="text-gray-400 leading-relaxed mb-6">
//                 Đối tác tin cậy trong mọi giao dịch bất động sản. Chúng tôi cam kết mang đến dịch vụ tốt nhất.
//               </p>
//               <div className="flex space-x-4">
//                 <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
//                   <span className="text-sm font-bold">f</span>
//                 </div>
//                 <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-400 transition-colors cursor-pointer">
//                   <span className="text-sm font-bold">t</span>
//                 </div>
//                 <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-pink-600 transition-colors cursor-pointer">
//                   <span className="text-sm font-bold">ig</span>
//                 </div>
//               </div>
//             </div>

//             <div>
//               <h4 className="text-lg font-semibold mb-6">Dịch vụ</h4>
//               <ul className="space-y-3 text-gray-400">
//                 <li><a href="#" className="hover:text-white transition-colors">Mua bán nhà đất</a></li>
//                 <li><a href="#" className="hover:text-white transition-colors">Cho thuê BDS</a></li>
//                 <li><a href="#" className="hover:text-white transition-colors">Tư vấn đầu tư</a></li>
//                 <li><a href="#" className="hover:text-white transition-colors">Định giá BDS</a></li>
//                 <li><a href="#" className="hover:text-white transition-colors">Hỗ trợ pháp lý</a></li>
//               </ul>
//             </div>

//             <div>
//               <h4 className="text-lg font-semibold mb-6">Loại BDS</h4>
//               <ul className="space-y-3 text-gray-400">
//                 <li><a href="#" className="hover:text-white transition-colors">Căn hộ chung cư</a></li>
//                 <li><a href="#" className="hover:text-white transition-colors">Nhà phố</a></li>
//                 <li><a href="#" className="hover:text-white transition-colors">Villa</a></li>
//                 <li><a href="#" className="hover:text-white transition-colors">Đất nền</a></li>
//                 <li><a href="#" className="hover:text-white transition-colors">Văn phòng</a></li>
//               </ul>
//             </div>

//             <div>
//               <h4 className="text-lg font-semibold mb-6">Khu vực</h4>
//               <ul className="space-y-3 text-gray-400">
//                 <li><a href="#" className="hover:text-white transition-colors">TP. Hồ Chí Minh</a></li>
//                 <li><a href="#" className="hover:text-white transition-colors">Hà Nội</a></li>
//                 <li><a href="#" className="hover:text-white transition-colors">Đà Nẵng</a></li>
//                 <li><a href="#" className="hover:text-white transition-colors">Nha Trang</a></li>
//                 <li><a href="#" className="hover:text-white transition-colors">Vũng Tàu</a></li>
//               </ul>
//             </div>
//           </div>

//           <div className="border-t border-gray-800 pt-8">
//             <div className="flex flex-col md:flex-row justify-between items-center">
//               <p className="text-gray-400 text-sm">
//                 © 2024 RealEstate Pro. Tất cả quyền được bảo lưu.
//               </p>
//               <div className="flex space-x-6 mt-4 md:mt-0">
//                 <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Chính sách bảo mật</a>
//                 <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Điều khoản sử dụng</a>
//                 <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Sitemap</a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </footer>

//       {/* Back to top button */}
//       <button
//         onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
//         className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center z-50"
//       >
//         <ArrowRight className="h-5 w-5 transform -rotate-90" />
//       </button>
//     </div>
//   );
// }

// export default App;

import { useState, useEffect } from 'react';
import { Search, MapPin, Home, Star, Phone, Mail, ArrowRight, CheckCircle, TrendingUp, Shield, Award, Menu, X, Bed, Bath, Square, Calendar, Users, Building, DollarSign } from 'lucide-react';

// Header Component
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-lg shadow-2xl py-3' : 'bg-transparent py-5'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-amber-500/50 transition-all duration-300">
              <Building className="h-7 w-7 text-white" />
            </div>
            <div>
              <span className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                LuxEstate
              </span>
              <p className={`text-xs ${isScrolled ? 'text-gray-600' : 'text-white/80'}`}>Premium Real Estate</p>
            </div>
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            {['Trang chủ', 'Dự án', 'Dịch vụ', 'Về chúng tôi', 'Liên hệ'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className={`font-medium transition-all duration-300 hover:text-amber-500 relative group ${isScrolled ? 'text-gray-700' : 'text-white'
                  }`}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-orange-600 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <button className={`hidden md:flex items-center space-x-2 px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${isScrolled
              ? 'border-2 border-amber-500 text-amber-600 hover:bg-amber-50'
              : 'border-2 border-white text-white hover:bg-white/10'
              }`}>
              <Phone className="h-4 w-4" />
              <span>1900 1234</span>
            </button>

            <button className="px-6 py-2.5 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-full hover:shadow-lg hover:shadow-amber-500/30 transform hover:scale-105 transition-all duration-300 font-medium">
              Đặt lịch tư vấn
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg ${isScrolled ? 'text-gray-700' : 'text-white'}`}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

// Hero Section Component
const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      title: "Biệt Thự Cao Cấp",
      subtitle: "Không gian sống đẳng cấp cho gia đình hiện đại",
      highlight: "View Biển 360°"
    },
    {
      image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      title: "Penthouse Độc Đáo",
      subtitle: "Tầm nhìn panorama toàn thành phố",
      highlight: "Sky Villa"
    },
    {
      image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      title: "Resort Living",
      subtitle: "Tiện ích 5 sao ngay tại nhà",
      highlight: "Smart Home"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1500 ${currentSlide === index ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
            }`}
        >
          <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <span className="inline-block px-6 py-2 bg-amber-500/20 backdrop-blur-sm text-amber-300 rounded-full text-sm font-medium mb-6 animate-pulse">
              {slides[currentSlide].highlight}
            </span>

            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-none">
              <span className="block transform transition-all duration-700 translate-y-0">
                {slides[currentSlide].title}
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed">
              {slides[currentSlide].subtitle}
            </p>

            {/* Search Bar */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-2 border border-white/20">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
                <div className="relative">
                  <MapPin className="absolute left-4 top-4 h-5 w-5 text-white/60" />
                  <input
                    type="text"
                    placeholder="Khu vực"
                    className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 text-white placeholder-white/60 rounded-xl focus:outline-none focus:bg-white/20 transition-all"
                  />
                </div>

                <select className="px-4 py-4 bg-white/10 border border-white/20 text-white rounded-xl focus:outline-none focus:bg-white/20 transition-all">
                  <option>Loại BDS</option>
                  <option>Biệt thự</option>
                  <option>Căn hộ cao cấp</option>
                  <option>Penthouse</option>
                </select>

                <select className="px-4 py-4 bg-white/10 border border-white/20 text-white rounded-xl focus:outline-none focus:bg-white/20 transition-all">
                  <option>Mức giá</option>
                  <option>5-10 tỷ</option>
                  <option>10-20 tỷ</option>
                  <option>Trên 20 tỷ</option>
                </select>

                <button className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-4 rounded-xl hover:shadow-xl hover:shadow-amber-500/30 transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 font-medium">
                  <Search className="h-5 w-5" />
                  <span>Tìm kiếm</span>
                </button>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mt-8">
              <button className="group px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300 font-medium flex items-center space-x-2">
                <span>Xem tour 3D</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-full hover:shadow-xl hover:shadow-amber-500/30 transform hover:scale-105 transition-all duration-300 font-medium">
                Tư vấn ngay
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-300 ${currentSlide === index
              ? 'w-12 h-2 bg-gradient-to-r from-amber-500 to-orange-600'
              : 'w-2 h-2 bg-white/50 hover:bg-white/80'
              } rounded-full`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 text-white/60 animate-bounce">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-xs">Cuộn xuống</span>
          <ArrowRight className="h-5 w-5 transform rotate-90" />
        </div>
      </div>
    </section>
  );
};

// Stats Component
const StatsSection = () => {
  const stats = [
    { icon: Building, value: "5,000+", label: "Dự án cao cấp", gradient: "from-blue-500 to-indigo-600" },
    { icon: Users, value: "12,000+", label: "Khách hàng tin tưởng", gradient: "from-green-500 to-emerald-600" },
    { icon: Award, value: "15+", label: "Giải thưởng", gradient: "from-purple-500 to-pink-600" },
    { icon: TrendingUp, value: "98%", label: "Tỷ lệ hài lòng", gradient: "from-amber-500 to-orange-600" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyMHYtMkgyNHYyaDEyek0zNiA2di0ySDI0djJoMTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className={`w-20 h-20 bg-gradient-to-br ${stat.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-2xl transform group-hover:scale-110 transition-all duration-300`}>
                <stat.icon className="h-10 w-10 text-white" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Property Card Component
const PropertyCard = ({ property }) => {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500">
      <div className="relative overflow-hidden">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"
        />

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        {/* Tags */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-amber-500 text-white rounded-full text-xs font-medium shadow-lg">
            {property.status}
          </span>
          {property.featured && (
            <span className="px-3 py-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-xs font-medium shadow-lg">
              Featured
            </span>
          )}
        </div>

        {/* Price tag */}
        <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
          <p className="text-2xl font-bold text-gray-900">{property.price}</p>
          <p className="text-sm text-gray-600">{property.pricePerSqm}</p>
        </div>

        {/* Favorite button */}
        <button className="absolute top-4 right-4 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all duration-300 shadow-lg">
          <Star className="h-5 w-5 text-gray-600 hover:text-amber-500 transition-colors" />
        </button>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-1 group-hover:text-amber-600 transition-colors">
          {property.title}
        </h3>

        <div className="flex items-center text-gray-600 mb-4">
          <MapPin className="h-4 w-4 mr-2 text-amber-500" />
          <span className="text-sm">{property.location}</span>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-6 py-4 border-y border-gray-100">
          <div className="text-center">
            <div className="flex items-center justify-center text-gray-400 mb-1">
              <Bed className="h-4 w-4 mr-1" />
              <span className="text-sm">{property.beds}</span>
            </div>
            <p className="text-xs text-gray-500">Phòng ngủ</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center text-gray-400 mb-1">
              <Bath className="h-4 w-4 mr-1" />
              <span className="text-sm">{property.baths}</span>
            </div>
            <p className="text-xs text-gray-500">Phòng tắm</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center text-gray-400 mb-1">
              <Square className="h-4 w-4 mr-1" />
              <span className="text-sm">{property.area}</span>
            </div>
            <p className="text-xs text-gray-500">Diện tích</p>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop"
              alt="Agent"
              className="w-8 h-8 rounded-full"
            />
            <div>
              <p className="text-xs text-gray-500">Chuyên viên</p>
              <p className="text-sm font-medium text-gray-900">{property.agent}</p>
            </div>
          </div>

          <button className="px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-sm font-medium flex items-center space-x-1">
            <span>Chi tiết</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

// Services Section Component
const ServicesSection = () => {
  const services = [
    {
      icon: Search,
      title: "Tìm kiếm thông minh",
      description: "AI và Big Data giúp tìm BĐS phù hợp với nhu cầu và ngân sách của bạn",
      gradient: "from-blue-500 to-indigo-600",
      features: ["Gợi ý cá nhân hóa", "So sánh thị trường", "Đánh giá chuyên sâu"]
    },
    {
      icon: TrendingUp,
      title: "Phân tích đầu tư",
      description: "Dự báo xu hướng thị trường và tư vấn chiến lược đầu tư hiệu quả",
      gradient: "from-green-500 to-emerald-600",
      features: ["ROI Calculator", "Market Insights", "Risk Assessment"]
    },
    {
      icon: Shield,
      title: "Pháp lý chuyên nghiệp",
      description: "Đội ngũ luật sư đảm bảo mọi giao dịch minh bạch và an toàn",
      gradient: "from-purple-500 to-pink-600",
      features: ["Kiểm tra pháp lý", "Hợp đồng chuẩn", "Bảo hiểm giao dịch"]
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-amber-600 font-medium text-sm uppercase tracking-wider">Dịch vụ của chúng tôi</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
            Giải pháp toàn diện cho
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">
              mọi nhu cầu bất động sản
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Chúng tôi không chỉ là môi giới, mà là đối tác tin cậy trong hành trình tìm kiếm ngôi nhà mơ ước
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-orange-600/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>

              <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="w-full py-3 border-2 border-gray-200 text-gray-700 rounded-xl hover:border-amber-500 hover:text-amber-600 hover:bg-amber-50 transition-all duration-300 font-medium flex items-center justify-center space-x-2 group">
                  <span>Tìm hiểu thêm</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Main App Component
function App() {
  const [isVisible, setIsVisible] = useState({});

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

    document.querySelectorAll('[id^="animate-"]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Featured Properties Data
  const featuredProperties = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "15.8 tỷ",
      pricePerSqm: "63.2 triệu/m²",
      title: "Sky Villa Đảo Kim Cương",
      location: "Quận 2, TP.HCM",
      beds: 4,
      baths: 5,
      area: "250m²",
      status: "Độc quyền",
      featured: true,
      agent: "David Nguyễn"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "22.5 tỷ",
      pricePerSqm: "125 triệu/m²",
      title: "Penthouse The Marq",
      location: "Quận 1, TP.HCM",
      beds: 3,
      baths: 4,
      area: "180m²",
      status: "Mới",
      featured: false,
      agent: "Emma Trần"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "12.3 tỷ",
      pricePerSqm: "85 triệu/m²",
      title: "Villa Saigon Pearl",
      location: "Bình Thạnh, TP.HCM",
      beds: 4,
      baths: 3,
      area: "145m²",
      status: "Hot",
      featured: true,
      agent: "Michael Lê"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "28.9 tỷ",
      pricePerSqm: "96.3 triệu/m²",
      title: "Biệt thự Thảo Điền",
      location: "Quận 2, TP.HCM",
      beds: 5,
      baths: 6,
      area: "300m²",
      status: "Độc quyền",
      featured: false,
      agent: "Sarah Võ"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "45.5 tỷ",
      pricePerSqm: "130 triệu/m²",
      title: "Villa Compound Riviera",
      location: "Quận 7, TP.HCM",
      beds: 6,
      baths: 7,
      area: "350m²",
      status: "Premium",
      featured: true,
      agent: "James Phạm"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "9.8 tỷ",
      pricePerSqm: "54.4 triệu/m²",
      title: "Căn hộ Vinhomes Central",
      location: "Bình Thạnh, TP.HCM",
      beds: 3,
      baths: 2,
      area: "180m²",
      status: "Mới",
      featured: false,
      agent: "Lisa Hoàng"
    }
  ];

  // Testimonials Data
  const testimonials = [
    {
      name: "Nguyễn Minh Đức",
      role: "CEO Tech Company",
      content: "LuxEstate đã giúp tôi tìm được căn penthouse hoàn hảo chỉ trong 2 tuần. Dịch vụ chuyên nghiệp và tận tâm.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      project: "The Marq Penthouse"
    },
    {
      name: "Trần Thu Hà",
      role: "Nhà đầu tư",
      content: "Tôi đã đầu tư 5 căn hộ thông qua LuxEstate. Tư vấn chuyên nghiệp, phân tích thị trường chính xác.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      project: "Vinhomes Grand Park"
    },
    {
      name: "David Johnson",
      role: "Expat Manager",
      content: "As an expat, finding a home in Saigon was challenging. LuxEstate made it seamless and stress-free.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      project: "Saigon Pearl Villa"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <StatsSection />

      {/* Featured Properties Section */}
      <section id="properties" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-amber-600 font-medium text-sm uppercase tracking-wider">Bất động sản nổi bật</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
              Những cơ hội đầu tư
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">
                tốt nhất thị trường
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tuyển chọn những bất động sản cao cấp với vị trí đắc địa và tiềm năng tăng giá cao
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>

          <div className="text-center mt-16">
            <button className="group px-8 py-4 border-2 border-amber-500 text-amber-600 rounded-full hover:bg-amber-500 hover:text-white transition-all duration-300 font-medium text-lg inline-flex items-center space-x-2">
              <span>Xem tất cả dự án</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      <ServicesSection />

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-amber-600 font-medium text-sm uppercase tracking-wider">Testimonials</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
              Khách hàng nói về
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">
                trải nghiệm của họ
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500"
              >
                <div className="flex items-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-amber-400 fill-current" />
                  ))}
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4 ring-2 ring-amber-100"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-sm text-gray-500">
                    <span className="font-medium">Dự án:</span> {testimonial.project}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] opacity-20 bg-cover bg-center"></div>

        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Bắt đầu hành trình tìm kiếm
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
              ngôi nhà mơ ước
            </span>
          </h2>

          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Đội ngũ chuyên gia của chúng tôi sẵn sàng tư vấn và đồng hành cùng bạn 24/7
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="group px-10 py-5 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-full hover:shadow-2xl hover:shadow-amber-500/30 transform hover:scale-105 transition-all duration-300 font-medium text-lg flex items-center justify-center space-x-3">
              <Phone className="h-6 w-6" />
              <span>Hotline: 1900 1234</span>
            </button>

            <button className="group px-10 py-5 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300 font-medium text-lg flex items-center justify-center space-x-3">
              <Calendar className="h-6 w-6" />
              <span>Đặt lịch xem nhà</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="mt-12 flex items-center justify-center space-x-8 text-white/60">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-green-400" />
              <span>Miễn phí tư vấn</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-green-400" />
              <span>Hỗ trợ 24/7</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-green-400" />
              <span>Cam kết uy tín</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2 lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center">
                  <Building className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">LuxEstate</h3>
                  <p className="text-xs text-gray-400">Premium Real Estate</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                Chúng tôi không chỉ bán bất động sản, mà còn kiến tạo những không gian sống đẳng cấp và bền vững cho tương lai.
              </p>
              <div className="flex space-x-4">
                {['facebook', 'instagram', 'linkedin', 'youtube'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-amber-500 hover:to-orange-600 transition-all duration-300"
                  >
                    <span className="text-xs font-bold">{social[0]}</span>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">Dịch vụ</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-amber-400 transition-colors">Mua bán BĐS</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Cho thuê cao cấp</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Tư vấn đầu tư</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Quản lý tài sản</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Định giá BĐS</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">Khu vực</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-amber-400 transition-colors">Quận 1</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Quận 2 - Thủ Đức</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Quận 7</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Bình Thạnh</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Phú Mỹ Hưng</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">Liên hệ</h4>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-amber-500 mt-1" />
                  <span>Bitexco Tower, 2 Hải Triều, Q.1, TP.HCM</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-amber-500" />
                  <span>1900 1234</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-amber-500" />
                  <span>contact@luxestate.vn</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-500 text-sm">
                © 2024 LuxEstate. All rights reserved. Powered by Innovation.
              </p>
              <div className="flex space-x-6 text-sm">
                <a href="#" className="text-gray-500 hover:text-amber-400 transition-colors">Chính sách bảo mật</a>
                <a href="#" className="text-gray-500 hover:text-amber-400 transition-colors">Điều khoản sử dụng</a>
                <a href="#" className="text-gray-500 hover:text-amber-400 transition-colors">Sitemap</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center z-50 group"
      >
        <ArrowRight className="h-6 w-6 transform -rotate-90 group-hover:-translate-y-1 transition-transform" />
      </button>
    </div>
  );
}

export default App;