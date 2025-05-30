import React from 'react';
import background2 from '../assets/images/background2.jpg';
import GiayChungNhan from '../assets/images/GiayChungNhan.png';
import { Search, TrendingUp, Shield } from 'lucide-react';

function LegalSection() {
  return (
    <section
      className="relative py-20 w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${background2})` }}
    >
      {/* Overlay background blur */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-md z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* SERVICES */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold font-playfair text-white mb-4" data-aos="fade-up">
            Dịch Vụ Của Chúng Tôi
          </h2>
          <p
            className="font-thin text-xl text-gray-200 max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Đội ngũ chuyên gia giàu kinh nghiệm luôn sẵn sàng hỗ trợ bạn trong mọi giao dịch bất động sản tại dự án Sun Valley, đảm bảo quá trình đầu tư, mua bán diễn ra thuận lợi, minh bạch và hiệu quả nhất.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-28">
          <div
            className="text-center p-8 bg-white/30 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Tìm kiếm BĐS</h3>
            <p className="text-white/90 leading-relaxed">
              Hệ thống tìm kiếm thông minh giúp bạn tìm được bất động sản phù hợp nhất với nhu cầu và ngân sách.
            </p>
          </div>

          <div
            className="text-center p-8 bg-white/30 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <TrendingUp className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Tư vấn đầu tư</h3>
            <p className="text-white/90 leading-relaxed">
              Phân tích thị trường chuyên sâu và tư vấn chiến lược đầu tư hiệu quả để tối đa hóa lợi nhuận.
            </p>
          </div>

          <div
            className="text-center p-8 bg-white/30 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Hỗ trợ pháp lý</h3>
            <p className="text-white/90 leading-relaxed">
              Đội ngũ luật sư chuyên nghiệp hỗ trợ thủ tục pháp lý, đảm bảo giao dịch an toàn và minh bạch.
            </p>
          </div>
        </div>


        {/* LEGAL SECTION */}
        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Image Block */}
          <div className="w-full lg:w-2/3 h-[300px] md:h-[400px] lg:h-[500px] relative rounded-3xl shadow-[0_15px_50px_rgba(0,0,0,0.3)] overflow-hidden hover:shadow-[0_20px_70px_rgba(0,0,0,0.4)] transition-all duration-500 hover:-translate-y-1">
            <img
              src={GiayChungNhan}
              alt="Pháp lý bất động sản"
              className="w-full h-full object-cover"
            />
            {/* Bỏ phần overlay dưới đây nếu không muốn ảnh bị mờ */}
            {/* <div className="absolute inset-0 bg-black/40"></div> */}
          </div>


          {/* Content Block */}
          <div className="w-full lg:w-1/2 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 p-6 md:p-8 lg:p-10 text-white">
            <h2 className="font-playfair text-2xl md:text-3xl lg:text-4xl font-extrabold mb-4 text-center">
              Pháp Lý Minh Bạch - An Toàn
            </h2>

            <h3 className="text-base md:text-lg lg:text-xl font-thin mb-6 text-center uppercase tracking-wide">
              Bảo Chứng Quyền Lợi – Kiến Tạo Tương Lai
            </h3>

            <p className="text-sm md:text-base lg:text-lg leading-relaxed mb-6 text-center">
              Tại <strong className="text-white">Sun Valley</strong>, chúng tôi tin rằng quyết định đầu tư đúng đắn bắt đầu từ nền tảng pháp lý rõ ràng. Vì vậy:
            </p>

            <div className="space-y-4 text-sm md:text-base lg:text-lg">
              <div className="flex items-start gap-2">
                <span className="mt-1">•</span>
                <p>
                  <strong>Mỗi lô đất</strong> đều có sổ hồng riêng, do cơ quan chức năng cấp, mang đến sự an tâm tuyệt đối khi giao dịch.
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1">•</span>
                <p>
                  <strong>Hồ sơ pháp lý</strong> rõ ràng, minh bạch và luôn sẵn sàng để kiểm chứng.
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1">•</span>
                <p>
                  <strong>Tiến độ pháp lý</strong> được kiểm soát chặt chẽ, đảm bảo thủ tục sở hữu diễn ra nhanh chóng.
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1">•</span>
                <p>
                  <strong>Cam kết sở hữu lâu dài</strong>, thích hợp cho cả đầu tư và an cư bền vững.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default LegalSection;
