import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // SINAFAYA Brand Colors
        ivory: {
          50: '#FDFBF7',
          100: '#FAF6ED',
          200: '#F5EEDB',
          300: '#EFE3C0',
          400: '#E8D59E',
          500: '#E0C475',
        },
        cream: {
          50: '#FEFDF8',
          100: '#FDF9F0',
          200: '#FAF0E1',
          300: '#F5E3C8',
          400: '#EFD4A3',
          500: '#E8C277',
        },
        espresso: {
          50: '#F3F1EF',
          100: '#E8E3DD',
          200: '#D1C9BE',
          300: '#B3A693',
          400: '#8F7E6B',
          500: '#6B5B47',
          600: '#544636',
          700: '#3D3227',
          800: '#2D251E',
          900: '#1E1914',
        },
        burgundy: {
          50: '#FAF0F1',
          100: '#F5E1E3',
          200: '#EBC4C8',
          300: '#DDA0A6',
          400: '#CA727C',
          500: '#B54A5A',
          600: '#9D3847',
          700: '#7E2D38',
          800: '#652730',
          900: '#53222A',
        },
        beige: {
          50: '#FAF8F5',
          100: '#F5F0EB',
          200: '#E8DBD0',
          300: '#D8C5B3',
          400: '#C4A88E',
          500: '#B08E70',
          600: '#9A755C',
          700: '#7E5E4B',
          800: '#684E40',
          900: '#554136',
        },
        // Semantic colors
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        muted: 'var(--muted)',
        'muted-foreground': 'var(--muted-foreground)',
        border: 'var(--border)',
        ring: 'var(--ring)',
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'Georgia', 'serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['clamp(48px, 8vw, 96px)', { lineHeight: '0.95', letterSpacing: '-0.03em' }],
        'display-lg': ['clamp(36px, 5vw, 58px)', { lineHeight: '1.0', letterSpacing: '-0.025em' }],
        'display-md': ['clamp(28px, 4vw, 42px)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-sm': ['clamp(22px, 3vw, 32px)', { lineHeight: '1.2', letterSpacing: '-0.015em' }],
        'heading-lg': ['clamp(20px, 2.5vw, 28px)', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
        'heading-md': ['clamp(18px, 2vw, 24px)', { lineHeight: '1.35' }],
        'heading-sm': ['clamp(16px, 1.5vw, 20px)', { lineHeight: '1.4' }],
        'body-lg': ['16px', { lineHeight: '1.7' }],
        'body-md': ['15px', { lineHeight: '1.7' }],
        'body-sm': ['14px', { lineHeight: '1.6' }],
        'caption': ['12px', { lineHeight: '1.5', letterSpacing: '0.05em' }],
        'overline': ['10px', { lineHeight: '1.4', letterSpacing: '0.2em', textTransform: 'uppercase' }],
      },
      spacing: {
        'space-xs': '4px',
        'space-sm': '8px',
        'space-md': '16px',
        'space-lg': '24px',
        'space-xl': '32px',
        'space-2xl': '48px',
        'space-3xl': '64px',
        'space-4xl': '96px',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1.5rem',
          sm: '2rem',
          lg: '2.5rem',
          xl: '3rem',
          '2xl': '4rem',
        },
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1440px',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'slide-down': 'slideDown 0.4s ease-out forwards',
        'scale-in': 'scaleIn 0.3s ease-out forwards',
        'hover-lift': 'hoverLift 0.3s ease-out forwards',
        'shimmer': 'shimmer 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        hoverLift: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-8px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      transitionDuration: {
        'fast': '150ms',
        'normal': '300ms',
        'slow': '500ms',
      },
      transitionTimingFunction: {
        'ease-out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'ease-spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      boxShadow: {
        'soft': '0 2px 16px rgba(30, 25, 20, 0.06)',
        'medium': '0 8px 32px rgba(30, 25, 20, 0.08)',
        'strong': '0 16px 48px rgba(30, 25, 20, 0.12)',
        'inner-soft': 'inset 0 2px 8px rgba(30, 25, 20, 0.04)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
    },
  },
  plugins: [],
};

export default config;