import { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // 🔹 نوع الطلب (Pickup / Delivery)
  const [orderType, setOrderType] = useState(null);

  // إضافة عنصر للسلة
  const addToCart = (item) => {
    setCart((prev) => [...prev, { ...item, id: Date.now() }]);
  };

  // إزالة عنصر بالسلة
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // مسح السلة
  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        orderType,
        setOrderType, // ✅ إضافة الفانكشن اللي محتاجها PickupMenu
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
