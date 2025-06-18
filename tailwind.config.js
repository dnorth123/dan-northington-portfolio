/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Executive Primary Palette - Professional authority colors
        executive: {
          navy: '#1e3a8a',        // Primary brand color for headers and CTAs
          'navy-light': '#3b82f6', // Lighter navy for hover states
          'navy-dark': '#1e40af',   // Darker navy for emphasis
          steel: '#475569',         // Secondary headings and important text
          silver: '#94a3b8',        // Subtle accents and borders
          charcoal: '#374151',      // Primary body text
          slate: '#64748b',         // Muted text and secondary content
          'slate-light': '#94a3b8', // Very light text
        },
        // Business Impact Accent Colors
        impact: {
          success: '#059669',       // Growth metrics and positive outcomes
          'success-light': '#10b981', // Lighter success for backgrounds
          revenue: '#dc2626',       // Revenue highlights and financial metrics
          'revenue-light': '#ef4444', // Lighter revenue color
          efficiency: '#2563eb',    // Process improvements and optimization
          'efficiency-light': '#3b82f6', // Lighter efficiency color
          innovation: '#7c3aed',    // Technology leadership and innovation
          'innovation-light': '#8b5cf6', // Lighter innovation color
        },
        // Professional Neutrals - Enhanced gray scale
        neutral: {
          25: '#fefefe',
          50: '#f8fafc',
          100: '#f1f5f9',
          150: '#e8eef5',
          200: '#e2e8f0',
          250: '#d6dde7',
          300: '#cbd5e1',
          350: '#b8c5d1',
          400: '#94a3b8',
          450: '#7c8fa3',
          500: '#64748b',
          550: '#526070',
          600: '#475569',
          650: '#3d4852',
          700: '#334155',
          750: '#2a3441',
          800: '#1e293b',
          850: '#172132',
          900: '#0f172a',
          950: '#0a0f1c',
        }
      },
      fontFamily: {
        'executive': ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        'display': ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'executive-3xl': ['3.75rem', { lineHeight: '1', fontWeight: '800', letterSpacing: '-0.025em' }],
        'executive-2xl': ['3rem', { lineHeight: '1.1', fontWeight: '700', letterSpacing: '-0.025em' }],
        'executive-xl': ['2.25rem', { lineHeight: '1.2', fontWeight: '600', letterSpacing: '-0.025em' }],
        'executive-lg': ['1.875rem', { lineHeight: '1.3', fontWeight: '600' }],
        'executive-md': ['1.5rem', { lineHeight: '1.4', fontWeight: '500' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      boxShadow: {
        'executive': '0 10px 25px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'executive-lg': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
    },
  },
  plugins: [],
}
