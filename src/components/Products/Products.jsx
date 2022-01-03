import React from 'react'

import ProductItems from './ProductItems.jsx'

import styles from './Products.scss'

const Products = ({ filter, sorting }) => {
	return (
		<section className='products' style={styles}>
			<h2 className='products-title'>Все пиццы</h2>
			<ProductItems filter={filter} sorting={sorting} />
		</section>
	)
}

export default Products
