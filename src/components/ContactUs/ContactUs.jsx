import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const fadeIn = (direction = "up", delay = 0) => ({
  hidden: { opacity: 0, y: direction === "up" ? 40 : -40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.8, ease: "easeOut" },
  },
});

const ContactUs = () => {
  return (
    <div className="bg-black text-white min-h-screen py-16 px-6 relative overflow-hidden">
      {/* خلفية متدرجة */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#39FF14]/5 via-transparent to-[#ff0000]/5 pointer-events-none"></div>

      {/* العنوان */}
      <motion.div
        variants={fadeIn("up", 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative text-center mb-16 z-10"
      >
        <h1 className="text-5xl md:text-6xl font-impact text-[#39FF14] mb-4 tracking-wider">
          Contact Us
        </h1>
        <div className="w-32 h-[3px] bg-gradient-to-r from-[#39FF14] to-[#ff0000] mx-auto mb-6 rounded-full"></div>
        <p className="text-lg text-gray-300 font-poppins">
          We’d love to hear from you! Get in touch with us for reservations, catering, or feedback.
        </p>
      </motion.div>

      {/* المحتوى */}
      <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 z-10">
        {/* الفورم */}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="bg-neutral-900/70 border border-[#39FF14]/30 hover:border-[#39FF14]/60 backdrop-blur-md p-8 rounded-2xl shadow-lg transition-transform hover:scale-[1.02] duration-300 order-2 md:order-1"
        >
          <h2 className="text-2xl font-bold text-[#39FF14] mb-6">
            Send us a Message
          </h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 rounded-lg bg-neutral-800 text-white focus:outline-none focus:ring-2 focus:ring-[#39FF14]/60"
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-3 rounded-lg bg-neutral-800 text-white focus:outline-none focus:ring-2 focus:ring-[#39FF14]/60"
              required
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="w-full p-3 rounded-lg bg-neutral-800 text-white focus:outline-none focus:ring-2 focus:ring-[#39FF14]/60"
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full p-3 rounded-lg bg-neutral-800 text-white focus:outline-none focus:ring-2 focus:ring-[#39FF14]/60"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-[#39FF14] hover:bg-[#ff0000] transition-colors py-3 rounded-lg font-bold text-lg text-black shadow-md hover:shadow-[0_0_15px_#ff0000]"
            >
              Send Message
            </button>
          </form>
        </motion.div>

        {/* معلومات التواصل */}
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col justify-center space-y-6 order-1 md:order-2 bg-neutral-900/70 border border-[#ff0000]/30 hover:border-[#39FF14]/50 backdrop-blur-md p-8 rounded-2xl shadow-lg transition-transform hover:scale-[1.02] duration-300"
        >
          <div className="flex items-center space-x-4">
            <Phone className="w-8 h-8 text-[#39FF14]" />
            <div>
              <h3 className="text-xl font-bold text-[#39FF14]">Call Us</h3>
              <p className="text-gray-300">+1 (615) 720-2500</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Mail className="w-8 h-8 text-[#39FF14]" />
            <div>
              <h3 className="text-xl font-bold text-[#39FF14]">Email Us</h3>
              <p className="text-gray-300">info@pyramidsgrill.com</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <MapPin className="w-8 h-8 text-[#39FF14]" />
            <div>
              <h3 className="text-xl font-bold text-[#39FF14]">Visit Us</h3>
              <p className="text-gray-300">1123 N Castle Heights Ave suite D, Lebanon, TN, United States, Tennessee</p>
            </div>
          </div>

          <div className="mt-6">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3218.5680554732585!2d-86.2926004!3d36.2256925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88642035db2119eb%3A0x332dcc292899d50f!2s1123%20F%20N%20Castle%20Heights%20Ave%20D%2C%20Lebanon%2C%20TN%2037087%2C%20USA!5e0!3m2!1sen!2seg!4v1762347575761!5m2!1sen!2seg"
              className="w-full h-64 rounded-2xl border-0 shadow-md"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactUs;
