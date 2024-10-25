import type { Metadata } from 'next'
import { League_Spartan } from 'next/font/google'
// import localFont from 'next/font/local'
import '@/styles/globals.css'

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });
const leagueSpartan = League_Spartan({
	weight: ['500', '600', '700'],
	style: 'normal',
	subsets: ['latin']
})
// const spartanBold = localFont({
// 	src: './fonts/LeagueSpartan-Bold.ttf',
// 	variable: '--font-geist-sans',
// 	weight: '700'
// })
// const spartanMedium = localFont({
// 	src: './fonts/LeagueSpartan-Medium.ttf',
// 	variable: '--font-geist-sans',
// 	weight: '600'
// })
// const spartanSemiBold = localFont({
// 	src: './fonts/LeagueSpartan-SemiBold.ttf',
// 	variable: '--font-geist-sans',
// 	weight: '500'
// })

export const metadata: Metadata = {
	title: 'Room Homepage'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en" className={leagueSpartan.className}>
			<body>{children}</body>
		</html>
	)
}
