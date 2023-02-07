/** @type {import('tailwindcss').Config} */

const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  corePlugins: {
    // @tailwindcss/aspect-ratio
    aspectRatio: false,
    // disable unused core plugins
    touchAction: false,
    ringOffsetWidth: false,
    ringOffsetColor: false,
    scrollSnapType: false,
    borderOpacity: false,
    textOpacity: false,
    fontVariantNumeric: false,
  },
  theme: {
    extend: {
      colors: {
        bgColor: 'var(--theme-bg)',
        textColor: 'var(--theme-text)',
        link: 'var(--theme-link)',
        accent: 'var(--theme-accent)',
        'accent-2': 'var(--theme-accent-2)',
      },
      fontFamily: {
        // Add any custom fonts here
        sans: ['Open Sans', ...fontFamily.sans],
        serif: [...fontFamily.serif],
        mono: ['Fira Mono', ...fontFamily.mono],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': 'var(--theme-text)',
            '--tw-prose-headings': 'var(--theme-text)',
            '--tw-prose-links': 'var(--theme-text)',
            '--tw-prose-bold': 'var(--theme-text)',
            '--tw-prose-bullets': 'var(--theme-text)',
            '--tw-prose-quotes': 'var(--theme-quote)',
            '--tw-prose-code': 'var(--theme-text)',
            '--tw-prose-hr': '0.5px dashed #666',
            '--tw-prose-th-borders': '#666',
            strong: {
              fontWeight: '700',
            },
          },
        },
      }),
    },
  },
  plugins: [
    // require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
