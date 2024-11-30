/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        gilroyMedium: ["Gilroy_Medium", "sans-serif"],
        gilroyBold: ["Gilroy_Bold", "sans-serif"],
        gilroySemiBold: ["Gilroy_SemiBold", "sans-serif"],
        gilroy: ["Gilroy", "sans-serif"],
        metropolis: ["Metropolis", "arial"],
        metropolisBold: ["Metropolis_Bold", "arial"],
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(rgb(255, 255, 255) -6.71%, rgb(235, 235, 242) 56.19%, rgb(223, 223, 231) 106.56%)",
      },
    },
  },
  plugins: [],
};
