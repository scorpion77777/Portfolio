module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "0px 0px 40px 0px rgba(255, 255, 0, 1)",
      },
      colors: {
        brown: {
          50: "#fdf8f6",
          100: "#f2e8e5",
          200: "#eaddd7",
          300: "#e0cec7",
          400: "#d2bab0",
          500: "#bfa094",
          600: "#a18072",
          700: "#977669",
          800: "#846358",
          900: "#43302b",
        },
      },
    },
  },
  plugins: [],
};
