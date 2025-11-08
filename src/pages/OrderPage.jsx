// src/pages/OrderPage.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../assets/logo.png"; // ✅ استدعاء صورة اللوجو

const OrderPage = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 pt-20 pb-12">
      {/* 🔹 اللوجو القابل للضغط */}
      <Link to="/">
        <motion.img
          src={logo}
          alt="OOTA Logo"
          className="h-24 w-auto mb-10 cursor-pointer hover:scale-105 transition-transform duration-300"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        />
      </Link>

      {/* العنوان */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl md:text-6xl font-bold text-[#39FF14] mb-6 text-center"
      >
        How Would You Like to Order?
      </motion.h1>

      {/* النص التعريفي */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-gray-300 text-lg mb-12 text-center max-w-2xl"
      >
        Choose whether you’d like to pick up your meal yourself or have it delivered right to your door!
      </motion.p>

      {/* الزرين */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* زر Pickup */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="bg-[#39FF14] text-black rounded-2xl px-10 py-6 font-bold text-2xl shadow-lg hover:shadow-[#39FF14]/60 transition-all"
        >
          <a
            href="https://www.doordash.com/store/33171781?utm_source=mx_share"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3"
          >
            🚗 <span>Pick Up</span>
          </a>
        </motion.div>

        {/* زر Delivery */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="bg-white text-black rounded-2xl px-10 py-6 font-bold text-2xl shadow-lg hover:bg-[#39FF14] hover:text-black transition-all"
        >
          <a
            href="https://www.ubereats.com/store/pyramids-grill/D6NDUhkXXjekqQLW6n0fsg?diningMode=DELIVERY"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3"
          >
            🏠 <span>Delivery</span>
          </a>
        </motion.div>
      </div>

      {/* 🔸 Feedback Teaser */}
      <div className="mt-20 text-center">
        <p className="text-gray-300 text-lg mb-3">
          See what others think of <span className="text-[#39FF14] font-semibold">Pyramids Grill</span> 👉
        </p>
        <Link
          to="/testimonials"
          className="bg-[#39FF14] text-black px-6 py-2 rounded-full font-semibold hover:bg-white transition-all shadow-md"
        >
          View Testimonials
        </Link>
      </div>

      {/* 🔸 خريطة المطعم */}
      <div className="mt-16 w-full max-w-3xl">
        <h2 className="text-2xl font-bold mb-4 text-[#39FF14] text-center">
          Find Us Here
        </h2>
        <div className="rounded-2xl overflow-hidden shadow-lg border border-[#39FF14]/30">
          <iframe
            title="Pyrimads Grill Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3218.5680554732585!2d-86.2926004!3d36.2256925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88642035db2119eb%3A0x332dcc292899d50f!2s1123%20F%20N%20Castle%20Heights%20Ave%20D%2C%20Lebanon%2C%20TN%2037087%2C%20USA!5e0!3m2!1sen!2seg!4v1762347575761!5m2!1sen!2seg"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* 🔸 زر الرجوع */}
      <Link
        to="/"
        className="mt-12 text-[#39FF14] hover:underline text-lg font-medium"
      >
        ← Back to Home
      </Link>
    </div>
  );
};

export default OrderPage;
