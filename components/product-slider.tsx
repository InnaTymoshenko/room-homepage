/* eslint-disable @next/next/no-img-element */
'use client'

import { SCREEN_SIZES, useScreenSize } from '@/utils/hook'
import React from 'react'

type SliderProps = {
	currentSlide: number
	products: IProduct[]
}

const ProductSlider = ({ currentSlide, products }: SliderProps) => {
	const screenSize = useScreenSize()

	return (
		<>
			{products.map((product, index) => (
				<div
					key={index}
					className={`section lg:w-[60%] sx:w-full lg:h-full sx:h-[50vh] absolute top-0 left-0  ${
						index === currentSlide ? 'animate-fade-in z-10 ' : 'animate-fade-out z-0 '
					}`}
				>
					{screenSize === SCREEN_SIZES.MOBILE && (
						<img src={product.images.mobile} alt="" className="w-full h-full object-cover object-center" />
					)}
					{screenSize === SCREEN_SIZES.TABLET && (
						<img src={product.images.mobile} alt="" className="w-full h-full object-cover object-center" />
					)}
					{screenSize === SCREEN_SIZES.PC && (
						<img src={product.images.desktop} alt="" className="w-full h-full object-cover object-center" />
					)}
				</div>
			))}
		</>
	)
}

export default ProductSlider
