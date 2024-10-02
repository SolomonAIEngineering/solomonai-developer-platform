import baseConfig from '@v1/ui/tailwind.config.ts';
const defaultTheme = require('tailwindcss/defaultTheme');
const config = {
    darkMode: 'class',
    content: [
        './pages/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './app/**/*.{ts,tsx}',
        './src/**/*.{ts,tsx}',
    ],
    safelist: ['ProseMirror'],
    presets: [baseConfig],
};
export default config;
