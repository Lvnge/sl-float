import type { Config } from 'tailwindcss';

const config: Config = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,css}"], // Adjust if needed
  theme: {
    extend: {
      colors: {
        primary: '#678fa2', 
        secondary: '#b6adcc',
        accent: '#a08bb6',
        background: '#f1f2f3',
        text: '#373d3f',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],  // Use Montserrat as the default sans font
      },
    },
  },
  plugins: [],
};

export default config;
