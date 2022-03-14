module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                // gray: "#424242",
                dark: '#6d6875',
                accent: '#ffcb69',
                secondary: '#52504b',
                text: '#f8edeb'
            },
            fontFamily: {
                'work': '"Work Sans", sans-serif',
            },
        },
    },
    variants: {
        extend: {
            translate: ['group-hover'],
        },
    },
    plugins: [],
};
