/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        container: {
            center: true,
            padding: '1.5rem',
            screens: {
                sm: '640px',
                md: '768px',
                lg: '1024px',
                xl: '1280px',
            },
        },
        extend: {
            animation: {
                'pan-slow': 'pan 20s linear infinite',
            },
            keyframes: {
                pan: {
                    '0%': { objectPosition: 'center' },
                    '50%': { objectPosition: 'center 55%' },
                    '100%': { objectPosition: 'center' },
                }
            }
        },
    },
    plugins: [],
}
