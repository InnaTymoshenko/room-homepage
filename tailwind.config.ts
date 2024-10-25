import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		screens: {
			sx: '350px',
			sm: '480px',
			md: '640px',
			md2: '768px',
			lg: '1023px',
			xl: '1200px',
			'2xl': '1440px',
			'3xl': '1600px'
		},
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
				md: '2.5rem'
			}
		},
		borderRadius: {
			none: '0',
			sm: '.25rem',
			DEFAULT: '.75rem',
			lg: '1rem',
			full: '9999px'
		},
		fontFamily: {
			sans: `"League Spartan", serif`
		},
		fontSize: {
			us: ['10px', '12px'],
			sm: ['12px', '16px'],
			md: ['14px', '20px'],
			lg: ['17px', '24px'],
			xl: ['20px', '28px'],
			'2xl': ['28px', '36px'],
			'3xl': ['46px', '46px']
			// '3.5xl': ['5rem', '6rem'],
			// '4xl': ['6rem', '8rem'],
			// '5xl': ['8rem', '10rem']
		},
		colors: {
			black: 'hsl(0, 0%, 0%)',
			transparent: 'hsl(0,0%,100%,0%)',
			white: 'hsl(0,0%,100%)',
			gray: {
				100: 'hsl(0, 0%, 63%)',
				200: 'hsl(0, 0%, 27%)'
			}
		},
		backgroundColor: ({ theme }) => ({
			...theme('colors'),
			primary: 'rgba(var(--color-white))'
		}),
		textColor: ({ theme }) => ({
			...theme('colors'),
			primary: 'rgba(var(--color-white))'
		}),
		borderColor: ({ theme }) => ({
			...theme('colors'),
			primary: 'rgba(var(--color-white))'
		}),
		extend: {
			// backgroundImage: {
			// 	dark: "url('/images/image-about-dark.jpg')",
			// 	light: "url('/images/image-about-light.jpg')"
			// },
			boxShadow: {
				'3xl': '0px 0px 10px 80px hsl(0, 0.4%, 54%, 36%)'
			}
		}
	},
	plugins: []
}
export default config
