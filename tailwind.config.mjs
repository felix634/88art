/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                // --- 88 ART CUSTOM COLORS ---
                'primary-dark': '#1A1A1A',       // Sötét Alap / Fekete
                'accent-fire': '#FF4500',        // Élénk Narancs/Vörös (Horror/Dráma)
                'accent-neon': '#00FFFF',        // Elektromos Cián (Fantasy/Sci-Fi)
                'bg-light': '#F8F8F8',           // Világos (tartalomhoz)
            },
            fontFamily: {
                'title': ['Metal Mania', 'sans-serif'], // Dinamikus, vastag címekhez
                'body': ['Inter', 'sans-serif'],   // Letisztult törzsszöveghez
            },
            animation: {
                'fade-in': 'fadeIn 1s ease-out forwards',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
            },
        },
    },
    plugins: [],
}