/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
        sans: ['Lato', 'sans-serif'],
        serif: ['Lato', 'sans-serif'],
        mono: ['Lato', 'sans-serif'],
        display: ['Lato', 'sans-serif'],
        body: ['Lato', 'sans-serif'],
    },
    // Responsive Sizes
    screens: {
        xsm: '20px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },

    colors: {
        'aiesec-blue':'#037Ef3',
        'white':'#FFFFFF',
        'black':'#000000',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      padding: {
        '17px': '500px',
      },
    },
  },
  plugins: [],
}
