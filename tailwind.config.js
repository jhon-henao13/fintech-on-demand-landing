/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          violet: '#140838',
          darkblue: '#181f71',
          blue: '#2c3099',
          muted: '#8089ba',
          cardBg: '#7985b8',
        }
      },
      fontFamily: {
        sans: ['"Raleway"', '"Plus Jakarta Sans"', 'sans-serif'],
        raleway: ['"Raleway"', 'sans-serif'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(2deg)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-18px) rotate(-3deg)' },
        },
        floatFast: {
          '0%, 100%': { transform: 'translateY(0px) scale(1)' },
          '50%': { transform: 'translateY(-8px) scale(1.03)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
        floatSlow: 'floatSlow 6s ease-in-out infinite',
        floatFast: 'floatFast 3.5s ease-in-out infinite',
        marquee: 'marquee 30s linear infinite',
      }
    },
  },
  plugins: [],
}