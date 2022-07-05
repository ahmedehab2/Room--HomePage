module.exports = {
  content: ["index.html", "script.js"],

  theme: {
    extend: {
      keyframes: {
        toRight: {
          "0%": {
            visibility: "hidden",
            transform: "translateX(100%)",
          },
          "100%": { visibility: "visible", transform: "translateX(0)" },
        },
        toLeft: {
          "0%": {
            visibility: "hidden",
            transform: "translateX(-100%)",
          },
          "100%": { visibility: "visible", transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};
