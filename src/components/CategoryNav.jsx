import React from 'react'
import { Link } from 'react-router-dom'
import useFetch from '../hooks/useFetch'

const CategoryNav = () => {
	const { data } = useFetch('/categories')

	return (
		<aside className='hidden xl:flex h-full'>
			<div className='bg-primary flex flex-col w-[286px]  rounded-xl overflow-hidden'>
				<div className='bg-accent py-4 text-primary uppercase font-semibold flex items-center justify-center'>
					Browse Category
				</div>
				<div className='flex flex-col gap-6 p-6 '>
					{data?.map((category) => {
						return (
							<Link
								to={`/products/${category.id}`}
								key={category.id}
								className='cursor-pointer uppercase'
							>
								{category.attributes.title}
							</Link>
						)
					})}
				</div>
			</div>
		</aside>
	)
}

export default CategoryNav
