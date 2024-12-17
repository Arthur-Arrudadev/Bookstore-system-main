/** @type {import('tailwindcss').Config} */
import {
    navbar,
    home,
    dashboard,
    form
} from './app.colors.json'

export default {
    content: [
        'index.html',
        'src/**/*.{js,jsx,md,mdx}'
    ],
    theme: {
        extend: {
            animation: {
                'spin-slow': 'spin 3s linear infinite',
            },
            keyframes: {
                'spin-slow': {
                    '0%, 100%': { transform: 'rotate(-3deg)' },
                    '50%': { transform: 'rotate(3deg)' },
                }
            },
            colors: {
                navbar,
                home,
                dashboard,
                form,
                primary: "#5c6ac4",
                secondary: "#ecc94b"
            }
        },
    },
    plugins: [],
}

