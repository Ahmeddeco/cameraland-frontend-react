import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CategoryNav from '../components/CategoryNav'
import useFetch from '../hooks/useFetch'
import Product from '../components/Product'

const Products = () => {
	const { id } = useParams()
	const { data } = useFetch(
		`/products?populate=*&filters[categories][id][$eq]=${id}`
	)
	const [title, setTitle] = useState(null)

	useEffect(() => {
		if (data) {
			setTitle(data[0].attributes.categories.data[0].attributes.title)
		}
	}, [data, id])

	return (
		<div className='mb-16 pt-40 lg:pt-0'>
			<div className='container'>
				<div className='flex gap-x-10'>
					<CategoryNav />
					<main>
						{/* title */}
						<div className='py-3 text-xl uppercase text-center lg:text-left '>
							{title} Cameras
						</div>
						{/* product grid */}
						<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-10'>
							{data?.map((product) => {
								return <Product product={product} key={product.id} />
							})}
						</div>
					</main>
				</div>
			</div>
		</div>
	)
}

export default Products
