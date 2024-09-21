import React from 'react'
import { Link } from 'react-router-dom'

const Product = ({ product }) => {
	console.log(product)

	return (
		<Link>
			<div className='group'>
				{/* image */}
				<div className='w-full items-center flex h-[200px] justify-center relative'>
					<img
						src={
							process.env.REACT_APP_HOST_URL +
							product.attributes.image.data.attributes.url
						}
						alt='camera'
						className='w-[160px] h-[160px] group-hover:scale-90 transition-all'
					/>
				</div>
			</div>
		</Link>
	)
}

export default Product
