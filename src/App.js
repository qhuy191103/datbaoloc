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
import FloatingForm from './components/FloatingForm';
import StatsSection from './components/StatsSection';
import FeatuaredProperties from './components/FeaturedProperties';
import Swipper from './components/Swipper';
import WhyChooseUs from './components/WhyChooseUs';
import MapSlide from './components/MapSlide';
import LegalSection from './components/LegalSection';
import Footer from './components/Footer';
import zaloLogo from './assets/images/Icon-Zalo-2021.png';


function App() {
  const [showForm, setShowForm] = useState(true);
  return (
    <div className="min-h-screen bg-transparent">
      {showForm && <FloatingForm closeForm={() => setShowForm(false)} />}
      <Header />
      <HeroSection />
      <StatsSection />
      <FeatuaredProperties />
      <Swipper />
      <LegalSection />
      <MapSlide />
      <Videos />
      <Footer />
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-blue-800 to-purple-800 text-orange-300 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center z-50"
      >
        <ArrowRight className="h-5 w-5 transform -rotate-90" />
      </button>

      {/* Logo Zalo & Số điện thoại */}
      <div className="fixed bottom-8 left-8 flex items-center space-x-2 z-50">
        <a
          href="https://zalo.me/0941366369"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center"
          title="Chat Zalo"
        >
          <img src={zaloLogo} alt="Zalo" className="w-10 h-9" />
        </a>
        <span className="text-white bg-blue-500 px-2 py-1 rounded-md shadow-lg">
          0941366369
        </span>
      </div>
    </div>
  );
}

export default App;