/** @type {import('tailwindcss').Config} */
export default {
  content: ["./demo/**/*.html"],
  theme: {
    extend: {},
  },
  plugins: [
    require("@flexilla/tailwind-plugin")
  ],
}

