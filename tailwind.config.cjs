const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: [
					'InterVariable',
					'Inter',
					...defaultTheme.fontFamily.sans,
				],
			},
			colors: {
				blue: '#00acee',
				lightblue: '#d7f5f5',
				lightorange: '#fbf8f3',
			},
		},
	},
	plugins: [],
};
