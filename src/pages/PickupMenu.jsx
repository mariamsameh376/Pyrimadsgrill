// src/pages/PickupMenu.jsx
import React, { useContext } from "react";
import { motion } from "framer-motion";
import { CartContext } from "../context/CartContext"; // ⚠ لازم يكون عندك Context
import menuSections from "../data/menuData"; // ⚠ هنخلي البيانات منفصلة في ملف جاهز

const PickupMenu = () => {
  const { addToCart, setOrderType } = useContext(CartContext);

  // 🔥 لما يفتح الصفحة نحدد نوع الطلب = Pick Up
  React.useEffect(() => {
    setOrderType("pickup");
  }, [setOrderType]);

  return (
    <div className="bg-black text-white min-h-screen pt-24 pb-16 px-6">
      <h1 className="text-center text-5xl md:text-6xl font-extrabold text-[#39FF14] mb-10">
        Pick Up Menu
      </h1>

      <p className="text-center text-gray-300 mb-12 text-lg">
        Choose your items and proceed to checkout.
      </p>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {menuSections.map((section, i) => (
          <motion.section
          key={section.title + i}

            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: i * 0.08 }}
            className="bg-neutral-900 p-6 rounded-2xl shadow-lg border border-gray-800"
          >
            <h3 className="text-2xl font-extrabold text-[#39FF14] mb-2 flex items-center">
              {section.icon} {section.title}
            </h3>

            {section.subtitle && (
              <p className="text-sm italic text-gray-300 mb-2">{section.subtitle}</p>
            )}
            {section.combo && (
              <p className="text-sm text-red-400 font-semibold mb-2">{section.combo}</p>
            )}
            {section.extra && (
              <p className="text-sm text-yellow-400 mb-3">{section.extra}</p>
            )}

            {section.items.length > 0 ? (
              <ul className="space-y-4 mt-4">
                {section.items.map((item, idx) => (
                  <li
                  key={item.name + idx}

                    className="border-b border-gray-700 pb-3 flex flex-col gap-2"
                  >
                    <div className="flex justify-between">
                      <span>{item.name}</span>
                      <span className="text-red-400 font-semibold">{item.price}</span>
                    </div>

                    {/* زر Add to Cart */}
                    <button
                      onClick={() =>
                        addToCart({
                          name: item.name,
                          price: parseFloat(item.price.replace("$", "")),
                          quantity: 1,
                        })
                      }
                      className="bg-[#39FF14] text-black font-bold py-1 px-4 rounded-lg text-sm hover:bg-white transition"
                    >
                      Add to Cart
                    </button>

                    {item.note && (
                      <p className="text-sm text-gray-400">{item.note}</p>
                    )}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-400 italic mt-3">—</p>
            )}
          </motion.section>
        ))}
      </div>
    </div>
  );
};

export default PickupMenu;
