import { type Config } from "tailwindcss";
const { fontfamily } = require("tailwindcss/defaultTheme")


export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'bebas': ['Bebas Neue', 'sans-serif'],
        'source': ['Source Sans Pro', 'sans-serif'],
      },
      backgroundImage: {
        'informational': "url('/INFORMATIONAL.jpg')",
        'meow': "url('/meow.jpg')",
        'spring': "url('/springinfo.jpg')",
        'cuties': "url('/cutiess.jpg')",
        'karaoke': "url('/karaoke.jpg')",
        'big': "url('/big.jpg')",
      },
    },
  },
  plugins: [require("daisyui")],
} satisfies Config;
