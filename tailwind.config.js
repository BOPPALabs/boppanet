/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        boppa: {
          primary: '#6D28D9', // purple-700
          secondary: '#4F46E5', // indigo-600
          accent: '#EC4899', // pink-500
          success: '#10B981', // emerald-500
          warning: '#F59E0B', // amber-500
          error: '#EF4444', // red-500
          dark: '#111827', // gray-900
          darker: '#0F172A', // slate-900
          light: '#E5E7EB', // gray-200
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Rajdhani', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },
    },
  },
  plugins: [],
};