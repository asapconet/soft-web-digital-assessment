import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        circular: ['"Circular Std"', "san-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        box_shadow: "0px -4px 20px 0px #92929240",
        btn_shadow: " 2px 8px 8px 0px #56565640",
      },
      colors: {
        primary: "#532F82",
        primary_text: "#230B34",
        secondary_text: "#B6B6E5",
        disabled_text: "#B1BDCA",
        light_gray: "#686868",
        dark_gray: "#383838",
        border_gray: "#EEEEFF",
        border_purple: "#603F8B",
        input_bg: "#E7EAF1",
        input_border: "#E7EAF1",
      },
      screens: {
        "3xl": "2100px",
      },
    },
  },
  plugins: [],
};
export default config;
