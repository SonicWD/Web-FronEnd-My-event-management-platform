/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ], theme: {
    extend: {
      colors: {
        'very-light-pink': '#8b8b8b',
        'text-input-field': '#f7f7f7',
        'hospital-green': '#acd982',
        'difuminado1-bottom': '#8fbf6f',
        'difuminado2-bottom': '#c6e5b5',
        'dark-blue': '#1a237e',
        white: '#ffffff',
        black: '#000000',
        'light-gray': '#f4f4f4',
        gray: '#ccc',
        'lighter-gray': '#e0e0e0',
      },
      fontSize: {
        sm: '14px',
        md: '16px',
        lg: '24px',
      },
      spacing: {
        '2px': '2px',
      },
      boxShadow: {
        '10px': '0px 0px 10px rgba(0, 0, 0, 0.1)',
      },
      borderRadius: {
        '8px': '8px',
        '20px': '20px',
      },
      maxWidth: {
        '400px': '400px',
      },
      width: {
        '80%': '80%',
        '100px': '100px',
      },
    },
  },
  plugins: [],
}

