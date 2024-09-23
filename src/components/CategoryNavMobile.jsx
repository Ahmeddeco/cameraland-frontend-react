import React from 'react'
import { FiX } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import useFetch from '../hooks/useFetch'

const CategoryNavMobile = ({ setCatNavMobile }) => {
	const { data } = useFetch(`/categories`)
	console.log(data)

	return (
		<aside className='w-full h-full bg-primary p-8'>
			{/* close icon */}
			<div
				onClick={() => setCatNavMobile(false)}
				className='flex justify-end mb-8 cursor-pointer'
			>
				<FiX className='text-3xl' />
			</div>
			<div className='flex flex-col gap-y-8 '>
				{data?.map((category) => {
					return (
						<Link
							onClick={() => setCatNavMobile(false)}
							to={`products/${category.id}`}
							className='uppercase font-medium'
							key={category.id}
						>
							{category.attributes.title} Cameras
						</Link>
					)
				})}
			</div>
		</aside>
	)
}

export default CategoryNavMobile
