import React from 'react'
import { Star } from 'lucide-react';

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


function Testimonials() {
  return (<section className="py-20">
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
  </section>);
}

export default Testimonials;