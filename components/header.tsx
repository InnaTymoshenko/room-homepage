'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Logo } from './icons/logo'
import { Hamburger } from './icons/hamburger'
import { Close } from './icons/close'

const Header = () => {
	const pathname = usePathname()
	const [isMobile, setIsMobile] = useState(false)

	return (
		<>
			<header
				className={`w-full  lg:px-20 sx:px-8 lg:py-16 sx:py-12 fixed z-50 top-0 left-0  ${
					isMobile ? 'bg-white' : 'bg-transparent'
				}`}
			>
				<div
					className={`w-full flex items-center lg:justify-start   gap-12 relative ${
						isMobile ? 'sx:justify-end' : 'sx:justify-center'
					}`}
				>
					<Logo className="" />
					{isMobile ? (
						<Close className="absolute left-0 cursor-pointer" onClick={() => setIsMobile(!isMobile)} />
					) : (
						<Hamburger
							className="absolute left-0 lg:hidden sx:block cursor-pointer"
							onClick={() => setIsMobile(!isMobile)}
						/>
					)}
					<nav className={`lg:flex items-center lg:gap-8 sx:gap-4 ${isMobile ? 'sx:flex' : 'sx:hidden'}`}>
						<Link
							className={`lowercase text-lg border-b-2 border-b-transparent anima lg:hover:border-b-white sx:hover:border-b-black  ${
								pathname === '/' ? 'lg:text-white/70 sx:text-black/80' : 'lg:text-white sx:text-black'
							}`}
							href={'/'}
						>
							Home
						</Link>
						<Link
							className={`lowercase text-lg border-b-2 border-b-transparent anima lg:hover:border-b-white sx:hover:border-b-black  ${
								pathname === '/shop' ? 'lg:text-white/70 sx:text-black/80' : 'lg:text-white sx:text-black'
							}`}
							href={'/shop'}
						>
							Shop
						</Link>
						<Link
							className={`lowercase text-lg border-b-2 border-b-transparent anima lg:hover:border-b-white sx:hover:border-b-black  ${
								pathname === '/about' ? 'lg:text-white/70 sx:text-black/80' : 'lg:text-white sx:text-black'
							}`}
							href={'/about'}
						>
							About
						</Link>
						<Link
							className={`lowercase text-lg border-b-2 border-b-transparent anima lg:hover:border-b-white sx:hover:border-b-black  ${
								pathname === '/contact' ? 'lg:text-white/70 sx:text-black/80' : 'lg:text-white sx:text-black'
							}`}
							href={'/contact'}
						>
							Contact
						</Link>
					</nav>
				</div>
			</header>
			{isMobile && <div className="w-full bg-black/20 absolute z-20 top-0 left-0 bottom-0" />}
		</>
	)
}

export default Header
