import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import { getPizzas } from '../../api/api.js'

import styles from './ProductItems.scss'
import ProductItem from './ProductItem.jsx'

const ProductsItems = ({ filter, sorting, sizes, doughs }) => {
	const [products, setProducts] = useState([])

	useEffect(() => {
		const sortingValue = {
			0: 'popularity',
			1: 'price',
			2: 'name'
		}

		getPizzas(
			'categories',
			filter.id,
			sortingValue[sorting.id],
			sorting.order
		).then(value => setProducts(value))
	}, [filter, sorting])

	return (
		<div className='products-items' style={styles}>
			{products.map(product => {
				return (
					<ProductItem
						key={product.id}
						product={product}
						doughs={doughs}
						sizes={sizes}
					/>
				)
			})}
		</div>
	)
}

ProductsItems.propTypes = {
	filter: PropTypes.shape({
		id: PropTypes.string,
		name: PropTypes.string
	}),

	sorting: PropTypes.shape({
		id: PropTypes.number,
		name: PropTypes.string,
		order: PropTypes.string
	}),
	sizes: PropTypes.object,
	doughs: PropTypes.object
}

export default ProductsItems
