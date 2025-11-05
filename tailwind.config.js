// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // ألوان البراند
        brandGreen: "#00FF00", // الأخضر بتاع اللوجو
        brandRed: "#FF0000",   // الأحمر بتاع Grill
        brandBlack: "#000000", // خلفية أساسية
      },
      fontFamily: {
        // لو عندك خط مخصص ممكن تضيفيه هنا
        impact: ["Impact", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
