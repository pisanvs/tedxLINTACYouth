/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        tedRed: "#EB0028",
        red: "#EB0028",
        redText: "#EB0028",
        deepGrey: "#1B1B1B",
        grey: "#585858",
      },
      backgroundImage: {
        ayush: "url('/team/ayush_krishna.webp')",
        sabareesh: "url('/team/sabareesh_narayanan.webp')",
        coming_soon: "url('/backgrounds/coming-soon.webp')",
        swirls: "url('/backgrounds/website_banner.webp')",
        swirls_home: "url('/backgrounds/website_banner.webp')",
        tm: "url('/assets/tm.png')",
        td: "url('/assets/td.png')",
      },
      backgroundPosition: {
        custom: "center top 25%",
      },
    },
  },
  plugins: [],
};
