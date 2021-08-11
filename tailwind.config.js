const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  variants: {
    extend: {},
  },
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },

  purge: ["./components/**/*.tsx", "./pages/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Whitney", "Roboto", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: (theme) => ({
        "hero-image":
          'linear-gradient(rgb(0 0 0 / 50%), rgb(0 0 0 / 50%)), url("../assets/section-images/background-image.jpg")',
        "logo-myntra": 'url("../assets/logo/MyntraWebSprite.png")',
      }),
    },
    screens: {
      xs: "440px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    opacity: {
      0: "0",
      10: ".1",
      20: ".2",
      30: ".3",
      40: ".4",
      50: ".5",
      60: ".6",
      70: ".7",
      80: ".8",
      90: ".9",
      100: "1",
    },
    container: {
      padding: "20px",
    },
    fontSize: {
      xs: ".75rem",
      sm: ".875rem",
      tiny: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "2.5rem",
      "6xl": "3rem",
      "7xl": "4rem",
      "8xl": "5rem",
    },
    fontFamily: {
      sans: [
        "system-ui",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      serif: [
        "Inter",
        "Georgia",
        "Cambria",
        '"Times New Roman"',
        "Times",
        "serif",
      ],
      mono: [
        "Menlo",
        "Monaco",
        "Consolas",
        '"Liberation Mono"',
        '"Courier New"',
        "monospace",
      ],
    },
    fontWeight: {
      300: 300,
      400: 400,
      500: 500,
      600: 600,
      700: 700,
    },
    colors: {
      red: "#e50914",
      light_grey: "#757575",
      grey: "#303030",
      orange: "#ffa00a",
      blue: "#0071eb",
      white: "#ffffff",
      black: "#000000",
      transparent: "transparent",
      current: "currentColor",
    },
    transition: {
      transition: "0.3s all ease-in",
    },
    backgroundPosition: {
      bottom: "bottom",
      "bottom-4": "center bottom 1rem",
      center: "center",
      left: "left",
      "left-bottom": "left bottom",
      "left-top": "left top",
      right: "right",
      "right-bottom": "right bottom",
      "right-top": "right top",
      top: "top",
      "top-4": "-282px -48px",
      "top-5": "-674px -112px",
    },
    boxShadow: {
      HEADER: "0 4px 12px 0 rgb(0 0 0 / 5%);",
    },
    minHeight: {
      sm: "13rem",
      xsm: "4rem",
    },
    gridTemplateColumns: {
      autofill: "repeat(auto-fill,200px)",
    },
  },

  plugins: [
    require("tailwindcss-children"),
    require("tailwindcss-important")(),
  ],
};
