'use client'

import React from 'react'

type SliderProps = {
	activeIndex: number
	slider: IProduct[]
}

const ProductInfo = ({ activeIndex, slider }: SliderProps) => {
	return (
		<>
			{slider.map((slide, index) => (
				<div
					key={index}
					className={`section lg:w-[60%] sx:w-full lg:h-full sx:h-[50vh] ${index === activeIndex ? 'block' : 'hidden'}`}
				>
					<h1 className="text-black lg:text-3xl sx:text-2xl font-bold">{slide.title}</h1>
					<p className="text-gray-100 my-4 text-lg">{slide.description}</p>
				</div>
			))}
		</>
	)
}

export default ProductInfo
