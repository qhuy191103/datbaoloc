import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-transparent backdrop-blur-2xl shadow-lg z-50 transition-all duration-300">
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
              href="#properties"
              className="text-yellow-400 hover:text-yellow-500 transition-colors font-medium text-lg"
            >
              Tổng quan dự án
            </a>
            <a
              href="#location"
              className="text-yellow-400 hover:text-yellow-500 transition-colors font-medium text-lg"
            >
              Vị trí dự án
            </a>
            <a
              href="#legalsection"
              className="text-yellow-400 hover:text-yellow-500 transition-colors font-medium text-lg"
            >
              Pháp lý dự án
            </a>
            <a
              href="#contact"
              className="text-yellow-400 hover:text-yellow-500 transition-colors font-medium text-lg"
            >
              360°
            </a>
            <a
              href="#contactme"
              className="text-amber-400 hover:text-yellow-500 transition-colors font-medium text-lg"
            >
              Liên hệ tư vấn
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
