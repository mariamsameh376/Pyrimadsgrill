const menuData = [
    {
      category: "Plates",
      subtitle: "Comes with Rice, Salad and Pita bread",
      extra: "Choice of sauce ranch or Tzatziki",
      items: [
        { id: 1, name: "Grilled Beef Gyros", price: 12.99 },
        { id: 2, name: "Grilled Chicken", price: 12.99 },
        { id: 3, name: "Mix Grill", price: 13.99 },
        { id: 4, name: "Shawarma", price: 12.99 },
        { id: 5, name: "Chicken Shawarma", price: 12.99 },
        { id: 6, name: "Falafel", price: 12.99 },
        { id: 7, name: "Veggie", price: 12.99 },
        { id: 8, name: "Loaded Fries", price: 12.99 },
        { id: 9, name: "Grilled Shrimp", price: 14.99 },
        { id: 10, name: "Pyramids Special", price: 16.99 },
        { id: 11, name: "Pyramids Meat Lovers", price: 14.99 },
        { id: 12, name: "Lamp Chops", price: 16.99 },
        { id: 13, name: "Lamp Shank", price: 19.99 },
        { id: 14, name: "Whole Chicken", price: 19.99 },
        { id: 15, name: "Shish Kabab", price: 19.99 },
      ],
    },
  
    {
      category: "Sandwiches",
      combo: "Make it a Combo with Fries and Drink $3.99",
      extra: "Choice of sauce Ranch or Tzatziki",
      items: [
        { id: 16, name: "Grilled Beef Gyros", price: 8.99 },
        { id: 17, name: "Grilled Chicken", price: 8.99 },
        { id: 18, name: "Mix Grill", price: 9.99 },
        { id: 19, name: "Shawarma", price: 8.99 },
        { id: 20, name: "Chicken Shawarma", price: 8.99 },
        { id: 21, name: "Falafel", price: 8.99 },
        { id: 22, name: "Veggie", price: 8.99 },
        { id: 23, name: "Grilled Shrimp", price: 9.99 },
        { id: 24, name: "Pyramids Meat Lovers", price: 9.99 },
      ],
    },
  
    {
      category: "Quesadillas",
      subtitle: "Served with side of sour cream and salsa",
      items: [
        { id: 25, name: "Gyro Quesadilla", price: 10.99 },
        { id: 26, name: "Chicken Quesadilla", price: 10.99 },
        { id: 27, name: "Shawarma Quesadilla", price: 10.99 },
        { id: 28, name: "Meat Lover Quesadilla", price: 10.99 },
        { id: 29, name: "Philly Steak Quesadilla", price: 10.99 },
        { id: 30, name: "Cheese Quesadilla", price: 10.99 },
        { id: 31, name: "Shrimp Quesadilla", price: 11.99 },
      ],
    },
  
    {
      category: "Salads Menu",
      extra: "Tabouli or Greek Salads and Choice of Topping and Sauce",
      items: [
        { id: 32, name: "Gyro Salad", price: 12.99 },
        { id: 33, name: "Chicken Salad", price: 12.99 },
        { id: 34, name: "Shawarma Salad", price: 12.99 },
        { id: 35, name: "Falafel Salad", price: 12.99 },
        { id: 36, name: "Shrimp Salad", price: 14.99 },
        { id: 37, name: "Mix Grill Salad", price: 13.99 },
      ],
    },
  
    {
      category: "Wings",
      extra: "Sauce: Buffalo, BBQ, Hot Wings, and extra Hot",
      items: [
        { id: 38, name: "6 wings", price: 8.99 },
        { id: 39, name: "8 wings", price: 10.99 },
        { id: 40, name: "10 wings", price: 13.99 },
        { id: 41, name: "12 wings", price: 15.99 },
        { id: 42, name: "15 wings", price: 17.99 },
        { id: 43, name: "20 wings", price: 24.99 },
        { id: 44, name: "30 wings", price: 32.99 },
        { id: 45, name: "50 wings", price: 54.99 },
      ],
    },
  
    {
      category: "Kids Menu",
      extra: "Comes with Fries or Rice and Drink",
      items: [
        { id: 46, name: "Chicken Strips", price: 7.99 },
        { id: 47, name: "Grilled Gyro", price: 7.99 },
        { id: 48, name: "Grilled Chicken", price: 7.99 },
        { id: 49, name: "Cheese Quesadilla", price: 7.99 },
        { id: 50, name: "Chicken Quesadilla", price: 7.99 },
        { id: 51, name: "Cheese Burger", price: 7.99 },
      ],
    },
  
    {
      category: "Appetizers",
      items: [
        { id: 52, name: "Mozzarella Sticks", price: 4.99 },
        { id: 53, name: "Grape Leaves", price: 4.99 },
        { id: 54, name: "Fried Pickles", price: 4.99 },
        { id: 55, name: "Hummus and Pita", price: 4.99 },
        { id: 56, name: "Onion Rings", price: 4.99 },
        { id: 57, name: "Fried Tomatoes", price: 4.99 },
        { id: 58, name: "Side Falafel", price: 4.99 },
      ],
    },
  
    {
      category: "Sides",
      items: [
        { id: 59, name: "Tabouli Salad", price: "Reg 4.99 / Large 7.99" },
        { id: 60, name: "Greek Salad", price: "Reg 4.99 / Large 7.99" },
        { id: 61, name: "Fries", price: "Reg 3.99 / Large 5.99" },
        { id: 62, name: "Rice", price: "Reg 3.99 / Large 5.99" },
      ],
    },
  
    {
      category: "Desserts",
      items: [
        { id: 63, name: "Baklava", price: 3.99 },
        { id: 64, name: "Cheese Cake", price: 3.99 },
        { id: 65, name: "Oreo Cake", price: 4.99 },
        { id: 66, name: "Chocolate Cake", price: 4.99 },
        { id: 67, name: "Baklava Cheesecake", price: 4.99 },
      ],
    },
  
    {
      category: "Subs & Burgers",
      combo: "Make it a Combo with Fries and Drink $3.99",
      items: [
        { id: 68, name: "Philly Steak Sub", price: "Reg 8.99 / Large 12.99" },
        { id: 69, name: "Grilled Chicken", price: "Reg 8.99 / Large 12.99" },
        { id: 70, name: "Cajun’s Chicken", price: "Reg 8.99 / Large 12.99" },
        { id: 71, name: "Shawarma", price: "Reg 8.99 / Large 12.99" },
        { id: 72, name: "Grilled Cheese Burger", price: 8.99 },
        { id: 73, name: "Grilled Hamburger", price: 8.99 },
        { id: 74, name: "Double Cheese Burger", price: 10.99 },
        { id: 75, name: "Chicken Strips", price: 10.99 },
      ],
    },
  
    {
      category: "Catering",
      subtitle: "Half Trays Feed up to 12 People",
      items: [
        { id: 76, name: "½ Tray Grilled Gyro", price: 89.99 },
        { id: 77, name: "½ Tray Grilled Chicken", price: 89.99 },
        { id: 78, name: "½ Tray Chicken Shawarma", price: 89.99 },
        { id: 79, name: "½ Tray Meat Shawarma", price: 109.99 },
        { id: 80, name: "½ Tray Greek Salad", price: 39.99, note: "Comes with Ranch or Tzatziki Sauce" },
        { id: 81, name: "½ Tray Rice", price: 29.99 },
      ],
    },
  
    {
      category: "Drinks",
      items: [
        {
          id: 82,
          name:
            "Fountain Drinks (Coke, Diet Coke, Coke Zero, Cherry Coke, Sprite, Dr Pepper, Fanta Orange, MM Lemonade)",
          price: 2.99,
        },
        { id: 83, name: "20 oz Bottles", price: null },
      ],
    },
  
    {
      category: "Family Special",
      subtitle: "Choose Any Two Meals & Two Kids for $39.99",
      items: [],
    },
  ];
  
  export default menuData;
  