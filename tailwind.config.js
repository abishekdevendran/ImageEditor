/** @type {import('tailwindcss').Config} */
const nativewind = require('nativewind/tailwind/css');
module.exports = {
	jit: true,
	content: [
		'./App.{js,jsx,ts,tsx}',
		'./screens/**/*.{js,jsx,ts,tsx}',
		'./components/**/*.{js,jsx,ts,tsx}'
	],
	theme: {
		extend: {
			colors: {
				primary: '#2d2aed',
				secondary: '#cac4ff',
				accent: '#82f2c5',
				neutral: '#1C1F22',
				'base-100': '#E3E5E8',
				info: '#98C5F6',
				success: '#38D6B1',
				warning: '#D0920B',
				danger: '#F41520',
				'primary-dark': '#b5a0ff',
				'secondary-dark': '#f411a5',
				'accent-dark': '#b2f497',
				'neutral-dark': '#222239',
				'base-100-dark': '#323543',
				'info-dark': '#7C9DDA',
				'success-dark': '#145C49',
				'warning-dark': '#EFAC48',
				'danger-dark': '#DF3A50'
			},
			textColor: {
				primary: '#000000',
				dark: '#FFFFFF'
			}
		}
	},
	plugins: [nativewind]
};
