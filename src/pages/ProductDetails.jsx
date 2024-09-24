import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import RelatedProducts from '../components/RelatedProducts'

const ProductDetails = () => {
	const { id } = useParams()
	console.log(id)

	const { data } = useFetch(`/products?populate=*&filters[id]=${id}`)

	console.log(data)

	return (
		<div className='mb-16 pt-44 lg:pt-10 xl:pt-0'>
			<div className='container '>
				{/* text */}
				<div className=''>
					<img
						src={
							process.env.REACT_APP_HOST_URL +
							data[0].attributes.image.data.attributes.url
						}
						alt='camera'
					/>
				</div>
				{/* related products */}
				<RelatedProducts />
			</div>
		</div>
	)
}

export default ProductDetails
