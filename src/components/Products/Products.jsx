import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import ProductItems from './ProductItems.jsx'

import styles from './Products.scss'

import { getSizes, getDoughs } from '../../api/api.js'

const Products = ({ filter, sorting }) => {
	const [sizes, setSizes] = useState({})
	const [doughs, setDoughs] = useState({})

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

Products.propTypes = {
	filter: PropTypes.shape({
		id: PropTypes.string,
		name: PropTypes.string
	}),

	sorting: PropTypes.shape({
		id: PropTypes.number,
		name: PropTypes.string,
		order: PropTypes.string
	})
}

export default Products
