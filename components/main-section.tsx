'use client'

import React, { useCallback, useEffect, useState } from 'react'
import { AngleLeft } from './icons/angle-left'
import { AngleRight } from './icons/angle-right'
import ProductSlider from './product-slider'
import ProductInfo from './product-info'
import { Button } from './button'
import data from '@/data/data.json'

const MainSection = () => {
	const [products, setProducts] = useState<IProduct[]>()
	const [currentSlide, setCurrentSlide] = useState(0)

	useEffect(() => {
		setProducts(data as IProduct[])
	}, [])

	const nextSlide = useCallback(() => {
		if (products) {
			setCurrentSlide(prev => (prev + 1) % products.length)
		}
	}, [products])

	const prevSlide = useCallback(() => {
		if (products) {
			setCurrentSlide(prev => (prev - 1 + products.length) % products.length)
		}
	}, [products])

	const handleKeyDown = useCallback(
		(e: KeyboardEvent) => {
			if (e.key === 'ArrowRight') nextSlide()
			if (e.key === 'ArrowLeft') prevSlide()
		},
		[nextSlide, prevSlide]
	)

	const handleSwipe = useCallback(
		(e: React.TouchEvent<HTMLDivElement>) => {
			const touchStartX = e.touches[0].clientX
			e.currentTarget.addEventListener('touchmove', function handleTouchMove(ev: TouchEvent) {
				const touchEndX = ev.changedTouches[0].clientX
				if (touchEndX - touchStartX > 50) prevSlide()
				if (touchEndX - touchStartX < -50) nextSlide()
				e.currentTarget.removeEventListener('touchmove', handleTouchMove)
			})
		},
		[nextSlide, prevSlide]
	)

	useEffect(() => {
		window.addEventListener('keydown', handleKeyDown)
		return () => window.removeEventListener('keydown', handleKeyDown)
	}, [handleKeyDown])

	return (
		<section className="w-full lg:h-[60vh] sx:h-[100vh]">
			<div className="w-full h-full" onTouchStart={handleSwipe}>
				<div className="w-full h-full flex lg:flex-row sx:flex-col justify-end items-center relative">
					{products && <ProductSlider currentSlide={currentSlide} products={products} />}

					<div className="lg:w-[40%] sx:w-full lg:h-full sx:h-[50vh]  relative">
						{products && <ProductInfo currentSlide={currentSlide} products={products} />}

						<div className="lg:w-[25%] md2:w-[30%] sx:w-[40%] lg:h-[80px] sx:h-[60px] flex items-center absolute z-50 lg:bottom-0 lg:left-0 sx:right-0 lg:top-auto sx:top-[-60px]">
							<Button
								className="w-full h-full bg-black flex justify-center items-center anima hover:bg-gray-200"
								onClick={prevSlide}
							>
								<AngleLeft />
							</Button>
							<Button
								className="w-full h-full bg-black flex justify-center items-center anima hover:bg-gray-200"
								onClick={nextSlide}
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
