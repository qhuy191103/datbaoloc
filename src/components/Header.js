import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-transparent backdrop-blur-md shadow-lg z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <img
              src="https://sunvalley.vn/wp-content/uploads/2018/12/sun-valley.png"
              alt="Mô tả ảnh"
              className="w-30 h-20 object-cover rounded-md"
            />
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-orange-200 hover:text-blue-600 transition-colors font-medium"
            >
              Trang chủ
            </a>
            <a
              href="#properties"
              className="text-orange-200 hover:text-blue-600 transition-colors font-medium"
            >
              Bất động sản
            </a>
            <a
              href="#services"
              className="text-orange-200 hover:text-blue-600 transition-colors font-medium"
            >
              Dịch vụ
            </a>
            <a
              href="#contact"
              className="text-orange-200 hover:text-blue-600 transition-colors font-medium"
            >
              Tổng quan dự án
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
