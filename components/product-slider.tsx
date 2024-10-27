/* eslint-disable @next/next/no-img-element */
'use client'

import React from 'react'

type SliderProps = {
	activeIndex: number
	slider: IProduct[]
}

const ProductSlider = ({ activeIndex, slider }: SliderProps) => {
	return (
		<>
			{slider.map((slide, index) => (
				<div
					key={index}
					className={`section lg:w-[60%] sx:w-full lg:h-full sx:h-[50vh] ${index === activeIndex ? 'block' : 'hidden'}`}
				>
					<img src={slide.images.desktop} alt="" className="w-full h-full object-cover" />
				</div>
			))}
		</>
	)
}

export default ProductSlider
