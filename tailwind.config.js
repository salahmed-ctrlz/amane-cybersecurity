/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // This tells Tailwind to toggle dark mode using a class (dark)

  theme: {
    extend: {
      fontFamily: {
        sans: ['Inclusive Sans', 'sans-serif'],
        heading: ['Bebas Neue', 'sans-serif'],
        arabic: ['Noto Kufi Arabic', 'sans-serif'], // Add the Arabic font here
      },
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
        'gradient-y': 'gradient-y 15s ease infinite',
        'gradient-xy': 'gradient-xy 15s ease infinite',
        'text-slide': 'text-slide 12s linear infinite',
      },
      keyframes: {
        'gradient-y': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'center top'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'center center'
          }
        },
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
        'gradient-xy': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
        'text-slide': {
          '0%, 16%': {
            transform: 'translateY(0%)'
          },
          '20%, 36%': {
            transform: 'translateY(-16.66%)'
          },
          '40%, 56%': {
            transform: 'translateY(-33.33%)'
          },
          '60%, 76%': {
            transform: 'translateY(-50%)'
          },
          '80%, 96%': {
            transform: 'translateY(-66.66%)'
          },
          '100%': {
            transform: 'translateY(-83.33%)'
          }
        }
      }
    },
  },
  plugins: [],
};