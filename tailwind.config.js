module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      barlow: ['Barlow Condensed'],
      bellefair: ['Bellefair'],
      lato: ['Lato'],
      primary: 'Orbitron',

    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '380px',
      md: '620px',
      lg: '880px',
      xl: '1100px',
    },
    extend: {
      colors: {
        primary: '#0a0a0a',
        accent: '#B809C3',
      },
      animation: {
        'spin-slow': 'spin 9000ms linear infinite',
       },
  
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
