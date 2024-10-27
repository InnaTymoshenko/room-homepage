import React from 'react'
import { Arrow } from './icons/Arrow'
import { AngleLeft } from './icons/angle-left'
import { AngleRight } from './icons/angle-right'

type Props = {}

const MainSection = (props: Props) => {
	return (
		<section className="w-full lg:h-[67vh] sx:min-h-[67vh]">
			<div className="w-full h-full">
				<div className="w-full h-full flex lg:flex-row sx:flex-col items-center">
					<div className='section lg:w-[60%] sx:w-full lg:h-full sx:h-[50vh] bg-[url("/images/desktop-image-hero-1.jpg")]'></div>
					<div className="lg:w-[40%] sx:w-full lg:h-full sx:h-[50vh] 2xl:p-24 sx:p-8 flex flex-col justify-center lg:gap-4 sx:gap-1 relative">
						<h1 className="text-black lg:text-3xl sx:text-2xl font-bold">Discover innovative ways to decorate</h1>
						<p className="text-gray-100 my-4 text-lg">
							We provide unmatched quality, comfort, and style for property owners across the country. Our experts
							combine form and function in bringing your vision to life. Create a room in your own style with our
							collection and make your property a reflection of you and what you love.
						</p>
						<div className="w-full uppercase tracking-[0.8em] flex items-center justify-start gap-4 cursor-pointer anima hover:text-gray-100">
							Shop now
							<Arrow />
						</div>
						<div className="lg:w-[25%] sx:w-[40%] lg:h-[80px] sx:h-[60px] flex items-center absolute lg:bottom-0 lg:left-0 sx:right-0 lg:top-auto sx:top-[-60px]">
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
