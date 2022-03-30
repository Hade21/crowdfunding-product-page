module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                "moderate-cyan": "hsl(176, 50%, 47%)",
                "dark-cyan": "hsl(176, 72%, 28%)",
                "black-custom": "hsl(0, 0%, 0%)",
                "dark-grey": "hsl(0, 0%, 48%)",
            },
            fontFamily: {
                commissioner: ["Commissioner", "sans-serif"],
            },
            backgroundImage: {
                desktop: "url('./images/image-hero-desktop.jpg')",
                mobile: "url('./images/image-hero-mobile.jpg')",
            },
        },
    },
    plugins: [],
};