module.exports = {
    mode: "jit",
    purge: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            spacing: {
                "1/1": "100%",
                "1/2": "50%",
                "1/4": "25%",
                "1/3": "33.3%",
            },
            transitionProperty: {
                height: "height",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [require("tailwind-scrollbar-hide")],
}
