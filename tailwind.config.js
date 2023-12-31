/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        poko: "url('./images/poko.jpg')",
        doko: "url('./images/doko.jpg')",
      },
    },
  },
  plugins: [],
};
