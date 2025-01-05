module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Adjust based on your project structure
  theme: {
    extend: {
      transitionProperty: {
        transform: "transform",
        filter: "filter",
      },
    },
  },
  plugins: [],
};
