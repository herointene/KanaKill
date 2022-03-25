module.exports = {
  purge: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow:{
        'box-inner': 'inset -9px -9px 20px 0 #ffffff, inset 4px 4px 30px 0 #beabab;',
        'box-2':'-2px -2px 10px 0 #ffffff, 2px 2px 8px 0 #beabab;',
        'box-1':'-10px -10px 10px 0 #ffffff, 14px 14px 20px 0 #beabab;',
        // 'box-correct':'inset 0px 0px 30px 10px #c3ffd9',
        'box-wrong':'inset 0px 0px 30px 10px #ffccdd',
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      boxShadow: ['active']
    },
  },
  plugins: [],
}
