import React from 'react'
import { Star } from 'lucide-react';

const properties = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Sun Valley Coffee",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Hồ cánh bướm",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Club house - Sky bar",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Hồ Chanson",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Khu vườn Yoga",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1594484208280-efa00f96fc21?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Tuyến phố Shophouse",
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1596276020587-8044fe049813?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Khu vui chơi trẻ em",
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1560749003-f4b1e17e2dff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Nông trại Organic",
  },
  {
    id: 9,
    image: "https://images.unsplash.com/photo-1587162146766-e06b1189b907?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Công viên mê cung Pisani",
  },
  {
    id: 10,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Sky Central Park - Babylon Garden",
  }
];
function FeatuaredProperties() {
  return (<section id="properties" className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Tiện ích nội khu
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Tận hưởng không gian sống đẳng cấp với hệ thống tiện ích nội khu đa dạng và đẳng cấp
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-7">
        {properties.map((property, index) => (
          <div
            key={property.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:scale-105 transition-all duration-500"
            id={`property-${index}`}
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="relative">
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-64 object-cover"
              />
              <div className="absolute top-4 left-4" />
              <div className="absolute top-4 right-4">
                <button className="w-10 h-10 bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition-colors">
                  <Star className="h-5 w-5 text-gray-600" />
                </button>
              </div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-3">
                <h2 className="text-xl font-bold text-gray-900 leading-tight">
                  {property.title}
                </h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>);
}

export default FeatuaredProperties;