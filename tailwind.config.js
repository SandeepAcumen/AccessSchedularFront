/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: "#3B96DA",
        hover: "#E08095",
        active: "#1E40AF",
        border: "#2563EB",
        background: "#EEEEEE",
        primaryText: "#FFFFFF",
        gradientColorFrom: '#9FC5E8',
        gradientColorTo: '#0B5394',
      },
    },
  },
  plugins: [],
}

