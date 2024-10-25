'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Logo } from './icons/logo'

type Props = {}

const Header = (props: Props) => {
	const pathname = usePathname()
	const [isMobile, setIsMobile] = useState(false)

	return (
		<header className="w-full bg-transparent px-20 py-8 fixed top-10 left-0">
			<div className="w-full flex items-center justify-start gap-12">
				<Logo />
				<nav className="flex items-center gap-8 ">
					<Link
						className={`lowercase text-white text-lg border-b-2 border-b-transparent anima hover:border-b-white  ${
							pathname === '/' ? '' : ''
						}`}
						href={'/'}
					>
						Home
					</Link>
					<Link
						className={`lowercase text-white text-lg border-b-2 border-b-transparent anima hover:border-b-white  ${
							pathname === '/' ? '' : ''
						}`}
						href={'/'}
					>
						Shop
					</Link>
					<Link
						className={`lowercase text-white text-lg border-b-2 border-b-transparent anima hover:border-b-white  ${
							pathname === '/' ? '' : ''
						}`}
						href={'/'}
					>
						About
					</Link>
					<Link
						className={`lowercase text-white text-lg border-b-2 border-b-transparent anima hover:border-b-white  ${
							pathname === '/' ? '' : ''
						}`}
						href={'/'}
					>
						Contact
					</Link>
				</nav>
			</div>
		</header>
	)
}

export default Header
