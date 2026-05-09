import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        malzz: {
          blue:        "#6C9EFF",
          purple:      "#B19DFF",
          peach:       "#FFBDA6",
          lavender:    "#EAE5FF",
          blueLight:   "#EEF2FF",
          purpleLight: "#F5F3FF",
          peachLight:  "#FFF3EF",
          grayLight:   "#F8F9FC",
          grayMid:     "#EAECF0",
          textDark:    "#18192B",
          textMid:     "#4A5264",
          textLight:   "#8A93A8",
        },
      },
      borderRadius: {
        lg:   "var(--radius)",
        md:   "calc(var(--radius) - 2px)",
        sm:   "calc(var(--radius) - 4px)",
        xl:   "1rem",
        "2xl":"1.25rem",
        "3xl":"1.75rem",
        "4xl":"2.25rem",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-pastel":
          "linear-gradient(145deg, #EEF2FF 0%, #F5F3FF 30%, #FFF3EF 65%, #F0FDF4 100%)",
        "gradient-mesh":
          "radial-gradient(at 20% 20%, rgba(108,158,255,0.08) 0, transparent 60%), radial-gradient(at 80% 10%, rgba(177,157,255,0.08) 0, transparent 55%), radial-gradient(at 60% 80%, rgba(255,189,166,0.07) 0, transparent 55%)",
        "gradient-blue-purple":
          "linear-gradient(135deg, #6C9EFF 0%, #B19DFF 100%)",
        "gradient-purple-peach":
          "linear-gradient(135deg, #B19DFF 0%, #FFBDA6 100%)",
        "gradient-peach-purple":
          "linear-gradient(135deg, #FFBDA6 0%, #B19DFF 100%)",
        "gradient-card":
          "linear-gradient(135deg, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.65) 100%)",
      },
      boxShadow: {
        "xs":        "0 1px 2px rgba(0,0,0,0.04)",
        "soft":      "0 2px 8px rgba(108,158,255,0.07), 0 1px 3px rgba(0,0,0,0.04)",
        "card":      "0 2px 12px rgba(108,158,255,0.07), 0 1px 4px rgba(0,0,0,0.04)",
        "card-hover":"0 6px 24px rgba(108,158,255,0.12), 0 2px 8px rgba(0,0,0,0.06)",
        "glass":     "0 4px 24px rgba(108,158,255,0.08), 0 1px 6px rgba(0,0,0,0.03)",
        "glass-lg":  "0 12px 48px rgba(108,158,255,0.12), 0 4px 12px rgba(0,0,0,0.05)",
        "glass-blue":"0 8px 32px rgba(108,158,255,0.22), 0 2px 8px rgba(108,158,255,0.12)",
        "glow-blue": "0 0 0 3px rgba(108,158,255,0.18)",
        "glow-purple":"0 0 0 3px rgba(177,157,255,0.18)",
        "inset-soft":"inset 0 1px 3px rgba(0,0,0,0.05)",
      },
      animation: {
        "fade-in":    "fadeIn 0.5s ease-out",
        "slide-up":   "slideUp 0.4s ease-out",
        "slide-in":   "slideIn 0.3s ease-out",
        "scale-in":   "scaleIn 0.3s cubic-bezier(0.34,1.56,0.64,1)",
        "float":      "float 6s ease-in-out infinite",
        "pulse-soft": "pulseSoft 3s ease-in-out infinite",
        "shimmer":    "shimmer 1.8s infinite ease-in-out",
      },
      keyframes: {
        fadeIn:    { "0%": { opacity: "0" },            "100%": { opacity: "1" } },
        slideUp:   { "0%": { opacity: "0", transform: "translateY(14px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        slideIn:   { "0%": { opacity: "0", transform: "translateX(-14px)" }, "100%": { opacity: "1", transform: "translateX(0)" } },
        scaleIn:   { "0%": { opacity: "0", transform: "scale(0.96)" },       "100%": { opacity: "1", transform: "scale(1)" } },
        float:     { "0%, 100%": { transform: "translateY(0px)" },           "50%": { transform: "translateY(-14px)" } },
        pulseSoft: { "0%, 100%": { opacity: "0.55" },                        "50%": { opacity: "1" } },
        shimmer:   { "0%": { backgroundPosition: "-200% 0" },                "100%": { backgroundPosition: "200% 0" } },
      },
      backdropBlur: {
        xs: "2px",
        "2xl": "40px",
        "3xl": "64px",
      },
      transitionTimingFunction: {
        "bounce-in": "cubic-bezier(0.34, 1.56, 0.64, 1)",
        "soft-out":  "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
