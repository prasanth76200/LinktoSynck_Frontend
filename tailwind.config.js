/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        geist: "geist-sans",
        mono: ['var(--font-geist-mono)']
    },
    
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "3rem",
        xl: "4rem",
        "2xl": "4rem",
        "3xl": "5rem",
      },
    },
  },
  },
  plugins: [],
}

