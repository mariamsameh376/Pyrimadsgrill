import React from "react";

const AboutUs = () => {
  return (
    <section className="bg-white text-gray-800 py-16 px-6 md:px-20">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-red-600 mb-6">About Us</h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          Welcome to <span className="font-semibold text-gray-900">Pyramids Grill</span>!  
          We are passionate about serving authentic and delicious meals inspired 
          by traditional recipes. Our mission is to bring people together through 
          food that is made with love, care, and the freshest ingredients.
        </p>
        <div className="grid md:grid-cols-3 gap-8 mt-10">
          <div className="p-6 shadow-lg rounded-2xl bg-red-50 hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold text-red-600 mb-3">Our Story</h3>
            <p className="text-gray-600">
              It all started with a passion for food and a dream to share 
              authentic flavors. Today, we proudly serve a menu full of 
              signature dishes that reflect our roots.
            </p>
          </div>
          <div className="p-6 shadow-lg rounded-2xl bg-red-50 hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold text-red-600 mb-3">Our Mission</h3>
            <p className="text-gray-600">
              To deliver high-quality meals and provide a warm, welcoming 
              atmosphere for our guests — making every visit memorable.
            </p>
          </div>
          <div className="p-6 shadow-lg rounded-2xl bg-red-50 hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold text-red-600 mb-3">Our Values</h3>
            <p className="text-gray-600">
              Freshness, authenticity, and community are at the heart of 
              everything we do. We believe food should not only taste 
              amazing but also bring joy to your table.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
