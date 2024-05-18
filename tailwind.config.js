const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    purge: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Nunito", ...defaultTheme.fontFamily.sans],
            },
        },

        colors: {
            primary: {
                '600': '#3d8b3f',
            },
            secondary: {
                '300': '#AF4A49FF',
                '600': '#e74240',
            },
            dark: {
                '100': '#f8f9fa',
                '300': '#dbe6ec',
                '600': '#58595a',
            },
        },
        fontFamily: {
            "poppins": ['"Poppins"', "sans-serif"],
        },
    },

    variants: {
        extend: {
            opacity: ["disabled"],
        },
    },

    plugins: [require("@tailwindcss/forms")],
};
