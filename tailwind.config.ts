import type { Config } from 'tailwindcss'

export default {
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      fontFamily: {
        arkham: ['var(--font-arkham)'],
        netrunner: ['var(--font-netrunner)'],
      },
      fontVariantCaps: {
        small: 'small-caps',
      },
    },
  },
  plugins: [],
} satisfies Config
