import React from 'react'

const AboutSection = () => {
	return (
		<section className="w-full h-[33%]">
			<div className="w-full h-full flex items-center">
				<div className="section w-[30%] h-full bg-[url('/images/image-about-dark.jpg')]"></div>
				<div className="w-[40%] h-full p-16">
					<h2 className="text-black text-xl tracking-[0.3em] uppercase">About our furniture</h2>
					<p className="text-gray-100 my-4 text-lg">
						Our multifunctional collection blends design and function to suit your individual taste. Make each room
						unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture
						pieces you need, from traditional to contemporary styles or anything in between. Product specialists are
						available to help you create your dream space.
					</p>
				</div>
				<div className="section w-[30%] h-full bg-[url('/images/image-about-light.jpg')]"></div>
			</div>
		</section>
	)
}

export default AboutSection
