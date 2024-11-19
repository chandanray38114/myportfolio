/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors:{
        lightHover:'#fcf4ff',
        darkHover:'#2a004a',
        darkTheme:'#11001F',
      },
       boxShadow:{
              'black':'4px 4px 0 #000' ,
              'white':'4px 4px 0 #000',
       },
   },
 },
  plugins:[],
   darkMode:'selector'
}