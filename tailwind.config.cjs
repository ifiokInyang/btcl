/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        'Corsa-Grotesk': 'Corsa Grotesk'
      },
      colors: {
        brand: {
          primary: '#3A56CD'
        }
      },
      screens: {
        ss: '300px',
        sm: '375px',
        md: '768px',
        lg: '976px',
        xlg: '1024px',
        xlg2: '1440px'
      },
      animation: {
        slide: 'slide 30s linear infinite'
      },
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(100%)' }, // Adjust the distance based on your needs
          '100%': { transform: 'translateX(-100%)' } // Adjust the distance based on your needs
        }
      }
    }
  },
  plugins: [require('flowbite/plugin')]
};
