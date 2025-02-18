/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        back_color: "#111113",
        text_color:"FFFFFF",
        purple_button: "#E00B7C"
      }
    },
  },
  plugins: [],
};
