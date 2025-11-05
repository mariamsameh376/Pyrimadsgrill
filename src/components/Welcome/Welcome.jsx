import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Welcome = () => {
  return (
    <div className="font-sans bg-gradient-to-b from-[#fffaf4] to-[#fff] min-h-screen">
      {/* العنوان */}
      <motion.div
        className="text-center py-10 border-b border-gray-200"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >

      </motion.div>

      {/* قسم الترحيب */}
      <div className="flex flex-col md:flex-row items-center justify-center py-16 px-6 md:px-16 gap-10">
        {/* الصورة */}
        <motion.div
          className="flex-1 relative group"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src="/assets/Blue Minimalist Ramadan Sales and Promos Sale Flyer.png"
            alt="OOTA Egyptian Restaurant"
            className="rounded-3xl shadow-xl w-full h-[350px] md:h-[500px] object-cover transform group-hover:scale-105 transition duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500" />
        </motion.div>

        {/* النص */}
        <motion.div
          className="flex-1 text-center md:text-left max-w-xl"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight text-[#1a1a1a]">
            Welcome to Pyramids <span className="text-[#D42A1B]">Grill</span>
            
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
            Dive into the heart of Egypt’s culinary tradition. From sizzling
            shawarmas to creamy koshary, every bite tells a story crafted with
            passion and family heritage.
          </p>

          <Link
            to="/menu"
            className="inline-block bg-[#D42A1B] text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-[#b21f13] hover:shadow-2xl transition duration-300"
          >
            Explore Our Menu
          </Link>
        </motion.div>
      </div>

      {/* تذييل بسيط */}
      <motion.div
        className="text-center py-6 text-gray-500 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
 
      </motion.div>
    </div>
  );
};

export default Welcome;
