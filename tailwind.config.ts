import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      light: '#FAFCFF',
      dark: '#08121A',
      white: '#FBFBFB',
      'light-gray': '#969899',
      gray: '#F2F4FC',
      'dark-gray': '#555555',
      black: '#1E232D',
    },
  },
  plugins: [],
};
export default config;
