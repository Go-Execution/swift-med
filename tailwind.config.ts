import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#1E3A8A',
          blue: '#2563EB',
          'blue-dark': '#1D4ED8',
          'blue-light': '#EFF6FF',
          green: '#15803D',
          'green-light': '#DCFCE7',
          amber: '#D97706',
          'amber-light': '#FEF3C7',
          red: '#DC2626',
          slate: '#0F172A',
          muted: '#475569',
          border: '#E2E8F0',
          surface: '#F8FAFC',
        },
      },
      fontFamily: {
        sans: ['var(--font-jakarta)', 'system-ui', 'sans-serif'],
        display: ['var(--font-outfit)', 'var(--font-jakarta)', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
