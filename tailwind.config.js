/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      translate: {
        "[-1/2]": "-50%",
      },
    },
  },
  plugins: [],
};
