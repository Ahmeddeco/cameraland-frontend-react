import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination'
// import { Pagination, Navigation } from 'swiper/'
import Product from './Product'
import  { Navigation, Pagination } from 'swiper/react'

const ProductSlider = ({ data }) => {
	return (
		<Swiper
			modules={[Pagination, Navigation]}
			loop={false}
			navigation={true}
			breakpoints={{
				320: {
					slidesPerView: 1,
					spaceBetween: 30,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 30,
				},
				1024: {
					slidesPerView: 3,
					spaceBetween: 30,
				},
				1440: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			}}
			Pagination={{
				clickable: true,
			}}>
			<>
				{data?.map((product) => {
					return (
						<SwiperSlide key={product.id}>
							<Product product={product} />
						</SwiperSlide>
					)
				})}
			</>
		</Swiper>
	)
}

export default ProductSlider
