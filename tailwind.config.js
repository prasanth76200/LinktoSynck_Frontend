/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Ensures Tailwind scans all source files
  ],
  theme: {
    extend: {
      // Extend with additional color palettes, typography, etc., for brand consistency
      colors: {
        primary: "#1D4ED8", // Example primary color, adjust based on your design
        secondary: "#64748B",
        accent: "#22D3EE",
      },
      fontFamily: {
        priFont: ["Nunito Sans", "sans-serif"],
        secFont: ['"Inter"', "sans-serif"],
      },
      spacing: {
        128: "32rem", // Example for custom spacing, adjust based on needs
        144: "36rem",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "3rem",
        xl: "4rem",
        "2xl": "3rem",
      },
    },
  },
  plugins: [
    // Include necessary plugins for your enterprise needs
    require('@tailwindcss/forms'), // Optimizes form elements
    require('@tailwindcss/typography'), // Adds prose classes for text content
    require('@tailwindcss/aspect-ratio'), // Helps with responsive images and videos
  ],
  corePlugins: {
    // Disable unused core plugins for better performance if needed
    container: true,
  },
  safelist: [
    // Safelist essential classes to avoid purging issues
    'bg-primary', 'text-secondary', 'p-4', // Example classes
  ],
  darkMode: 'class', // Enables dark mode with a class-based approach
  future: {
    // Optional: Enable future Tailwind features that will become defaults
    hoverOnlyWhenSupported: true,
  },
  variants: {
    extend: {
      // Extend variants as needed for interactivity and UI states
      backgroundColor: ['active', 'hover', 'focus'],
      textColor: ['group-hover', 'focus-visible'],
      padding: ['responsive'], // Allows responsive padding utilities
      margin: ['responsive'], // Allows responsive margin utilities
      display: ['responsive'], // Enables responsive display utilities (block, flex, etc.)
    },
  },
};
