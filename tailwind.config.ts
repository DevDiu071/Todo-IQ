import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      md: "1000px",
      sm: "700px",
      xs: "600px",
    },
    extend: {
      colors: {
        "light-gray": "#F8F8F8",
        gray: "#747474",
        cyan: "#F5F8FF",
        red: "#FF6767",
        white: "#F8F8FB",
        "light-blue": "#3ABEFF",
        blue: "#0000FF",
        "very-light-blue": "#42ADE2",
        "border-color": "#a1a3ab9e",
        "body-background": "#F5F8FF",
        gold: "#F24E1E",
        "gold-light": "#f24f1eac",
        overlay: "#00000088",
        "active-card": "#a1a3ab2c",
      },
    },
  },
  plugins: [],
} satisfies Config;
