import React, { useState, useEffect } from "react";
import { ArrowRight, X } from "lucide-react";
import AnhDuy from '../assets/images/anhduydeptrai.jpg';

const FloatingForm = ({ closeForm }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    note: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => setNotification(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formBody = new URLSearchParams(formData).toString();

    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbztxWUeZziMff325TEdo-5JUGtf3o583v1-ZZY_iSFBiE9m3xZoJdKHiSFsybdJNOHt/exec", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formBody,
      });

      const result = await response.json();
      if (result.success) {
        setNotification({ type: "success", message: "✅ Gửi thành công!" });
        setFormData({ name: "", phone: "", email: "", note: "" });
      } else {
        setNotification({ type: "error", message: "❌ Gửi thất bại. Vui lòng thử lại." });
      }
    } catch (error) {
      console.error("Lỗi:", error);
      setNotification({ type: "error", message: "⚠️ Có lỗi xảy ra. Vui lòng thử lại sau." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="px-5 fixed inset-2 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full relative overflow-hidden">
        {/* Nút đóng */}
        <button
          onClick={closeForm}
          className="absolute top-4 right-4 text-gray-400 hover:text-teal-600 transition z-10 bg-white rounded-full p-1 shadow-lg"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex">
          {/* Phần ảnh bên trái */}
          <div className="hidden md:block md:w-1/2 relative">
            <div className="h-full bg-gradient-to-br from-blue-500 via-purple-600 to-teal-500 flex items-center justify-center relative overflow-hidden">
              <img
                src={AnhDuy}
                alt="Pháp lý bất động sản"
                className="w-full h-full object-cover"
              />

            </div>
          </div>

          {/* Phần form bên phải */}
          <div className="w-full md:w-1/2 p-6">
            <h2 className="text-xl font-bold text-blue-700 mb-4 text-center md:text-left" style={{
              background: "linear-gradient(to right, #caa340)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              paddingBottom: "1rem"
            }}>Nhận thông tin tư vấn</h2>

            {/* Notification */}
            {notification && (
              <div
                className={`mb-3 text-sm text-center font-medium rounded px-3 py-2 transition-all duration-300 ${notification.type === "success"
                  ? "bg-teal-100 text-teal-800"
                  : "bg-red-100 text-red-700"
                  }`}
              >
                {notification.message}
              </div>
            )}

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Họ và tên *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-700 text-sm"
                  placeholder="Nhập họ và tên"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Số điện thoại *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-700 text-sm"
                  placeholder="0123 456 789"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-700 text-sm"
                  placeholder="email@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Ghi chú</label>
                <textarea
                  name="note"
                  value={formData.note}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-700 text-sm resize-none"
                  placeholder="Mô tả nhu cầu..."
                />
              </div>

              <button
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting}
                style={{
                  background: "linear-gradient(to right, #caa340)",
                }}
                className="w-full text-white px-4 py-2 rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 font-semibold text-sm disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Đang gửi...</span>
                  </>
                ) : (
                  <>
                    <ArrowRight className="h-5 w-5" />
                    <span>Gửi thông tin liên hệ</span>
                  </>
                )}
              </button>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatingForm;