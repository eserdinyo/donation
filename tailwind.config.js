module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  darkMode: false, // or 'media' or 'class'
  important: true,
  theme: {
    extend: {
      colors: {
        "primary-black": "#111827",
      },
      boxShadow: {
        "payment-item": "rgba(17, 17, 26, 0.1) 0px 0px 16px;",
      },
      gridTemplateColumns: {
       'payment': '2fr 1fr',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false,
  },
};
