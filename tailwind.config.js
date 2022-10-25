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
      xs: '300px',
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
        primary: '#161F27',
        secondary: '#3C5368',
        tertiary: '#253441',
        accent: {
          DEFAULT: '#FFD166',
          hover: '#E77874',
        },
        paragraph: '#F5F5F5',
      },
    },
  },
  plugins: [],
};
