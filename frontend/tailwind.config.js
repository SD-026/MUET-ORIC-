/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1e3a8a',
        secondary: '#60a5fa',
        dark: '#0f172a',
      }
    },
  },
  corePlugins: {
    backgroundClip: true, // ✅ यह लाइन जरूरी है
  },
  plugins: [],
}