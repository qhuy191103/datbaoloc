import { useState, useEffect } from 'react';
import { Search, Star, ArrowRight, CheckCircle, TrendingUp, Shield, Facebook, Twitter, Instagram, Mail, MapPin } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './components/Header';
import Videos from './components/Videos';
import HeroSection from './components/HeroSection';
import StatsSection from './components/StatsSection';
import FeatuaredProperties from './components/FeaturedProperties';
import Swipper from './components/Swipper';
import WhyChooseUs from './components/WhyChooseUs';
import MapSlide from './components/MapSlide';
import LegalSection from './components/LegalSection';
import Footer from './components/Footer';
import zaloLogo from './assets/images/zalo.jpg';


function App() {

  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);


  return (
    <div className="min-h-screen bg-transparent">

      {/* Header */}
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* Stats Section */}
      <StatsSection />

      {/* Featured Properties */}
      <FeatuaredProperties />

      {/* hahaha */}
      <Swipper />

      {/* LegalSection */}
      <LegalSection />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* 3D Slide */}
      <MapSlide />

      <Videos />

      {/* footer */}
      <Footer />

      {/* Back to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-blue-800 to-purple-800 text-orange-300 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center z-50"
      >
        <ArrowRight className="h-5 w-5 transform -rotate-90" />
      </button>
      <a
        href="https://zalo.me/"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 right-8 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center z-50"
        title="Chat Zalo"
      >
        <img src={zaloLogo} alt="Zalo" className="w-9 h-7" />
      </a>


    </div>
  );
}

export default App;