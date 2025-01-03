import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "2rem",
      },
    },
    extend: {
      fontFamily: {
        sans: 'var(--font-sans)',
        serif: 'var(--font-serif)',
      },
      animation: {
        "move-left": "move-left 1s linear infinite",
        "move-right": "move-right 1s linear infinite",
        "logo": "logo 12s ease infinite alternate",
        'button-hover': 'button-hover 0.2s ease-out forwards',
        'status-pulse': 'status-pulse 2s ease-in-out infinite'
      },
      keyframes: {
        'status-pulse': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.7', transform: 'scale(0.9)' }
        },
        'button-hover': {
          '0%': { transform: 'translateY(0) scale(1)' },
          '100%': { transform: 'translateY(-4px) scale(1.02)' }
        },
        "move-left": {
          "0%": {
            transform: 'translateX(0%)'
          },
          "100%": {
            transform: 'translateX(-50%)'
          }
        },
        "move-right": {
          "0%": {
            transform: 'translateX(-50%)'
          },
          "100%": {
            transform: 'translateX(0%)'
          }
        },
        "logo": {
          "0%": {
            strokeWidth: "0",
            strokeDasharray: "1 100"
          },
          "25%": {
            strokeWidth: "0.3",
            strokeDasharray: "100 0"
          },
          "60%, 100%": {
            strokeWidth: "0"
          }
        }
      }
    },
  },
  plugins: [],
};

export default config;