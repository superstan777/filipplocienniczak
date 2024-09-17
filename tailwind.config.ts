import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      zIndex: {
        "1": "1",
        "2": "2",
        "3": "3",
        "4": "4",
      },
      transitionDuration: {
        "0": "0ms",
        "250": "250ms",
        "500": "500ms",
        "750": "750ms",
        "1000": "1000ms",
        "1150": "1150ms",
      },

      fontSize: {
        h1: "3.5em",
        mh1: "3em",
        h2: "1.5em",
        mh2: "1.25em",
        body: "1.125em",
        mbody: "1em",
        menu: "1em",
        footer: "0.75em",
      },
      lineHeight: {
        "140": "1.4",
        "120": "1.2",
        "100": "1",
        "80": "0.8",
        "70": "0.7",
        "60": "0.6",
        "40": "0.4",
        "20": "0.2",
        "0": "0",
      },
      fontWeight: {
        menu: "600",
      },

      colors: {
        transparent: "transparent",
        white: "#FFFFFF",
        black: "#1C1B1B",
        slate: "#758390",
        grey1: "#EFEFEF",
        grey2: "#DBE0E5",
        green: "#B4DFC4",
        yellow: "#F1B10B",
        bg: "#efefef",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      screens: {
        "2xl": "2048px",
        "3xl": "3840px",
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
        "scale-up": {
          "0%": { transform: "scale(0)" },
          "100%": { transform: "scale(1)" },
        },
        "border-slide": {
          // from: { width: "0" },
          // to: { width: "100%" },
        },
      },

      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "scale-up": "scale-up 0.4s ease-out",
        "border-slide": "border-slide  0.5s linear forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
