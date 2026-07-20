/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cong: {
          armyDark: '#31452F',   // Xanh bộ đội đậm
          armyGreen: '#536348',  // Xanh rêu
          oldPaper: '#F3E8D0',   // Kem giấy cũ
          woodBrown: '#6B4635',  // Nâu gỗ
          brickRed: '#A44332',   // Đỏ gạch
          ivoryWhite: '#FFF9ED', // Trắng ngà
        }
      },
      fontFamily: {
        serif: ['Merriweather', 'Lora', 'serif'],
        sans: ['Be Vietnam Pro', 'Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
