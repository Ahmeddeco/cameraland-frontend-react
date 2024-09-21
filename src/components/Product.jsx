import React from 'react'
import { Link } from 'react-router-dom'

const Product = ({ product }) => {
	console.log(product)

	return (
		<Link to='/'>
			<div className='group'>
				{/* image */}
				<div className='w-full h-[200px] flex items-center justify-center relative'>
					<img
						src={
							process.env.REACT_APP_HOST_URL +
							product.attributes.image.data.attributes.url
						}
						alt={product.attributes.title}
						className='w-52 h-52 group-hover:scale-90 transition-all'
					/>
				</div>
			</div>
		</Link>
	)
}

export default Product
