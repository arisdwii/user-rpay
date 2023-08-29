/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite/**/*.js",
    "./index.html",
    "./product/*.html",
    "./product/game/*.html",
    "./trx/*.html",
    "./more/*.html",
  ],
  theme: {
    fontFamily: {
      body: ["Poppins", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        footer: "url('/dist/image/Bg Footer.png')",
      },
      colors: {
        // Primary Color
        orange: "#FFB20F",

        putih: "#FCFCFF",
        hitam: "#1f1f1f",
      },
      screens: {
        // => @media (min-width: 320px)
        sm: "320px",

        // => @media (min-width: 481px)
        md: "550px",

        // => @media (min-width: 1024px)
        lg: "1024px",
      },
      animation: {
        fade: "fade .2s ease-in-out",
        fadeUp: "fadeUp 1s ease-in-out",
      },
      keyframes: {
        fade: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { transform: "translateY(-100px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
