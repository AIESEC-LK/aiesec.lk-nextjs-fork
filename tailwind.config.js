/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens:{
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
    },
    extend: {
      colors: {
        'general-blue':'#037Ef3',
    },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        marquee: 'marquee 10s linear infinite',
      },
      keyframes:{
        marquee:{
          '0%': {transform: 'translateX(50%)'},
          '100%': {transform: 'translateX(-50%)'},
        }
      }
    },
  },
  plugins: [],
}
