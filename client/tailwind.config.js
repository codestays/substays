/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        stayshadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
      },
      colors: {
        darkgrey: '#2B2B2B',
        chatgreen: '#76ABAE',
        lightgrey: '#3C3C3C',
        chatwhite: '#E5E5E5',
        greylight: '#959595',
        blackchat: '#31363F',
      },
    },
  },
  
  plugins: [],
};
