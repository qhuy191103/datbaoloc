import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Header from './components/Header';
import Videos from './components/Videos';
import HeroSection from './components/HeroSection';
import FloatingForm from './components/FloatingForm';
import FeatuaredProperties from './components/FeaturedProperties';
import Swipper from './components/Swipper';
import MapSlide from './components/MapSlide';
import LegalSection from './components/LegalSection';
import Footer from './components/Footer';
import QuoteComponent from './components/Quote';

import zaloLogo from './assets/images/Icon-Zalo-2021.png';
import PhoneCall from './assets/images/phone-call.png';

function App() {
  return (
    <div className="relative min-h-screen bg-white">
      {/* Fixed Header */}
      <Header />

      {/* QuoteComponent hiển thị đầu tiên (full height) */}
      <div className="relative h-screen z-0">
        <QuoteComponent />
      </div>

      {/* Main content cuộn đè lên QuoteComponent */}
      <div className="relative z-10 -mt-40 pt-20">
        <HeroSection />
        <FeatuaredProperties />
        <Swipper />
        <LegalSection />
        <MapSlide />
        <Videos />
        <Footer />

        {/* Scroll to Top Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-blue-900 to-purple-900 text-orange-300 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center z-50"
        >
          <ArrowRight className="h-5 w-5 transform -rotate-90" />
        </button>

        {/* Contact Buttons */}
        <div className="fixed bottom-8 left-8 flex flex-col items-center space-y-3 z-50">
          {/* Zalo Contact */}
          <a
            href="https://zalo.me/0907210293"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-blue-600 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center"
            title="Chat Zalo"
          >
            <img src={zaloLogo} alt="Zalo" className="w-10 h-9" />
          </a>

          {/* Phone Contact */}
          <a
            href="tel:0907210293"
            className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 border-white text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center"
            title="Gọi ngay"
          >
            <img src={PhoneCall} alt="Call" className="w-10 h-10" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
