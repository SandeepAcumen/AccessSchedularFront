/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: "#1976d2",
        hover: "#0d47a1",
        active: "#1E40AF",
        border: "#2563EB",
        background: "#f6f7f8",
        primaryText: "#FFFFFF",
        cardBg: "#bbdefb",
        gradientColorFrom: '#0B73A2',
        gradientColorTo: '#57A8DF',
      },
    },
  },
  plugins: [],
}

