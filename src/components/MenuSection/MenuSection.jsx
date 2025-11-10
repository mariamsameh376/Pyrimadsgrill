import React from "react";
import { Link } from "react-router-dom";

const MenuSection = () => {
  const dishes = [
    {
      name: "Chicken Plate",
      image: "/assets/Chicken-plate.jpg",
      price: "$12.99",
    },
    {
      name: "Gyro Plate",
      image: "/assets/Gyro plate.jpg",
      price: "$13.99",
    },
    {
      name: "Chicken Wings",
      image: "/assets/Chicken wings.jpg",
      price: "$9.99",
    },
    {
      name: "Falafel Plate",
      image: "/assets/Falafel plate.jpg",
      price: "$12.99",
    },
    {
      name: "Lamb Shank Plate",
      image: "/assets/Lamb shank plate.jpg",
      price: "$13.99",
    },
    {
      name: "Double Burger",
      image: "/assets/Double burger.jpg",
      price: "$9.99",
    },
    {
      name: "Whole Chicken",
      image: "/assets/Whole chicken.jpg",
      price: "$12.99",
    },
    {
      name: "Lamb Shops",
      image: "/assets/Lamb shops.jpg",
      price: "$13.99",
    },
    {
      name: "philly Chicken",
      image: "/assets/philly chicken.jpg",
      price: "$9.99",
    },
    {
      name: "Wings Lemon Pepper",
      image: "/assets/Wings lemon pepper.jpg",
      price: "$12.99",
    },
    {
      name: "Shrimp Plate",
      image: "/assets/Shrimp plate.jpg",
      price: "$13.99",
    },
    {
      name: "Wings Buffalo",
      image: "/assets/Wings buffalo.jpg",
      price: "$9.99",
    },
  ];

  return (
    <section className="bg-brandBlack py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* العنوان */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-impact text-brandGreen mb-4">
            Our Signature Dishes
          </h2>
          <p className="text-lg text-gray-300 font-poppins">
          
          </p>
        </div>

        {/* عرض الأطباق */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {dishes.map((dish, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* صورة الطبق مع overlay */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-contain hover:scale-105 transition-transform duration-500 bg-black"

                />
                {/* Overlay فوق الصورة لاسم الأكلة */}
                <div className="absolute bottom-0 left-0 w-full bg-black/60 text-white py-2 px-4 text-lg font-bold font-poppins">
                  {dish.name}
                </div>
              </div>

              {/* بيانات الطبق */}
              <div className="p-6 flex flex-col justify-between">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold text-brandRed font-poppins">
                    {dish.name}
                  </h3>
                  <span className="text-brandGreen font-bold text-lg">
                    {dish.price}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mt-3">
                 
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* زرار المنيو الكامل */}
        <div className="text-center mt-16">
          <Link
            to="/menu"
            className="inline-block bg-brandRed hover:bg-brandGreen transition-colors text-Green px-10 py-3 rounded-full font-bold text-lg shadow-lg"
          >
            View Full Menu
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
