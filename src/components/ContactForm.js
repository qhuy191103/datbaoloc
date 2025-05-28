// import React, { useState } from 'react';
// import { ArrowRight } from 'lucide-react';

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     phone: '',
//     email: '',
//     note: ''
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     try {
//       const response = await fetch(
//         'https://script.google.com/macros/s/AKfycbz0pwRtIRx8xkNvQv0n2hrL8aNLg8WAC6AHUC36DsoBcem11Z4fc_FmhB0Q-XtJf2CN/exec',
//         {
//           method: 'POST',
//           headers: { 'Content-Type': 'application/json' },
//           body: JSON.stringify(formData)
//         }
//       );

//       const result = await response.json();
//       if (result.success) {
//         alert('Gửi thành công!');
//         setFormData({ name: '', phone: '', email: '', note: '' });
//       } else {
//         alert('Gửi thất bại. Vui lòng thử lại.');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       alert('Có lỗi xảy ra. Vui lòng thử lại sau.');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="space-y-6">
//       <div className="space-y-6">
//         <div className="group">
//           <label className="block text-sm font-medium text-gray-300 mb-2">
//             Họ và tên *
//           </label>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleInputChange}
//             required
//             className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
//             placeholder="Nhập họ và tên của bạn"
//           />
//         </div>

//         <div className="group">
//           <label className="block text-sm font-medium text-gray-300 mb-2">
//             Số điện thoại *
//           </label>
//           <input
//             type="tel"
//             name="phone"
//             value={formData.phone}
//             onChange={handleInputChange}
//             required
//             className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
//             placeholder="0123 456 789"
//           />
//         </div>

//         <div className="group">
//           <label className="block text-sm font-medium text-gray-300 mb-2">
//             Email
//           </label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleInputChange}
//             className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
//             placeholder="email@example.com"
//           />
//         </div>
//       </div>

//       <div className="group">
//         <label className="block text-sm font-medium text-gray-300 mb-2">
//           Ghi chú
//         </label>
//         <textarea
//           name="note"
//           value={formData.note}
//           onChange={handleInputChange}
//           rows={4}
//           className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 resize-none"
//           placeholder="Mô tả chi tiết nhu cầu của bạn..."
//         />
//       </div>

//       <button
//         type="submit"
//         disabled={isSubmitting}
//         className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 text-white px-8 py-4 rounded-lg hover:shadow-2xl hover:shadow-blue-500/25 transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center space-x-3 font-semibold text-lg disabled:opacity-50"
//       >
//         {isSubmitting ? (
//           <>
//             <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
//             <span>Đang gửi...</span>
//           </>
//         ) : (
//           <>
//             <ArrowRight className="h-6 w-6" />
//             <span>Gửi thông tin liên hệ</span>
//           </>
//         )}
//       </button>
//     </form>
//   );
// };

// export default ContactForm;
import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    note: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbzpGRO6Ccf4I_Ulitm60xbz2zWBaEjas-ytc1ocOdkSocBFAPkqI3L-JXkaA0iSWd4y/exec", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.success) {
        alert("✅ Gửi thành công!");
        setFormData({ name: "", phone: "", email: "", note: "" });
      } else {
        alert("❌ Gửi thất bại. Vui lòng thử lại.");
      }
    } catch (error) {
      console.error("Lỗi:", error);
      alert("⚠️ Có lỗi xảy ra. Vui lòng thử lại sau.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px", width: "300px" }}>
      <input
        type="text"
        name="name"
        placeholder="Họ và tên"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="tel"
        name="phone"
        placeholder="Số điện thoại"
        value={formData.phone}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />
      <textarea
        name="note"
        placeholder="Ghi chú"
        value={formData.note}
        onChange={handleChange}
      />
      <button type="submit" disabled={isLoading}>
        {isLoading ? "Đang gửi..." : "Gửi"}
      </button>
    </form>
  );
};

export default ContactForm;
