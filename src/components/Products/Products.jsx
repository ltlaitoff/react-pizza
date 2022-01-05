import React, { useEffect, useState } from 'react'

import ProductItems from './ProductItems.jsx'

import styles from './Products.scss'

import { getSizes, getDoughs } from '../../api/api.js'

const Products = ({ filter, sorting }) => {
	const [sizes, setSizes] = useState([])
	const [doughs, setDoughs] = useState([])

	useEffect(() => {
		getSizes().then(value => setSizes(value))

		getDoughs().then(value => setDoughs(value))
	}, [])

	return (
		<section className='products' style={styles}>
			<h2 className='products-title'>Все пиццы</h2>
			<ProductItems
				filter={filter}
				sorting={sorting}
				sizes={sizes}
				doughs={doughs}
			/>
		</section>
	)
}

export default Products
