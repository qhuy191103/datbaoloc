import React from 'react'
import { CheckCircle } from 'lucide-react';

function WhyChooseUs() {
  return (<section className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

        {/* Nội dung bên trái: 5/12 */}
        <div className="lg:col-span-5">
          <h2 className="text-4xl md:text-5xl font-bold font-playfair text-gray-900 mb-6">
            Tại Sao Chọn Chúng Tôi?
          </h2>

          <p className=" font-thin text-xl text-gray-600 mb-8">
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
  </section>);
}

export default WhyChooseUs;