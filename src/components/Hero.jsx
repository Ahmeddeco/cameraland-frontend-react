import React from 'react'
import promoImg1 from '../img/promo_img1.png'
import promoImg2 from '../img/promo_img2.png'
import promoImg3 from '../img/promo_img3.png'
import CategoryNav from './CategoryNav'
import MainSlider from './MainSlider'

const Hero = () => {
	return (
		<section className='mb-10 pt-12 lg:pt-0'>
			<div className='container'>
				<div className='flex flex-col gap-y-10 xl:flex-row xl:gap-x-10 h-full '>
					{/* slider */}
					<div className='min-h-full'>
						<CategoryNav />
					</div>
					{/* main slider */}
					<div className='w-full max-w-lg lg:max-w-[734px] mx-auto '>
						<MainSlider />
					</div>
					{/* promos  */}
					<div className='flex flex-col gap-y-10 w-full max-w-lg mx-auto h-full '>
						{/* promo 1 */}
						<div className='grad flex-1 h-full rounded-xl overflow-hidden relative p-6'>
							{/* text */}
							<div className='flex flex-col max-w-[144px] h-full justify-center'>
								<div className='text-2xl uppercase font-medium leading-tight mb-4'>
									Save 35% all dslr cameras
								</div>
								<a className='uppercase text-accent' href='/'>
									Shop now
								</a>
							</div>
							{/* img */}
							<img
								className='absolute z-20 -top-2 -right-4'
								src={promoImg1}
								alt='camera'
							/>
						</div>

						{/* promo 2 */}
						<div className='grad flex-1 h-full rounded-xl overflow-hidden relative p-6'>
							{/* text */}
							<div className='flex flex-col max-w-[144px] h-full justify-center'>
								<div className='text-2xl uppercase font-medium leading-tight mb-4'>
									Save 25% mirrorless cameras
								</div>
								<a className='uppercase text-accent' href='/'>
									Shop now
								</a>
							</div>
							{/* img */}
							<img
								className='absolute z-20 top-4 -right-4'
								src={promoImg2}
								alt='camera'
							/>
						</div>
						{/* promo 3 */}
						<div className='grad flex-1 h-full rounded-xl overflow-hidden relative p-6'>
							{/* text */}
							<div className='flex flex-col max-w-[144px] h-full justify-center'>
								<div className='text-2xl uppercase font-medium leading-tight mb-4'>
									Save 42% film cameras
								</div>
								<a className='uppercase text-accent' href='/'>
									Shop now
								</a>
							</div>
							{/* img */}
							<img
								className='absolute z-20 top-4 -right-4'
								src={promoImg3}
								alt='camera'
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Hero
