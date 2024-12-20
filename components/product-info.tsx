'use client'

import React from 'react'
import { Arrow } from './icons/Arrow'

type SliderProps = {
	currentSlide: number
	products: IProduct[]
}

const ProductInfo = ({ currentSlide, products }: SliderProps) => {
	return (
		<>
			{products.map((product, index) => (
				<div
					key={index}
					className={`h-full absolute top-0  right-0 3xl:px-40 xl:p-24 sx:py-8 sx:px-4 flex flex-col justify-center lg:gap-0 sx:gap-1 bg-white ${
						index === currentSlide ? 'animate-fade-in z-10 ' : 'animate-fade-out z-0 '
					} `}
				>
					<h1 className="text-black tracking-tight lg:text-3xl sx:text-2xl font-semibold">{product.title}</h1>
					<p className="text-gray-100 mt-4 mb-6 text-lg">{product.description}</p>
					<div className="w-full uppercase tracking-[0.8em] flex items-center justify-start gap-4 cursor-pointer anima hover:text-gray-100">
						Shop now
						<Arrow />
					</div>
				</div>
			))}
		</>
	)
}

export default ProductInfo
