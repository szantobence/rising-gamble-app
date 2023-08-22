/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        header: ['nunitoSans', 'sans-serif'],
        body: ['sourceSansPro', 'sans-serif'],
        'body-semi': ['sourceSansProSemi', 'sans-serif'],
        'body-bold': ['sourceSansProBold', 'sans-serif'],
      },
      minHeight: {
        container: '200px',
      },
      colors: {
				'space-blue': '#1E1656',
      }
    },
  },
  plugins: [],
}

