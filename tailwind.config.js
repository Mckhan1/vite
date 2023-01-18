module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgoundImage: {
        'amir': "url('./src/static/img/hot skins test shot 11.png')"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
