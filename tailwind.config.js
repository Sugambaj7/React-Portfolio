/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      translate: {
        "[-1/2]": "-50%",
      },
      colors: {
        "custom-white": "#f1f1f1",
        "custom-yellow": "#FFCE59",
        "custom-red": "#EF6561",
        "custom-blue": "#5C69DE",
      },
    },
  },
  plugins: [],
};
