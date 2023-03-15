/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx}',
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',

        // Or if using `src` directory:
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                transparent: '#00000000',
                primary: '#FDC355',
                secondary: '#FF835B',
                textLight: '#AAC1C8',
                backgroundDark: '#3F4445',
            },
            fontSize: {
                '10xl': '10rem'
            }
        },
    },
};
