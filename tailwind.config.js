module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // gray: "#424242",
        dark: "#212121",
        accent: "#900C3F",
      },
      fontFamily: {
        "space-grotesk": '"Space Grotesk", sans-serif',
      },
    },
  },
  variants: {
    extend: {
      translate: ["group-hover"],
    },
  },
  plugins: [],
};
