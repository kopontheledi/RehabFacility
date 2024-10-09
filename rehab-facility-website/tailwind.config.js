// tailwind.config.js
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // Add this for Next.js app directory
    './components/**/*.{js,ts,jsx,tsx}', // If you have a components directory
    './pages/**/*.{js,ts,jsx,tsx}', // For legacy pages directory, if you're using it
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
