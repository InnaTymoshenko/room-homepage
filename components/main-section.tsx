'use client'

import React, { useEffect, useState } from 'react'
import { AngleLeft } from './icons/angle-left'
import { AngleRight } from './icons/angle-right'
import ProductSlider from './product-slider'
import ProductInfo from './product-info'
import { Button } from './button'
import data from '@/data/data.json'

const len = data.length - 1

const MainSection = () => {
	const [products, setProducts] = useState<IProduct[]>()
	const [activeIndex, setActiveIndex] = useState(0)

	useEffect(() => {
		setProducts(data as IProduct[])
	}, [])

	return (
		<section className="w-full lg:h-[67vh] sx:min-h-[67vh]">
			<div className="w-full h-full">
				<div className="w-full h-full flex lg:flex-row sx:flex-col items-center">
					{products && <ProductSlider activeIndex={activeIndex} products={products} />}

					<div className="lg:w-[40%] sx:w-full lg:h-full sx:h-[50vh] 2xl:p-24 sx:py-8 sx:px-4 flex flex-col justify-center lg:gap-4 sx:gap-1 relative">
						{products && <ProductInfo activeIndex={activeIndex} products={products} />}

						<div className="lg:w-[25%] md2:w-[30%] sx:w-[40%] lg:h-[80px] sx:h-[60px] flex items-center absolute lg:bottom-0 lg:left-0 sx:right-0 lg:top-auto sx:top-[-60px]">
							<Button
								className="w-full h-full bg-black flex justify-center items-center anima hover:bg-gray-200"
								onClick={() => setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)}
							>
								<AngleLeft />
							</Button>
							<Button
								className="w-full h-full bg-black flex justify-center items-center anima hover:bg-gray-200"
								onClick={() => setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)}
							>
								<AngleRight />
							</Button>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default MainSection
