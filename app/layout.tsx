import type { Metadata } from 'next'
import { League_Spartan } from 'next/font/google'
import '@/styles/globals.css'
import Header from '@/components/header'

const leagueSpartan = League_Spartan({
	weight: ['500', '600', '700'],
	style: 'normal',
	subsets: ['latin']
})

export const metadata: Metadata = {
	title: 'Room Homepage'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className={leagueSpartan.className}>
			<body>
				<div className="w-full min-h-screen relative flex flex-col gap-0">
					<Header />
					{children}
				</div>
			</body>
		</html>
	)
}
