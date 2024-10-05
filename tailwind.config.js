/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgba(37, 79, 247)",
        red: "rgba(232, 12, 12)",
        secondary: "rgba(208, 213, 221, 1)",
        bordercolor: "rgba(233, 233, 233, 1)",
        textcolor: "rgba(0, 6, 38, 1)",
        error: "rgba(226, 226, 226, 1)",
        aboutusgreen: "rgba(15, 151, 61, 1)",
        aboutusblue: "rgba(66, 168, 221, 1)"
      },
      boxShadow: {
        'custom-shadow': '0px 10px 18px -2px rgba(16, 25, 40, 0.07)',
      },
    },
  },
  plugins: [],
};
