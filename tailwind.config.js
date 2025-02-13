/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: "#AF2031",
        hover: "#E08095",
        active: "#1E40AF",
        border: "#2563EB",
        background: "#FDEFEF",
        primaryText: "#FFFFFF",
        gradientColorFrom: '#881421',
        gradientColorTo: '#C94F60',
      },
    },
  },
  plugins: [],
}

