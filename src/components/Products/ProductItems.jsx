import React, { useEffect, useState } from 'react'

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

		getPizzas('categories', filter.name, sortingValue[sorting.id]).then(value =>
			setProducts(value)
		)
	}, [filter, sorting])

	return (
		<div className='products-items' style={styles}>
			{products.map(product => {
				return <ProductItem product={product} doughs={doughs} sizes={sizes} />
			})}
		</div>
	)
}

export default ProductsItems
