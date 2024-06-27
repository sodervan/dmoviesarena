/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      colors: {
        primaryBlack: "hsl(228, 22%, 5%)",
        homeBackground: "hsl(0, 4%, 10%)",
        homeBlack: "hsl(0, 0%, 0%)",
        primaryWhite: "hsl(215, 22%, 44%)",
        primaryYellow: "hsl(51, 100%, 43%)",
      },
      fontSize: {
        xxs: "12px", // Example custom font size
        xxl: "1.75rem", // Example custom font size
      },
    },
  },
  plugins: [],
};
