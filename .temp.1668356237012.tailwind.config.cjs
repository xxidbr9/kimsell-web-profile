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
                    black: "#1a1a1a",
                    white: "#ffffff",
                }
            },
            plugins: []
        };