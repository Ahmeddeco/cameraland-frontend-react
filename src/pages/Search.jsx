import { useLocation } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import Product from '../components/Product'
import CategoryNav from '../components/CategoryNav'
const Search = () => {
	const location = useLocation()
	const searchParams = new URLSearchParams(location.search)
	const searchTerm = searchParams.get('query')

	// get products based on search term
	const { data } = useFetch(
		`/products?populate=*&filters[title][$contains]=${searchTerm}`
	)

	return (
		<div className='mb-10 pt-40 lg:pt-4 xl:pt-0'>
			<div className='container'>
				<div className='flex gap-x-10'>
					{/* Category Nav */}
					<CategoryNav />
					<div className='py-3 text-xl uppercase text-center lg:text-left'>
						{/* title */}
						<div className=''>
							{data?.length > 0
								? `${data.length} result for ${searchTerm}`
								: `no results found for ${searchTerm}`}
						</div>
						{/* products grid */}
						<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-10'>
							{data?.map((product) => {
								return <Product product={product} key={product.id} />
							})}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Search
