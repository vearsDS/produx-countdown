/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      // padding: "2rem",
      screens: {
        "2xl": "1400px",

      },
    },
    extend: {
      screens: {
        "promax": "430px"
      },
      colors: {
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
        }
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "space-pattern": "url('/imgs/bg-stars.png')",
        "service-section": "url('/imgs/bg-service-section.png')",
        "abstract-pattern": "url('/img/bg-pattern-2.png')",
        "pricing-plan-pattern": "url('/img/bg-service-section.png')",
        "gradient-1": "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #000 100%)",
        "gradient-2": "linear-gradient(180deg, #000 100%, #000 100%)",
        "gradient-3": "linear-gradient(180deg, #000 0%, rgba(0, 0, 0, 0.70) 100%)",
        "gradient-card": "linear-gradient(180deg, rgba(96, 96, 96, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%)",
        "gradient-partner": "linear-gradient(0deg, #073CA3 0%, #002459 100%)",
        "gradient-bottom-nav": "linear-gradient(180deg, rgba(60, 60, 60, 0.50) 0%, rgba(39, 39, 39, 0.50) 100%)",
        "gradient-bottom-nav-border": "linear-gradient(180deg, #F6F7F7 0%, #909191 100%)",
        "gradient-fill-glass-1": "linear-gradient(180deg, rgba(77, 77, 77, 0.50) 0%, rgba(39, 39, 39, 0.50) 100%)",
        "gradient-fill-glass-2": "linear-gradient(180deg, rgba(141, 141, 141, 0.50) 0%, rgb(64, 64, 64, 0.50) 100%)",
        "gradient-protocol": "linear-gradient(90deg, #070707 42.55%, rgba(7, 7, 7, 0.00) 81.05%);",
        "gradient-protocol-l": "linear-gradient(270deg, #070707 42.55%, rgba(7, 7, 7, 0.00) 81.05%);",
        "gradient-casestudy-hover": "linear-gradient(180deg, rgba(255, 255, 255, 0.50) 0%, rgba(255, 255, 255, 0.00) 100%);",
        "gradient-quote-card": "linear-gradient(180deg, rgba(0, 0, 0, 0.20) 0.09%, rgba(0, 0, 0, 0.80) 100%)"
      },
      fontWeight: {
        'normal': "400",
        'light': "700"
      }
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [],
}

