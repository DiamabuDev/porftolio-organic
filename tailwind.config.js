/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#f5ead8',
        surface: '#ebddc5',
        text: '#201e1d',
        accent: '#c67139',
        'accent-2': '#7a8a5e',

        neutral: {
          100: '#f9f4ed',
          200: '#eee7db',
          300: '#dcd3c4',
          400: '#c0b6a5',
          500: '#a19786',
          600: '#82796a',
          700: '#645c50',
          800: '#474238',
          900: '#2e2b25',
        },

        'accent-palette': {
          100: '#fff2eb',
          200: '#ffe1d0',
          300: '#ffc6a5',
          400: '#f6a06b',
          500: '#d67f48',
          600: '#b2622d',
          700: '#8c491a',
          800: '#643312',
          900: '#402310',
        },

        'accent-2-palette': {
          100: '#f0fae1',
          200: '#e1eecc',
          300: '#ccdbb2',
          400: '#aebf92',
          500: '#8fa073',
          600: '#728157',
          700: '#56633f',
          800: '#3d472b',
          900: '#272e1b',
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'system-ui', 'sans-serif'],
        figtree: ['Figtree', 'system-ui', 'sans-serif'],
      },
      spacing: {
        'space-1': '4.4px',
        'space-2': '8.8px',
        'space-3': '13.2px',
        'space-4': '17.6px',
        'space-6': '26.4px',
        'space-8': '35.2px',
      },
      borderRadius: {
        'radius-sm': '8px',
        'radius-md': '16px',
        'radius-lg': '28px',
      },
      boxShadow: {
        'shadow-sm': '0 1px 2px rgba(46, 43, 37, 0.14)',
        'shadow-md': '0 3px 10px rgba(46, 43, 37, 0.16)',
        'shadow-lg': '0 12px 32px rgba(46, 43, 37, 0.22)',
      },
    },
  },
  plugins: [],
}
