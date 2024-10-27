'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Logo } from './icons/logo'
import { Hamburger } from './icons/hamburger'
import { Close } from './icons/close'

type Props = {}

const Header = (props: Props) => {
	const pathname = usePathname()
	const [isMobile, setIsMobile] = useState(false)

	return (
		<header
			className={`w-full  lg:px-20 sx:px-8 py-8 fixed lg:top-10 sx:top-0 left-0  ${
				isMobile ? 'bg-white' : 'bg-transparent'
			}`}
		>
			{/* <div className="w-full lg:hidden sx:flex justify-center relative"></div> */}
			{isMobile ? (
				<div className="w-full  relative sx:flex lg:hidden justify-center gap-8">
					<Close className="absolute left-0 cursor-pointer" onClick={() => setIsMobile(!isMobile)} />
					<nav className="sx:flex lg:hidden items-center gap-8">
						<Link
							className={`lowercase text-lg border-b-2 border-b-transparent anima hover:border-b-white  ${
								pathname === '/' ? 'text-black/80' : 'text-black'
							}`}
							href={'/'}
						>
							Home
						</Link>
						<Link
							className={`lowercase text-lg border-b-2 border-b-transparent anima hover:border-b-white  ${
								pathname === '/shop' ? 'text-black/80' : 'text-black'
							}`}
							href={'/shop'}
						>
							Shop
						</Link>
						<Link
							className={`lowercase text-lg border-b-2 border-b-transparent anima hover:border-b-white  ${
								pathname === '/about' ? 'text-black/80' : 'text-black'
							}`}
							href={'/about'}
						>
							About
						</Link>
						<Link
							className={`lowercase text-lg border-b-2 border-b-transparent anima hover:border-b-white  ${
								pathname === '/contact' ? 'text-black/80' : 'text-black'
							}`}
							href={'/contact'}
						>
							Contact
						</Link>
					</nav>
				</div>
			) : (
				<div className="w-full lg:hidden sx:flex justify-center relative">
					<Hamburger
						className="absolute left-0 lg:hidden sx:block cursor-pointer"
						onClick={() => {
							console.log('+')
							setIsMobile(!isMobile)
						}}
					/>
					<Logo className="lg:hidden sx:block" />
				</div>
			)}

			<div className="w-full sx:hidden lg:flex items-center justify-start  gap-12">
				<Logo className="lg:block sx:hidden" />
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
