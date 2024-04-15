import { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        dark: {
          1:"#1C1F2E",
          2:"#161925",
        },
        blue: {
          1:'#0E78F9'
        },
        sky: {
          1: '#C9DDFF'
        },
        orange: {
          1: '#FF742E'
        },
        purple: {
          1:'#830EF9'
        },
        yellow: {
          1: '#E9A90E'
        },
      },
      backgroundImage: {
        hero: "url('/images/hero-background.png')"
      },
      boxShadow: {
        glassmorphism: "0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08)",
      },
    },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    plugins: [require("tailwindcss-animate")],

  }

export default config;