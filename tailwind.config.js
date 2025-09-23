/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        background: '#0A192F', // Dark Navy Blue
        surface: '#172A45',    // Lighter Navy for Cards
        primary: '#88D8F8',     // Light Blue Highlight
        'text-primary': '#E6F1FF',   // Soft Off-White
        'text-secondary': '#8892B0', // Muted Gray-Blue
      },
    },
  },
  plugins: [],
};
