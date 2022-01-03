import React, { useEffect, useState } from 'react'

import ProductDoughs from './ProductDoughs.jsx'
import ProductSizes from './ProductSizes.jsx'

import { getPizzas, getSizes, getDoughs } from '../../api/api.js'

import styles from './ProductItems.scss'

const ProductsItems = ({ filter, sorting }) => {
	const [products, setProducts] = useState([])
	const [sizes, setSizes] = useState([])
	const [doughs, setDoughs] = useState([])

	useEffect(() => {
		const sortingValue = {
			0: 'popularity',
			1: 'price',
			2: 'name'
		}

		getPizzas('categories', filter.name, sortingValue[sorting.id]).then(value =>
			setProducts(value)
		)

		getSizes().then(value => setSizes(value))

		getDoughs().then(value => setDoughs(value))
	}, [filter, sorting])

	console.log(filter, sorting, products)
	console.log(doughs)

	return (
		<div className='products-items' style={styles}>
			{products.map(product => {
				return (
					<div className='product' key={product.id}>
						<img
							src={product.imageUrl}
							alt={product.name}
							className='product-image'
						/>
						<div className='product-title'>{product.name}</div>
						<div className='product-settings-wrapper'>
							<ProductDoughs
								doughsList={doughs}
								currentDoughs={product.dough}
								// onChange={onDoughChange}
							/>
							<ProductSizes sizesList={sizes} currentSizes={product.sizes} />
						</div>
						<div className='product-bottom-wrapper'></div>
					</div>
				)
			})}
		</div>
	)
}

export default ProductsItems
