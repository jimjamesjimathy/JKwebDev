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
        primary: '#293241',
        secondary: '#3D5A80',
        tertiary: '#98C1D9',
        accent: {
          DEFAULT: '#F07556',
          hover: '#F5A38F',
          brown: '#E79A5F',
          brownHover: '#ECB183'
        },
        paragraph: '#E0FBFC',
      },
    },
  },
  plugins: [],
};
