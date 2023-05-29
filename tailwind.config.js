/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        yellow: "#FDA214",
        guessedButtonColor: "#BCCED9",
        coveredButtonColor: "#304859",
        bgColorDark: "#152938",
        textColorGrey: "#7191A5",
        textColorWhite: "#FCFCFC",
        bgColorLight: "#F2F2F2",
        coveredBtnHover: "#6395B8",
        outlineColor: "#DFE7EC",
      },
    },
  },
  plugins: [],
};
