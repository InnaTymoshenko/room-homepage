// import Image from 'next/image'

import AboutSection from '@/components/about-section'
import Header from '@/components/header'
import MainSection from '@/components/main-section'

export default function Home() {
	return (
		<div className="w-full h-screen relative">
			<Header />
			<MainSection />
			<AboutSection />
		</div>
	)
}
