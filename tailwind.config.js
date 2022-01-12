module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      blue: "#004a7c",
      "blue-light": "#005691",
      white: "#fafafa",
      "white-light": "#e8f1f5",
    },
    extend: {},
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          "@screen sm": {
            maxWidth: "600px",
          },
          "@screen md": {
            maxWidth: "700px",
          },
          "@screen lg": {
            maxWidth: "800px",
          },
          "@screen xl": {
            maxWidth: "960px",
          },
        },
      });
    },
  ],
};
