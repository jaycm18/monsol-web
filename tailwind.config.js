/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#3f4f63ff", // tumma harmaa, sivun päätausta
        text: "#ffffff",         // valkoinen teksti
        accent: "#facc15",       // keltainen korostus
        primary: "#000000",      // palvelukortit tummanharmaaksi
        navbar: "#000000",       // navbar mustaksi
        footer: "#000000",       // footer mustaksi
      },
      fontFamily: {
        retro: ['"Orbitron"', 'sans-serif'], // Lisätty Orbitron
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        slideDown: {
          "0%": { transform: "translateY(-10%)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.3s ease-out",
        slideDown: "slideDown 0.3s ease-out",
      },
    },
  },
  plugins: [],
}
