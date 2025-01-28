import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-gray": "#F8F8F8",
        cyan: "#F5F8FF",
        red: "#FF6767",
        white: "#F8F8FB",
        "light-blue": "#3ABEFF",
      },
    },
  },
  plugins: [],
} satisfies Config;
