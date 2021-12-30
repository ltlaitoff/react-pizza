import React from 'react'

import ProductsItems from './ProductsItems.jsx'

import styles from './Products.scss'

const Products = ({ filter, sorting }) => {
	return (
		<section className='products' style={styles}>
			<h2 className='products-title'>Все пиццы</h2>
			<ProductsItems filter={filter} sorting={sorting} />
		</section>
	)
}

export default Products
