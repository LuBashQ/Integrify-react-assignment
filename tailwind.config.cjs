/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./index.html",
      "./src/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      listStyleType: {
        square: 'square'
      }
    },
  },
  plugins: [],
}
