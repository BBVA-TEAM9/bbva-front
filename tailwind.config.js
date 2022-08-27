module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      zIndex: {
        '2': '2',
        '100': '100',
        '200': '200',
        '300': '300',
        '400': '400',
      },
      colors:{
        primary:'var(--color-primary)',
        primarydark:'var(--color-primary-dark)',
        secondary:'var(--color-secondary)',
        text:'var(--color-text)'
      },  
      spacing: {
        72: '18rem',
        80: '20rem',
        84: '22rem',
        96: '24rem',
      },
      fontWeight: ['hover', 'focus'],
      fontFamily:{
        'roboto':['Roboto','sans-serif'],
        'montserrat':['Montserrat','sans-serif']
      }
    },
  },
  variants: {
    extend: {
      opacity:['disabled']
    },
  },
  plugins: [],
}
