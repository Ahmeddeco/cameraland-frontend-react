import React from 'react'
import ProductSlider from './ProductSlider'
import useFetch from '../hooks/useFetch'

const LatestProducts = () => {
	const { data } = useFetch('/products?populate=*&filters[isNew]=true')

	return (
		<div className='mb-16'>
			<div className='container'>
				<h2 className='h2 mb-6 text-center xl:text-left'>Latest Products</h2>
			</div>
			<ProductSlider data={data} />
		</div>
	)
}

export default LatestProducts
