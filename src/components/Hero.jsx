import React from 'react'
import promoImg1 from '../img/promo_img1.png'
import promoImg2 from '../img/promo_img2.png'
import CategoryNav from './CategoryNav'
import MainSlider from './MainSlider'

const Hero = () => {
	return (
		<section className='mb-10 pt-12 lg:pt-0'>
			<div className='container'>
				<div className='flex flex-col gap-y-10 xl:flex-row xl:gap-x-10'>
					{/* slider */}
					<div className=''>
						<CategoryNav />
					</div>
					{/* main slider */}
					<div className='w-full max-w-lg lg:max-w-[734px] mx-auto'>
						<MainSlider />
					</div>
					{/* promos  */}
					<div className='flex flex-col gap-y-10 w-full max-w-lg mx-auto h-[500px] '>
						{/* promo */}
						<div className='grad flex-1 h-[250px] rounded-xl overflow-hidden relative p-6'>
							promo1
						</div>
						{/* promo */}
						<div className='grad flex-1 h-[250px] rounded-xl overflow-hidden relative p-6'>
							promo2
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Hero
