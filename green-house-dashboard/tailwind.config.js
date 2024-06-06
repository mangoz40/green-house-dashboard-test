/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: () => ({
        white: "#ffffff",
        lightRed: "#FFFDD7",
        red: "#fd5c63",
        primary: "#7CB9E8",
        blueSecondary: "#4318FF",
        darkGray: "#2C3539",
        gray: "#f3f3f3",
        darkWhite: "#4C4C6D",
        redHeat: "#98002E",
        pink: "#fc6c85"
      })
    },
    screens: {
      sm: "400px",
      "sm-max": { max: "400px" },
      md: "768px",
      "md-max": { max: "768px" },
      lg: "992px",
      "xl-max": { max: "1200px" },
      "2xl": "1320px",
      "2xl-max": { max: "1320px" },
      "3xl": "1600px",
      "3xl-max": { max: "1600px" },
      "4xl": "1850px",
      "4xl-max": { max: "1850px" },
      xl: "1200px",
      "xl-max": { max: "1200px" },
      "2xl": "1320px",
      "2xl-max": { max: "1320px" },
      "3xl": "1600px",
      "3xl-max": { max: "1600px" },
      "4xl": "1850px",
      "4xl-max": { max: "1850px" },

    }
  },
  plugins: [],
}

