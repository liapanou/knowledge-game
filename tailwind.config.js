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
    backgroundImage: {
      'win-pattern': "url('https://wallpaperaccess.com/full/1169840.jpg')",
      'lose-pattern':"url('http://www.academialeb.com/wp-content/uploads/2014/07/section-BG-dark.jpg')"
    }
  }
  },
  plugins: [require("daisyui")],
}
