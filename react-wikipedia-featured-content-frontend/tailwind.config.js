/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,js,ts,jsx,tsx}", "./public/index.html"],
    darkMode: ["class", '[data-theme="dark"]'],
    theme: {
        extend: {},
    },
    daisyui: {
        themes: ["light", "dark"],
    },
    plugins: [require("daisyui")],
};
