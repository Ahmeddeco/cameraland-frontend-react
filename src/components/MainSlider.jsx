import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Pagination } from 'swiper'
import Product from './Product'
import '../slider.css'
import CameraImg from '../img/camera.png'

// data

const sliderData = [
	{
		img: CameraImg,
		pretitle: 'Special offer',
		titlePart1: 'Save 20%',
		titlePart2: 'on your',
		titlePart3: 'first order',
		btnText: 'shop now',
	},
	{
		img: CameraImg,
		pretitle: 'Special offer',
		titlePart1: 'Save 42%',
		titlePart2: 'on your',
		titlePart3: 'first order',
		btnText: 'shop now',
	},
	{
		img: CameraImg,
		pretitle: 'Special offer',
		titlePart1: 'Save 23%',
		titlePart2: 'on your',
		titlePart3: 'first order',
		btnText: 'shop now',
	},
	{
		img: CameraImg,
		pretitle: 'Special offer',
		titlePart1: 'Save 34%',
		titlePart2: 'on your',
		titlePart3: 'first order',
		btnText: 'shop now',
	},
]
const MainSlider = ({ data }) => {
	return (
		<Swiper
			modules={[Pagination]}
			loop={true}
			pagination={{ clickable: true }}
			className='mainSlider h-full bg-primary xl:bg-mainSlider xl:bg-no-repeat max-w-lg lg:max-w-none rounded-xl overflow-hidden drop-shadow-2xl'
		>
			<>
				{sliderData.map((slid, i) => {
					return (
						<SwiperSlide key={i}>
							<div className='flex flex-col lg:flex-row h-full p-7 md:p-20'>
								{/* text */}
								<div className='w-full lg:flex-1 '>
									<div className='uppercase mb-1 text-center lg:text-left'>
										{slid.pretitle}
									</div>
									<div className='text-3xl md:text-6xl font-semibold uppercase leading-none text-center lg:text-left mb-8 xl:mb-20'>
										{slid.titlePart1}
										<br />
										{slid.titlePart2}
										<br />
										{slid.titlePart3}
									</div>
									<button className='btn btn-accent mx-auto lg:mx-0'>
										{slid.btnText}
									</button>
								</div>
								{/* img */}
								<div className='flex-1'>
									<img
										src={slid.img}
										alt='camera'
										className='xl:absolute xl:-right-16 xl:-bottom-12'
									/>
								</div>
							</div>
						</SwiperSlide>
					)
				})}
			</>
		</Swiper>
	)
}

export default MainSlider
