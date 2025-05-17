/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f5ff',
          100: '#cce7ff',
          200: '#99c8ff',
          300: '#66aaff',
          400: '#338bff',
          500: '#0077B6', // Primary blue
          600: '#0066b3',
          700: '#004880',
          800: '#00294d',
          900: '#00121a',
        },
        secondary: {
          50: '#e6feff',
          100: '#ccfdff',
          200: '#99f5ff',
          300: '#66edff',
          400: '#33e6ff',
          500: '#00B4D8', // Secondary blue
          600: '#0095b3',
          700: '#006380',
          800: '#00314d',
          900: '#00121a',
        },
        neutral: {
          50: '#F8F9FA',
          100: '#E9ECEF',
          200: '#DEE2E6',
          300: '#CED4DA',
          400: '#ADB5BD',
          500: '#6C757D',
          600: '#495057',
          700: '#343A40',
          800: '#212529',
          900: '#121416',
        },
        success: '#28a745',
        warning: '#ffc107',
        danger: '#dc3545',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-in': 'slideIn 0.5s ease-in-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};