import React from "react";
import { Salad, Drumstick, Sandwich, IceCream, CupSoda, Baby, Utensils } from "lucide-react";

const menuSections = [
  {
    title: "Salads Menu",
    icon: <Salad className="inline-block w-6 h-6 mr-2 text-[#39FF14]
" />,
    items: [
      { name: "Gyro Salad", price: "$12.99" },
      { name: "Chicken Salad", price: "$12.99" },
      { name: "Shawarma Salad", price: "$12.99" },
      { name: "Falafel Salad", price: "$12.99" },
      { name: "Shrimp Salad", price: "$14.99" },
      { name: "Mix Grill Salad", price: "$13.99" },
    ],
  },
  {
    title: "Kids Menu",
    icon: <Baby className="inline-block w-6 h-6 mr-2 text-[#39FF14]
" />,
    subtitle: "Comes with Fries or Rice and Drink",
    items: [
      { name: "Chicken Strips", price: "$7.99" },
      { name: "Grilled Gyro", price: "$7.99" },
      { name: "Grilled Chicken", price: "$7.99" },
      { name: "Cheese Quesadilla", price: "$7.99" },
      { name: "Chicken Quesadilla", price: "$7.99" },
      { name: "Cheese Burger", price: "$7.99" },
    ],
  },
  {
    title: "Appetizers",
    icon: <Utensils className="inline-block w-6 h-6 mr-2 text-[#39FF14]
" />,
    items: [
      { name: "Mozzarella Sticks", price: "$4.99" },
      { name: "Grape Leaves", price: "$4.99" },
      { name: "Fried Pickles", price: "$4.99" },
      { name: "Hummus and Pita", price: "$4.99" },
      { name: "Onion Rings", price: "$4.99" },
      { name: "Fried Tomatoes", price: "$4.99" },
      { name: "Side Falafel", price: "$4.99" },
    ],
  },
  {
    title: "Wings",
    icon: <Drumstick className="inline-block w-6 h-6 mr-2 text-[#39FF14]
" />,
    subtitle: "Sauce: Buffalo, BBQ, Hel, Winger, Blue Cheese, Lemon Pepper, and Xira Hot",
    items: [
      { name: "6 wings", price: "8.99" },
      { name: "8 wings", price: "10.99" },
      { name: "10 wings", price: "13.99" },
      { name: "12 wings", price: "15.99" },
      { name: "15 wings", price: "17.99" },
      { name: "20 wings", price: "24.99" },
      { name: "30 wings", price: "32.99" },
      { name: "50 wings", price: "54.99" },
    ],
  },
  {
    title: "Sides",
    icon: <Utensils className="inline-block w-6 h-6 mr-2 text-[#39FF14]
" />,
    items: [
      { name: "Tabouli Salad", price: "Reg $4.99 / Large $7.99" },
      { name: "Greek Salad", price: "Reg $4.99 / Large $7.99" },
      { name: "Fries", price: "Reg $3.99 / Large $5.99" },
      { name: "Rice", price: "Reg $3.99 / Large $5.99" },
    ],
  },
  {
    title: "Desserts",
    icon: <IceCream className="inline-block w-6 h-6 mr-2 text-[#39FF14]
" />,
    items: [
      { name: "Baklava", price: "$3.99" },
      { name: "Cheese Cake", price: "$3.99" },
      { name: "Oreo Cake", price: "$4.99" },
      { name: "Chocolate Cake", price: "$4.99" },
      { name: "Baklava Cheesecake", price: "$4.99" },
    ],
  },
  {
    title: "Subs & Burgers",
    icon: <Sandwich className="inline-block w-6 h-6 mr-2 text-[#39FF14]
" />,
    items: [
      { name: "Philly Steak Sub", price: "Reg $8.99 / Large $12.99" },
      { name: "Grilled Chicken", price: "Reg $8.99 / Large $12.99" },
      { name: "Cajun’s Chicken", price: "Reg $8.99 / Large $12.99" },
      { name: "Shawarma", price: "Reg $8.99 / Large $12.99" },
      { name: "Grilled Cheese Burger", price: "$8.99" },
      { name: "Grilled Hamburger", price: "$8.99" },
      { name: "Double Cheese Burger", price: "$10.99" },
      { name: "Chicken Strips", price: "$10.99" },
    ],
  },
  {
    title: "Catering Menu",
    icon: <Utensils className="inline-block w-6 h-6 mr-2 text-green-400" />,
    subtitle: "Half Trays Feed up to 12 People",
    items: [
      { name: "½ Tray Grilled Gyro", price: "$89.99" },
      { name: "½ Tray Grilled Chicken", price: "$89.99" },
      { name: "½ Tray Chicken Shawarma", price: "$89.99" },
      { name: "½ Tray Meat Shawarma", price: "$109.99" },
      { name: "½ Tray Greek Salad", price: "$39.99" },
      { name: "½ Tray Rice", price: "$29.99" },
    ],
  },
  {
    title: "Drinks",
    icon: <CupSoda className="inline-block w-6 h-6 mr-2 text-[#39FF14]
" />,
    items: [
      { name: "Fountain Drinks (Coke, Diet Coke, Coke Zero, Cherry Coke, Sprite, Dr Pepper, Fanta Orange, MM Lemonade)", price: "$2.99" },
      { name: "20 oz Bottles", price: "Available" },
    ],
  },
  {
    title: "Family Special",
    icon: <Utensils className="inline-block w-6 h-6 mr-2 text-[#39FF14]
" />,
    subtitle: "Choose Any Two Meals & Two Kids for $39.99",
    items: [],
  },
];

const MenuData = () => {
  return (
    <div className="bg-black text-white min-h-screen p-10">
      {/* العنوان الرئيسي */}
      <h1 className="text-center text-5xl font-bold mb-12 text-[#39FF14]
 drop-shadow-lg">
        Our Delicious Menu 🍴
      </h1>

      {/* المنيو */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {menuSections.map((section, index) => (
          <div key={index} className="p-6 rounded-2xl shadow-lg bg-neutral-900 hover:scale-105 transition">
            <h2 className="text-2xl font-bold text-[#39FF14]
 mb-2 flex items-center">
              {section.icon} {section.title}
            </h2>
            {section.subtitle && (
              <p className="text-sm italic text-gray-300 mb-3">{section.subtitle}</p>
            )}
            <ul className="space-y-2">
              {section.items.map((item, idx) => (
                <li key={idx} className="flex justify-between border-b border-gray-700 pb-1">
                  <span>{item.name}</span>
                  <span className="text-red-400 font-semibold">{item.price}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuData;
