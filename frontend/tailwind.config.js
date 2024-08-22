/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // This ensures Tailwind scans all files in the src directory with the specified extensions
  ],
  theme: {
    extend: {}, // This is where you can customize the default theme if needed
  },
  plugins: [], // You can add Tailwind plugins here if needed
}
