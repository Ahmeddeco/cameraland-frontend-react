import React from 'react'
import { Link } from 'react-router-dom'

const Product = ({ product }) => {
	return (
		<Link to={`/product/${product.id}`}>
			<div className='group grad w-full rounded-xl overflow-hidden relative py-8 h-auto'>
				{/* badg */}
				{product.attributes.isNew ? (
					<div className='absolute bg-accent text-primary text-xs p-2 font-bold uppercase top-4 right-4 rounded-full z-10'>
						new
					</div>
				) : (
					''
				)}
				{/* image */}
				<div className='w-full h-[200px] flex items-center justify-center relative '>
					<img
						src={
							process.env.REACT_APP_HOST_URL +
							product.attributes.image.data.attributes.url
						}
						alt={product.attributes.title}
						className='w-52 h-52 group-hover:scale-90 transition-all '
					/>
				</div>
				{/* text */}
				<div className='px-6 pb-8 flex flex-col'>
					{/* category title*/}
					<div className='text-sm text-accent capitalize mb-2'>
						{product.attributes.categories.data[0].attributes.title}
					</div>
					{/*  title*/}
					<div className='text-xl mb-4 lg:mb-9'>
						{product.attributes.title.substring(0, 35)}...
					</div>
					{/* price*/}
					<div className='text-accent text-lg '>
						$ {product.attributes.price}
					</div>
				</div>
			</div>
		</Link>
	)
}

export default Product
