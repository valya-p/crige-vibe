/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                aclonica: ['Aclonica', 'sans'],
                amaranth: ['Amaranth', 'sans'],
            },
            colors: {
                'dark-purple': '#6D36C7',
                pink: '#F65CF0',
            },
        },
    },
    plugins: [],
};
