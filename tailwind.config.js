/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'shine': 'shine 1.5s forwards',
        'dev-credit': 'dev-credit 4s linear infinite',
      },
      keyframes: {
        'shine': {
          '100%': { transform: 'translateX(100%)' },
        },
        'dev-credit': {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' },
        },
      },
      backgroundSize: {
        'auto-200': '200% auto',
      },
    },
  },
  plugins: [],
};