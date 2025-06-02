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
    </div>
  );
}

export default App;