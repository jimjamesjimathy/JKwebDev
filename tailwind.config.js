module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Fredericka The Great',
      body: 'Urbanist',
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        lg: '3rem',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      content: {
        about: 'url("/src/assets/img/outline-text/about.svg")',
        portfolio: 'url("/src/assets/img/outline-text/portfolio.svg")',
        services: 'url("/src/assets/img/outline-text/services.svg")',
        testimonials: 'url("/src/assets/img/outline-text/testimonials.svg")',
        contact: 'url("/src/assets/img/outline-text/contact.svg")',
      },
      colors: {
        primary: '#1F1E1F',
        secondary: '#0A0A0A',
        tertiary: '#3E3C3E',
        accent: {
          DEFAULT: '#8C1C18',
          hover: '#E77874',
        },
        paragraph: '#878e99',
      },
    },
  },
  plugins: [],
};
