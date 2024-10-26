'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Logo } from './icons/logo'
import { Hamburger } from './icons/hamburger'

type Props = {}

const Header = (props: Props) => {
	const pathname = usePathname()
	const [isMobile, setIsMobile] = useState(false)

	return (
		<header className="w-full bg-transparent lg:px-20 sx:px-8 py-8 fixed lg:top-10 sx:top-0 left-0">
			<div className="w-full flex items-center justify-start lg:gap-12 sx:gap-[30%]">
				<Hamburger />
				<Logo />
				<nav className="lg:flex sx:hidden items-center gap-8 ">
					<Link
						className={`lowercase text-lg border-b-2 border-b-transparent anima hover:border-b-white  ${
							pathname === '/' ? 'text-white/80' : 'text-white'
						}`}
						href={'/'}
					>
						Home
					</Link>
					<Link
						className={`lowercase text-lg border-b-2 border-b-transparent anima hover:border-b-white  ${
							pathname === '/shop' ? 'text-white/80' : 'text-white'
						}`}
						href={'/shop'}
					>
						Shop
					</Link>
					<Link
						className={`lowercase text-lg border-b-2 border-b-transparent anima hover:border-b-white  ${
							pathname === '/about' ? 'text-white/80' : 'text-white'
						}`}
						href={'/about'}
					>
						About
					</Link>
					<Link
						className={`lowercase text-lg border-b-2 border-b-transparent anima hover:border-b-white  ${
							pathname === '/contact' ? 'text-white/80' : 'text-white'
						}`}
						href={'/contact'}
					>
						Contact
					</Link>
				</nav>
			</div>
		</header>
	)
}

export default Header
