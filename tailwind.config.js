/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
   
   
    extend: {  screens: {
     'xs' : '360px'
    },
    colors:{
      
      "teal" : {
      300 : "#5eead4" ,
      400:  "#2dd4bf" ,
      600 : "#0d9488"
    }},
   
  }
  },
  plugins: [require("daisyui")],
}
