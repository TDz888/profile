import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        verdant: {
          dark: "#071E17",
          forest: "#0D2A21",
          moss: "#2F5D46",
          sage: "#7FA98A",
          mint: "#CFE8D4"
        }
      },
      borderRadius: {
        xl2: "28px",
        xl3: "42px"
      },
      backdropBlur: {
        glass: "20px"
      }
    }
  },
  plugins: []
};

export default config;
