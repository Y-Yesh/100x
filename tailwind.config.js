/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "Twitterblue-default" :  "#1d9bf0",
        "Twitterblue-hover" : "#1871CA",
        "Twitterblue-disabled" : "#1E5D87",
        "Button stroke" : "#546A7A",
        "Searchbar fill" : "#212327",
        "Card fill" : "#16181C",
        "Success" : "#00BE74",
        "Error" : "#8B141A",
        "Neutral-50" : "#F9F9F9",
        "Neutral-100" : "#F4F4F4",
        "Neutral-200" : "#E4E4E4",
        "Neutral-300" : "#D3D3D3",
        "Neutral-400" : "#A2A2A2",
        "Neutral-500" : "#737373",
        "Neutral-600" : "#525252",
        "Neutral-700" : "#404040",
        "Neutral-800" : "#262626",
        "Neutral-900" : "#171717" ,
        "Neutral-950" : "#0A0A0A" ,
        "Neutral-1000" : "#000000", 
        "BlueWash"  : "rgba(117,190,239,0.2)",
        "signupstroke" : "rgba(29, 155, 240, 0.24)",
        "grey-100x" : "rgba(255, 255, 255, 0.60)",
        "light-blue" : "rgba(29, 155, 240, 0.24)",
        "grey-icon" : "rgba(0, 0, 0, 0.60)"
      },
      boxShadow: {
        "default" : " 0px 8px 16px 0px rgba(0, 0, 0, 0.25)",
      },
      screens: {
        "ssm" : "400"
      }
    },
  },
  corePlugins: {
    aspectRatio:false,
  },
  plugins: [
    require('tailwindcss-debug-screens')],
};

