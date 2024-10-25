import React from 'react'
import { Arrow } from './icons/Arrow'
import { AngleLeft } from './icons/angle-left'
import { AngleRight } from './icons/angle-right'

type Props = {}

const MainSection = (props: Props) => {
	return (
		<section className="w-full h-[67%]">
			<div className="w-full h-full">
				<div className="w-full h-full flex items-center">
					<div className='section w-[60%] h-full bg-[url("/images/desktop-image-hero-1.jpg")]'></div>
					<div className="w-[40%] h-full p-24 flex flex-col justify-center gap-4 relative">
						<h1 className="text-black text-3xl font-bold">Discover innovative ways to decorate</h1>
						<p className="text-gray-100 my-4 text-lg">
							We provide unmatched quality, comfort, and style for property owners across the country. Our experts
							combine form and function in bringing your vision to life. Create a room in your own style with our
							collection and make your property a reflection of you and what you love.
						</p>
						<div className="w-full uppercase tracking-[0.8em] flex items-center justify-start gap-4 cursor-pointer anima hover:text-gray-100">
							Shop now
							<Arrow />
						</div>
						<div className="w-[25%] h-[80px] flex items-center absolute bottom-0 left-0">
							<button className="w-full h-full bg-black flex justify-center items-center anima hover:bg-gray-200">
								<AngleLeft />
							</button>
							<button className="w-full h-full bg-black flex justify-center items-center anima hover:bg-gray-200">
								<AngleRight />
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default MainSection
