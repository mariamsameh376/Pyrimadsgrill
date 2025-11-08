import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, X } from "lucide-react";
import { Link } from "react-router-dom";

const initialTestimonials = [
  { name: "Dalton Harper", text: "The restaurant is very clean and friendly. Really liked the shawarma plate — my new go-to spot! Freshly made food and great vibes. ❤️" },
  { name: "Slœpe Su", text: "Really good food and very nice people highly recommend, 10/10 👍🏼" },
  { name: "Murray Jacket", text: "My husband and I tried it with our 3 year old for the first time today - we will DEFINITELY be going back! It was clean, staff was friendly and prompt, and the food was DELICIOUS! Well seasoned lamb, perfect pita, and the sauces  - yum! Plus the portions were very large." },
  { name: "Jay White", text: "Finally, a great gyro shop in Lebanon!" },
  { name: "Lane Crockarell", text: "Everything I ordered was great! I absolutely love Mediterranean food and they didn't disappoint. Every person there was nice and helpful. I'll DEFINITELY be going back! This might be our weekly take-out order." },
  { name: "Bijan Dabiri", text: "need more places like this in Lebanon, love the gyros and taboule" },
  { name: "Jennifer Goolsby Dies", text: "We ordered a double cheeseburger, fries, and a mix grill plate. It was absolutely AMAZING! This is my new go to place. They are friendly, great prices, and the food is so fresh! I would give 10 stars if I could." },
  { name: "Brittany Watkins-Barrera", text: "Food was amazing and service is so friendly! Can't eay enough great things!" },
  { name: "Bethany Shay Edgewortrth", text: "Absolutely amazing! I had the lamb gyro plate, and it was delicious! 😊" },
  { name: "Michelle Hayes Cannon", text: "We needed something new and different in Lebanon and WOW!! This place is amazing. We’ve had the chicken plate, lamb gyro, and chicken gyro!! Everything has been delicious!🤤 They have a big fan in me and my household (and bonus points that it’s right down the road from me) 🩷" },

];

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState(initialTestimonials);
  const [index, setIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [newName, setNewName] = useState("");
  const [newText, setNewText] = useState("");

  // تحريك السلايدر تلقائيًا كل 5 ثواني
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const current = testimonials[index];

  // توليد الأحرف الأولى من الاسم
  const initials = current.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  const colors = ["#D42A1B", "#F79824", "#47160E", "#F5B219"];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newName.trim() && newText.trim()) {
      const newReview = { name: newName.trim(), text: newText.trim() };
      setTestimonials((prev) => [...prev, newReview]);
      setNewName("");
      setNewText("");
      setShowModal(false);
      setIndex(testimonials.length); // انتقل مباشرة للرأي الجديد
    }
  };

  return (
    <div className="font-sans bg-[#fff8f5] min-h-screen flex flex-col justify-center items-center px-6 py-12 relative">
      {/* العنوان */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-[#1a1a1a]">
          Our Guests Speak for Us
        </h1>
        <p className="text-lg text-gray-600">
          Hear what people say about their Pyramids Grill experience.
        </p>
      </motion.div>

      {/* السلايدر */}
      <div className="relative w-full md:w-[700px] h-[420px] flex justify-center items-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            className="bg-white rounded-3xl shadow-xl p-10 text-center max-w-xl mx-auto relative"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.7 }}
          >
            <Quote className="text-[#D42A1B] absolute top-6 right-6 opacity-30" size={32} />

            <div
              className="w-24 h-24 mx-auto rounded-full flex items-center justify-center mb-4 shadow-md text-2xl font-bold text-white"
              style={{
                backgroundColor: colors[index % colors.length],
              }}
            >
              {initials}
            </div>

            <p className="text-gray-700 italic mb-6 text-lg leading-relaxed">
              “{current.text}”
            </p>
            <h3 className="text-xl font-semibold text-[#D42A1B]">{current.name}</h3>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* نقاط التبديل */}
      <div className="flex gap-3 mt-8">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === index ? "bg-[#D42A1B] w-5" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>

      {/* زر إضافة رأي جديد */}
      <button
        onClick={() => setShowModal(true)}
        className="mt-8 bg-[#D42A1B] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#b42214] transition"
      >
        Add Your Review
      </button>



      {/* المودال */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-2xl shadow-lg p-8 w-[90%] md:w-[450px] relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-3 right-3 text-gray-500 hover:text-black"
              >
                <X size={24} />
              </button>

              <h2 className="text-2xl font-bold text-[#D42A1B] mb-6 text-center">
                Add Your Review
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#D42A1B]"
                  required
                />
                <textarea
                  placeholder="Your Feedback..."
                  value={newText}
                  onChange={(e) => setNewText(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 h-28 resize-none focus:outline-none focus:ring-2 focus:ring-[#D42A1B]"
                  required
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-[#D42A1B] text-white font-semibold py-2 rounded-lg hover:bg-[#b42214] transition"
                >
                  Submit Review
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Testimonials;
