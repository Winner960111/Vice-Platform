/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        back_color: "#111113",
        text_color: "FFFFFF",
        purple_button: "#E00B7C",
      },
      keyframes: {
        floatUpDown: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
      animation: {
        float: "floatUpDown 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
