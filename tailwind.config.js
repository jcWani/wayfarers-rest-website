/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f4f4f2",
          100: "#e4e4dd",
          200: "#cacabe",
          300: "#acab98",
          400: "#94917b",
          500: "#85816d",
          600: "#716d5d",
          700: "#5b564b",
          800: "#504b43",
          900: "#46423d",
          950: "#272521",
        },
        accent: {
          50: "#fbf7f1",
          100: "#f6edde",
          200: "#ebd8bd",
          300: "#debc93",
          400: "#d4a373",
          500: "#c68249",
          600: "#b86d3e",
          700: "#995635",
          800: "#7c4630",
          900: "#643c2a",
          950: "#361e14",
        },
        bone: {
          DEFAULT: "#C9C5B2",
          900: "#2d2a1f",
          800: "#59553e",
          700: "#867f5d",
          600: "#aaa384",
          500: "#c9c5b2",
          400: "#d4d0c0",
          300: "#dedcd0",
          200: "#e9e8e0",
          100: "#f4f3ef",
        },
        walnut_brown: {
          DEFAULT: "#5B564B",
          900: "#13110f",
          800: "#25231e",
          700: "#38342d",
          600: "#4a463d",
          500: "#5b564b",
          400: "#827b6a",
          300: "#a39c8e",
          200: "#c1bdb4",
          100: "#e0ded9",
        },
        walnut_brown_two: {
          DEFAULT: "#696356",
          900: "#151411",
          800: "#2a2722",
          700: "#3e3b33",
          600: "#534e44",
          500: "#696356",
          400: "#8b8372",
          300: "#a8a295",
          200: "#c5c1b8",
          100: "#e2e0dc",
        },
        khaki: {
          DEFAULT: "#B8B19F",
          900: "#27241d",
          800: "#4f493a",
          700: "#766d57",
          600: "#9a9077",
          500: "#b8b19f",
          400: "#c6c0b2",
          300: "#d4d0c5",
          200: "#e2e0d8",
          100: "#f1efec",
        },
        bistre: {
          DEFAULT: "#382B1B",
          900: "#0b0805",
          800: "#16110b",
          700: "#211910",
          600: "#2c2215",
          500: "#382b1b",
          400: "#715736",
          300: "#ab8352",
          200: "#c7ac8b",
          100: "#e3d6c5",
        },
        borange: {
          DEFAULT: "#E67E22",
          100: "#EFA96C",
          200: "#ED9E5A",
          300: "#EB9447",
          400: "#E98935",
          500: "#E67E22",
          600: "#DC7418",
          700: "#CA6A16",
          800: "#B86114",
          900: "#A55712",
        },
      },
    },
  },
  plugins: [],
};
