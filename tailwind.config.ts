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
			lg: ['16px', '22px'],
			xl: ['18px', '24px'],
			'2xl': ['34px', '36px'],
			'3xl': ['44px', '40px']
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
			keyframes: {
				'slide-in-right': {
					'0%': { transform: 'translateX(100%)' },
					'100%': { transform: 'translateX(0)' }
				},
				'slide-in-left': {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(0)' }
				},
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				'fade-out': {
					'0%': { opacity: '1' },
					'100%': { opacity: '0' }
				}
			}
		},
		animation: {
			'slide-in-right': 'slide-in-right 0.8s ease-in-out',
			'slide-in-left': 'slide-in-left 0.8s ease-in-out',
			'fade-in': 'fade-in 0.8s ease-in-out',
			'fade-out': 'fade-out 0.8s ease-in-out'
		}
	},
	plugins: []
}
export default config
