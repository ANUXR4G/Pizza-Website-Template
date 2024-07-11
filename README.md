# npm install

# install tailwind in project
1. npm install -D tailwindcss
2. npx tailwindcss init

# Tailwindconfig.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
} 


# Add The Code Given Below In Index.css
@tailwind base;
@tailwind components;
@tailwind utilities; 

# Install Antd :- npm install antd --save

# Install React-Router-DOM :- npm i react-router-dom