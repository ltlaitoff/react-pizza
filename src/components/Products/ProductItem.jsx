import React, { useState } from 'react'
import PropTypes from 'prop-types'

import ProductDoughs from './ProductDoughs.jsx'
import ProductSizes from './ProductSizes.jsx'
import Button from '../Button/Button'

import { useShoppingCartDispatch } from '../../context/shopping-cart.jsx'

import { ReactComponent as PlusIcon } from '../../assets/images/favicon/plus.svg'
import { ReactComponent as CheckmarkIcon } from '../../assets/images/favicon/checkmark.svg'

import styles from './ProductItem.scss'

const inscriptionAddedVisibleTime = 1000

const ProductItem = ({ product, doughs, sizes }) => {
	const [activeSize, setActiveSize] = useState(product.sizes[0])
	const [activeDough, setActiveDough] = useState(product.dough[0])
	const [inscriptionAddedVisible, setInscriptionAddedVisible] = useState(false)

	const shoppingCartDispatch = useShoppingCartDispatch()

	const onSizeChange = newSize => setActiveSize(newSize)
	const onDoughChange = newDough => setActiveDough(newDough)

	const addNewProduct = (id, dough, size, price) => {
		setInscriptionAddedVisible(true)

		setTimeout(() => {
			setInscriptionAddedVisible(false)
		}, inscriptionAddedVisibleTime)

		shoppingCartDispatch({
			type: 'add',
			id,
			dough,
			size,
			price,
			count: 1
		})
	}

	return (
		<div className='products-item' key={product.id} style={styles}>
			<img
				src={product.imageUrl}
				alt={product.name}
				className='products-item-image'
			/>
			<div className='products-item-title'>{product.name}</div>
			<div className='products-item-settings-wrapper'>
				<ProductDoughs
					allDoughs={doughs}
					productDoughs={product.dough}
					activeDough={activeDough}
					onChange={onDoughChange}
				/>
				<ProductSizes
					allSizes={sizes}
					productSizes={product.sizes}
					activeSize={activeSize}
					onChange={onSizeChange}
				/>
			</div>
			<div className='products-item-bottom-wrapper'>
				<div className='products-item-price'>от {product.price} ₽</div>
				<Button
					className={`products-item-add ${
						inscriptionAddedVisible ? 'products-item-add-added' : ''
					}`}
					backgroundColor='transparent'
					borderColor='orange'
					borderWidth={1}
					onClick={() =>
						addNewProduct(product.id, activeDough, activeSize, product.price)
					}
				>
					{inscriptionAddedVisible ? (
						<>
							<CheckmarkIcon className='products-item-add-icon' />
							Добавлено
						</>
					) : (
						<>
							<PlusIcon className='products-item-add-icon' />
							Добавить
						</>
					)}
				</Button>
			</div>
		</div>
	)
}

ProductItem.propTypes = {
	product: PropTypes.shape({
		id: PropTypes.number,
		name: PropTypes.string,
		imageUrl: PropTypes.string,
		dough: PropTypes.arrayOf(PropTypes.string),
		sizes: PropTypes.arrayOf(PropTypes.string),
		price: PropTypes.number,
		categories: PropTypes.arrayOf(PropTypes.string),
		popularity: PropTypes.number
	}),

	sizes: PropTypes.object,
	doughs: PropTypes.object
}

export default ProductItem
