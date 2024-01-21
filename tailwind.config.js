/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		fontFamily: {
			pop: ['Poppins'],
			openSans: ['"Open Sans"'],
		},
		extend: {
			backgroundImage: {
				bgMobile: "url('/src/assets/bg-mobile.svg')",
				bgDesktop: "url('/src/assets/bg-desktop.svg')",
			},
		},
	},
	plugins: [],
};
