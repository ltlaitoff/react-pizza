import React, { useEffect, useState } from 'react'

import { getPizzas } from '../../api/api.js'

const ProductsItems = ({ filter, sorting }) => {
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

	console.log(filter, sorting, products)

	return <div></div>
}

export default ProductsItems
