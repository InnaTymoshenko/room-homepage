import React from 'react'

const AboutSection = () => {
	return (
		<section className="w-full lg:h-[33vh] sx:min-h-[33vh]">
			<div className="w-full h-full flex lg:flex-row sx:flex-col items-center">
				<div className="section lg:w-[30%] sx:w-full h-[33vh] bg-[url('/images/image-about-dark.jpg')]" />
				<div className="lg:w-[40%] sx:w-full lg:h-full sx:h-[50vh] flex flex-col justify-center lg:p-16 sx:p-8">
					<h2 className="text-black text-xl lg:tracking-[0.3em] sx:tracking-widest uppercase">About our furniture</h2>
					<p className="text-gray-100 my-4 text-lg">
						Our multifunctional collection blends design and function to suit your individual taste. Make each room
						unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture
						pieces you need, from traditional to contemporary styles or anything in between. Product specialists are
						available to help you create your dream space.
					</p>
				</div>
				<div className="section lg:w-[30%] sx:w-full h-[33vh] bg-[url('/images/image-about-light.jpg')]" />
			</div>
		</section>
	)
}

export default AboutSection
