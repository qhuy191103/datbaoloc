import React from 'react'
import { Search, Star, ArrowRight, CheckCircle, TrendingUp, Shield, Facebook, Twitter, Instagram, Mail, MapPin } from 'lucide-react';
import ContactForm from './ContactForm';

function Footer() {
  return (<footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
    {/* Background decoration */}
    <div className="absolute inset-0 opacity-5">
      <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-500 rounded-full blur-3xl"></div>
    </div>

    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">

        {/* Company Info Section */}
        <div className="lg:col-span-1">
          <div className="flex items-center space-x-3 mb-6">
            <img
              src="https://sunvalley.vn/wp-content/uploads/2018/12/sun-valley.png"
              alt="Sun Valley Logo"
              className="w-32 h-16 object-contain"
            />
          </div>

          <p className="text-gray-300 leading-relaxed mb-8 text-lg">
            Đối tác tin cậy trong mọi giao dịch bất động sản. Chúng tôi cam kết mang đến dịch vụ tốt nhất với đội ngũ chuyên nghiệp và kinh nghiệm.
          </p>

          {/* Contact Info */}
          <div className="space-y-4 mb-8">
            <div className="flex items-center space-x-3 text-gray-300">
              <div className="h-5 w-5 bg-blue-400 rounded-sm flex items-center justify-center text-xs font-bold">📞</div>
              <span>0123 456 789</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-300">
              <Mail className="h-5 w-5 text-blue-400" />
              <span>info@sunvalley.vn</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-300">
              <MapPin className="h-5 w-5 text-blue-400" />
              <span>123 Đường ABC, Quận 1, TP.HCM</span>
            </div>
          </div>

          {/* Social Media */}
          <div className="flex space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center hover:from-blue-500 hover:to-blue-600 transition-all duration-300 cursor-pointer group">
              <Facebook className="h-6 w-6 group-hover:scale-110 transition-transform" />
            </div>
            <div className="w-12 h-12 bg-gradient-to-r from-sky-500 to-sky-600 rounded-xl flex items-center justify-center hover:from-sky-400 hover:to-sky-500 transition-all duration-300 cursor-pointer group">
              <Twitter className="h-6 w-6 group-hover:scale-110 transition-transform" />
            </div>
            <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl flex items-center justify-center hover:from-pink-400 hover:to-purple-500 transition-all duration-300 cursor-pointer group">
              <Instagram className="h-6 w-6 group-hover:scale-110 transition-transform" />
            </div>
          </div>
        </div>

        <div className="lg:col-span-2">
          <ContactForm />
          {/*  */}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-white/10 pt-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm">
            © 2025 Sun Valley. Tất cả quyền được bảo lưu.
          </p>
          <div className="flex flex-wrap justify-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors hover:underline">
              Chính sách bảo mật
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors hover:underline">
              Điều khoản sử dụng
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors hover:underline">
              Hỗ trợ khách hàng
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
  );
}

export default Footer;