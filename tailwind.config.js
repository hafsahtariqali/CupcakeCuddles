const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Adding custom fonts
        roboto: ['Roboto', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
        spartan: ['League Spartan', 'serif'],
        alegreya: ['Alegreya', 'serif']
      },
    },
    keyframes: {
      scroll: {
        '0%': { transform: 'translateX(0)' },
        '100%': { transform: 'translateX(-100%)' },
      },
    },
    animation: {
      scroll: 'scroll 700s linear infinite', // Adjust speed here
    },
  },
  plugins: [],
};

module.exports = config;