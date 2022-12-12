/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            screens: {
                mobile: "320px",
                tablet: "639px",
                laptop: "1023px",
                desktop: "1279px"
            },
            colors: {
                black: "#1E1E1E",
                white: "#ffffff",
            },
        }
    },
    plugins: []
};