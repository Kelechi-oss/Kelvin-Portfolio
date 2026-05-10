import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./sanity/**/*.{ts,tsx}"
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1280px"
      }
    },
    extend: {
      colors: {
        navy: {
          950: "#05070d",
          900: "#0a1128",
          800: "#0f1a3c",
          700: "#162454",
          600: "#1f3175",
          500: "#2a4099",
          400: "#3b58c4"
        },
        gold: {
          DEFAULT: "#d4af37",
          50: "#fdf8e7",
          100: "#f8edb8",
          200: "#f0db7c",
          300: "#e6c452",
          400: "#d4af37",
          500: "#b8932a",
          600: "#937321",
          700: "#6e561a"
        },
        ivory: "#f5f1e8",
        background: "#05070d",
        foreground: "#f5f1e8",
        muted: {
          DEFAULT: "#0f1a3c",
          foreground: "#a8b2cf"
        },
        card: {
          DEFAULT: "#0a1128",
          foreground: "#f5f1e8"
        },
        border: "rgba(212, 175, 55, 0.18)",
        input: "rgba(212, 175, 55, 0.25)",
        ring: "#d4af37"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        mono: ["var(--font-jetbrains)", "monospace"]
      },
      backgroundImage: {
        "gold-gradient":
          "linear-gradient(135deg, #d4af37 0%, #f0db7c 50%, #b8932a 100%)",
        "navy-gradient":
          "linear-gradient(135deg, #05070d 0%, #0a1128 50%, #162454 100%)",
        "radial-gold":
          "radial-gradient(circle at 50% 0%, rgba(212,175,55,0.15), transparent 60%)"
      },
      boxShadow: {
        "gold-glow": "0 0 40px -10px rgba(212, 175, 55, 0.4)",
        "navy-deep": "0 25px 80px -20px rgba(5, 7, 13, 0.9)"
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" }
        }
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out forwards",
        shimmer: "shimmer 3s linear infinite"
      }
    }
  },
  plugins: [require("tailwindcss-animate")]
};

export default config;
