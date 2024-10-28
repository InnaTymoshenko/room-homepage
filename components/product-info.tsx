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
				<div key={index} className={`w-full  ${index === currentSlide ? 'block ' : 'hidden'}`}>
					<h1 className="text-black lg:text-3xl sx:text-2xl font-bold">{product.title}</h1>
					<p className="text-gray-100 mt-6 mb-12 text-lg">{product.description}</p>
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
