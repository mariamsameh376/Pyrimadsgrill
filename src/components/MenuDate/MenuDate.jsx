// src/components/MenuPage.jsx
import React from "react";
import { motion } from "framer-motion";
import { Salad, Drumstick, Sandwich, IceCream, CupSoda, Baby, Utensils, DessertIcon } from "lucide-react";

const menuSections = [
  {
    id: "plates",
    title: "Plates",
    icon: <Utensils className="inline-block w-6 h-6 mr-2 text-[#39FF14]" />,
    subtitle: "Comes with Rice, Salad and Pita bread",
    extra: "Choice of sauce ranch or Tzatziki",
    items: [
      { name: "Grilled Beef Gyros", price: "$12.99" },
      { name: "Grilled Chicken", price: "$12.99" },
      { name: "Mix Grill", price: "$13.99" },
      { name: "Shawarma", price: "$12.99" },
      { name: "Chicken Shawarma", price: "$12.99" },
      { name: "Falafel", price: "$12.99" },
      { name: "Veggie", price: "$12.99" },
      { name: "Loaded Fries", price: "$12.99" },
      { name: "Grilled Shrimp", price: "$14.99" },
      { name: "Pyramids Special", price: "$16.99" },
      { name: "Pyramids Meat Lovers", price: "$14.99" },
      { name: "Lamp Chops", price: "$16.99" },
      { name: "Lamp Shank", price: "$19.99" },
      { name: "Whole Chicken", price: "$19.99" },
      { name: "Shish Kabab", price: "$19.99" },
    ],
  },

  {
    id: "sandwiches",
    title: "Sandwiches",
    icon: <Sandwich className="inline-block w-6 h-6 mr-2 text-[#39FF14]" />,
    
    combo: "Make it a Combo with Fries and Drink $3.99",
    extra: "Choice of sauce Ranch or Tzatziki",
    items: [
      { name: "Grilled Beef Gyros", price: "$8.99" },
      { name: "Grilled Chicken", price: "$8.99" },
      { name: "Mix Grill", price: "$9.99" },
      { name: "Shawarma", price: "$8.99" },
      { name: "Chicken Shawarma", price: "$8.99" },
      { name: "Falafel", price: "$8.99" },
      { name: "Veggie", price: "$8.99" },
      { name: "Grilled Shrimp", price: "$9.99" },
      { name: "Pyramids Meat Lovers", price: "$9.99" },
    ],
  },

  {
    id: "quesadillas",
    title: "Quesadillas",
    icon: <Utensils className="inline-block w-6 h-6 mr-2 text-[#39FF14]" />,
    subtitle: "Served with side of sour cream and salsa",
    items: [
      { name: "Gyro Quesadilla", price: "$10.99" },
      { name: "Chicken Quesadilla", price: "$10.99" },
      { name: "showarma Quesadilla", price: "$10.99" },
      { name: "Meat Lover Quesadilla", price: "$10.99" },
      { name: "Philly steak Quesadilla", price: "$10.99" },
      { name: "Cheese Quesadilla", price: "$10.99" },
      { name: "Shrimp Quesadilla", price: "$11.99" },
    ],
  },

  {
    id: "salads",
    title: "Salads Menu",
    icon: <Salad className="inline-block w-6 h-6 mr-2 text-[#39FF14]" />,
    extra: "Tabouli or Greek Salads and Choice of Topping and Sauce",
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
    id: "wings",
    title: "Wings",
    icon: <Drumstick className="inline-block w-6 h-6 mr-2 text-[#39FF14]" />,
    extra: "Sauce: Buffalo, BBQ, Hot Wings, and extra Hot",
    items: [
      { name: "6 wings", price: "$8.99" },
      { name: "8 wings", price: "$10.99" },
      { name: "10 wings", price: "$13.99" },
      { name: "12 wings", price: "$15.99" },
      { name: "15 wings", price: "$17.99" },
      { name: "20 wings", price: "$24.99" },
      { name: "30 wings", price: "$32.99" },
      { name: "50 wings", price: "$54.99" },
    ],
  },

  {
    id: "kids",
    title: "Kids Menu",
    icon: <Baby className="inline-block w-6 h-6 mr-2 text-[#39FF14]" />,
    extra: "Comes with Fries or Rice and Drink",
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
    id: "appetizers",
    title: "Appetizers",
    icon: <Utensils className="inline-block w-6 h-6 mr-2 text-[#39FF14]" />,
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
    id: "sides",
    title: "Sides",
    icon: <Utensils className="inline-block w-6 h-6 mr-2 text-[#39FF14]" />,
    items: [
      { name: "Tabouli Salad", price: "Reg $4.99 / Large $7.99" },
      { name: "Greek Salad", price: "Reg $4.99 / Large $7.99" },
      { name: "Fries", price: "Reg $3.99 / Large $5.99" },
      { name: "Rice", price: "Reg $3.99 / Large $5.99" },
    ],
  },

  {
    id: "desserts",
    title: "Desserts",
    icon: <IceCream className="inline-block w-6 h-6 mr-2 text-[#39FF14]" />,
    items: [
      { name: "Baklava", price: "$3.99" },
      { name: "Cheese Cake", price: "$3.99" },
      { name: "Oreo Cake", price: "$4.99" },
      { name: "Chocolate Cake", price: "$4.99" },
      { name: "Baklava Cheesecake", price: "$4.99" },
    ],
  },

  {
    id: "subs-burgers",
    title: "Subs & Burgers",
    icon: <Sandwich className="inline-block w-6 h-6 mr-2 text-[#39FF14]" />,
    combo: "Make it a Combo with Fries and Drink $3.99",
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
    id: "catering",
    title: "Catering Menu",
    icon: <Utensils className="inline-block w-6 h-6 mr-2 text-green-400" />,
    subtitle: "Half Trays Feed up to 12 People",
    items: [
      { name: "½ Tray Grilled Gyro", price: "$89.99" },
      { name: "½ Tray Grilled Chicken", price: "$89.99" },
      { name: "½ Tray Chicken Shawarma", price: "$89.99" },
      { name: "½ Tray Meat Shawarma", price: "$109.99" },
      { name: "½ Tray Greek Salad", price: "$39.99", note: "Comes with Ranch or Tzatziki Sauce"  },
      { name: "½ Tray Rice", price: "$29.99" },
    ],
  },

  {
    id: "drinks",
    title: "Drinks",
    icon: <CupSoda className="inline-block w-6 h-6 mr-2 text-[#39FF14]" />,
    items: [
      {
        name:
          "Fountain Drinks (Coke, Diet Coke, Coke Zero, Cherry Coke, Sprite, Dr Pepper, Fanta Orange, MM Lemonade)",
        price: "$2.99",
      },
      { name: "20 oz Bottles", price: "Available" },
    ],
  },

  {
    id: "family",
    title: "Family Special",
    icon: <Utensils className="inline-block w-6 h-6 mr-2 text-[#39FF14]" />,
    subtitle: "Choose Any Two Meals & Two Kids for $39.99",
    items: [],
  },
];

const SectionCard = ({ section, delay = 0 }) => (
  <motion.section
    initial={{ opacity: 0, y: 18 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.55, delay }}
    className="bg-neutral-900 p-6 rounded-2xl shadow-lg border border-gray-800"
    id={section.id}
  >
    <h3 className="text-2xl md:text-3xl font-extrabold text-[#39FF14] mb-2 flex items-center">
      {section.icon} {section.title}
    </h3>

    {section.subtitle && <p className="text-sm italic text-gray-300 mb-1">{section.subtitle}</p>}
    {section.combo && <p className="text-sm text-red-400 font-semibold mb-1">{section.combo}</p>}
    {section.extra && <p className="text-sm text-yellow-400 mb-3">{section.extra}</p>}

    {section.items && section.items.length > 0 ? (
      <ul className="space-y-3 mt-4">
  {section.items.map((item, idx) => (
    <li key={idx} className="border-b border-gray-700 pb-2">
      <div className="flex justify-between">
        <span>{item.name}</span>
        <span className="text-red-400 font-semibold">{item.price}</span>
      </div>
      {item.note && (
        <p className="text-sm text-gray-400 mt-1">{item.note}</p>
      )}
    </li>
  ))}
</ul>

    ) : (
      <p className="text-gray-300 italic mt-3">—</p>
    )}
  </motion.section>
);

const MenuPage = () => (
  <div className="bg-black text-white min-h-screen">
    <header className="max-w-6xl mx-auto py-12 px-6">
      <h1 className="text-center text-5xl md:text-6xl font-extrabold text-[#39FF14] drop-shadow-lg">
        Our Delicious Menu
      </h1>
      <p className="text-center text-gray-300 mt-3">
       
      </p>

      <nav className="mt-6 flex flex-wrap justify-center gap-3">
        {menuSections.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className="text-sm px-3 py-2 rounded-full bg-neutral-900/60 hover:bg-neutral-800 transition border border-gray-800"
          >
            {s.title}
          </a>
        ))}
      </nav>
    </header>

    <main className="max-w-6xl mx-auto px-6 pb-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {menuSections.map((section, i) => (
          <SectionCard section={section} key={section.id} delay={i * 0.08} />
        ))}
      </div>
      <div className="mt-12 text-center text-sm text-gray-400">
        <p></p>
      </div>
    </main>
  </div>
);

export default MenuPage;
