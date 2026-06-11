/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Unbounded', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      colors: {
        ink: '#0a0a0a',
        'ink-mid': '#444444',
        'ink-light': '#888888',
        surface: '#f7f7f5',
        rule: '#e5e5e5',
        accent: '#1a5cff',
      },
    },
  },
  plugins: [],
}
