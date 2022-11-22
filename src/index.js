const defaultTheme = require("tailwindcss/defaultTheme");
const config = {
  theme: {
    extend: {
      fontFamily: {
        display: ["Poppins", ...defaultTheme.fontFamily.sans],
        body: ["Poppins", ...defaultTheme.fontFamily.sans],
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        tiny: "0.5rem",
        xs: "0.625rem",
        sm: "0.75rem",
        body: "0.875rem",
        base: "1rem",
        lg: "1.25rem",
        xl: "1.563rem",
        "2xl": "2rem",
        "3xl": "2.438rem",
        "4xl": "3rem",
      },
    },
    plugins: [require("@tailwindcss/line-clamp")]
  },
};

module.exports = { config };
