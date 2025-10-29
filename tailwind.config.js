/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                // Dark theme colors
                'code-bg-dark': '#0d1117',
                'code-surface-dark': '#161b22',
                'code-border-dark': '#30363d',
                'code-text-dark': '#e6edf3',
                'code-text-muted-dark': '#7d8590',

                // Light theme colors
                'code-bg-light': '#ffffff',
                'code-surface-light': '#f6f8fa',
                'code-border-light': '#d0d7de',
                'code-text-light': '#24292f',
                'code-text-muted-light': '#656d76',

                // Shared accent colors
                'code-accent': '#0969da',
                'code-accent-dark': '#58a6ff',
                'code-success': '#1a7f37',
                'code-success-dark': '#3fb950',
                'code-warning': '#9a6700',
                'code-warning-dark': '#d29922',
                'code-error': '#cf222e',
                'code-error-dark': '#f85149',
                'code-purple': '#8250df',
                'code-purple-dark': '#a5a2ff',
                'code-pink': '#bf8700',
                'code-pink-dark': '#ff7eb6',
                'code-orange': '#bc4c00',
                'code-orange-dark': '#ffa657',
                'code-string': '#032f62',
                'code-string-dark': '#a5d6ff',
            },
            fontFamily: {
                'mono': ['JetBrains Mono', 'Fira Code', 'Monaco', 'Consolas', 'monospace'],
                'code': ['Source Code Pro', 'Monaco', 'Consolas', 'monospace'],
            },
            animation: {
                'typing': 'typing 3.5s steps(40, end), blink-caret .75s step-end infinite',
                'glow': 'glow 2s ease-in-out infinite alternate',
                'float': 'float 6s ease-in-out infinite',
            },
            keyframes: {
                typing: {
                    'from': { width: '0' },
                    'to': { width: '100%' }
                },
                'blink-caret': {
                    'from, to': { 'border-color': 'transparent' },
                    '50%': { 'border-color': '#58a6ff' }
                },
                glow: {
                    'from': { 'box-shadow': '0 0 20px #58a6ff' },
                    'to': { 'box-shadow': '0 0 30px #58a6ff, 0 0 40px #58a6ff' }
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' }
                }
            }
        },
    },
    plugins: [],
}