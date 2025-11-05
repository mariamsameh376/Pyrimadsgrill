// src/components/Hero/Hero.jsx
import React from "react";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-black text-center flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image */}
      <img
        src="/assets/background.png" // حطي صورة الخلفية هنا في public/
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover opacity-70"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/1"></div>


      {/* Title */}
      <h1 className="relative text-6xl md:text-7xl font-bold z-10">
        <span className="text-[#39FF14]
">Pyramids</span>{" "}
        <span className="text-red-600">Grill</span>
      </h1>

      {/* Highlight Bar */}
      <div className="relative z-10 flex mt-12 space-x-6">
        {["Gyro Salad.jpg", "Gyro Sandwich.jpg", "Lamb Chops Plate.jpg"].map((dish, i) => (
          <div
            key={i}
            className="border-4 text-[#39FF14]
 p-1 rounded-md hover:scale-105 transform transition"
          >
            <img
              src={`/${dish}`} // حطي صور الأطباق في public/
              alt={`Dish ${i + 1}`}
              className="w-52 h-64 object-cover rounded-md"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
