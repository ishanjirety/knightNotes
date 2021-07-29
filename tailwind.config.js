module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        black: {
          850: "#1D2022",
          350: "rgba(29, 32, 34,0.5)",
          650: "#262A2C"
        }
      },
      fontFamily: {
        'poppins': ['Poppins', "sans-serif"]
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
