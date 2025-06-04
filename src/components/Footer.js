import React from 'react';
import {
  Mail,
  MapPin,
  Phone,
} from 'lucide-react';
import ContactForm from './ContactForm';

function Footer() {
  return (
    <section id="contactme">
      <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-500 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
            {/* Cột 1 - Giới thiệu */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-6">Thông tin liên hệ</h3>

              <div className="space-y-4 text-gray-300 text-base">
                <div className="flex items-start space-x-3">
                  <span className="font-medium">Đầu tư & phát triển:</span>
                  <span>Khải Hưng Corp</span>
                </div>

                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-blue-400 mt-1" />
                  <span>84 – 86 Bát Nàn, Bình Trưng Tây, TP. Thủ Đức, TP.HCM</span>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-blue-400 mt-1" />
                  <span>0941 366 369</span>
                </div>

                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-blue-400 mt-1" />
                  <span>info.vunguyen@gmail.com</span>
                </div>

                <div className="flex items-start space-x-3">
                  <span className="font-medium">Website:</span>
                  <a
                    href="https://sunvalley.com.vn/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    sunvalley.com.vn

                  </a>
                </div>
              </div>
            </div>

            {/* Cột 2 - Bản đồ */}
            <div>

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9507.945158748726!2d107.80289825042452!3d11.60111513749731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3173f1ae3e9d8cb9%3A0x623cceff4dbaf60!2zU3VuIFZhbGxleSBC4bqjbyBM4buZYyBLaOG6o2kgSMawbmc!5e0!3m2!1svi!2s!4v1749004750991!5m2!1svi!2s"
                width="100%"
                height="550"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>

            </div>

            {/* Cột 3 - Contact form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}

export default Footer;
