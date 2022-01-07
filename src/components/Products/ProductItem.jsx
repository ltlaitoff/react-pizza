import React, { useState } from 'react'

import ProductDoughs from './ProductDoughs.jsx'
import ProductSizes from './ProductSizes.jsx'
import Button from '../Button'

import { ReactComponent as PlusIcon } from '../../assets/images/favicon/plus.svg'

import styles from './ProductItem.scss'

const ProductItem = ({ product, doughs, sizes }) => {
	const [activeSize, setActiveSize] = useState(product.sizes[0])
	const [activeDough, setActiveDough] = useState(product.dough[0])

	const onSizeChange = newSize => setActiveSize(newSize)
	const onDoughChange = newDough => setActiveDough(newDough)

	return (
		<div className='product' key={product.id} style={styles}>
			<img
				src={product.imageUrl}
				alt={product.name}
				className='product-image'
			/>
			<div className='product-title'>{product.name}</div>
			<div className='product-settings-wrapper'>
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
			<div className='product-bottom-wrapper'>
				<div className='product-price'>от {product.price} ₽</div>
				<Button
					className='product-add'
					backgroundColor='transparent'
					borderColor='orange'
					borderWidth='1'
				>
					<PlusIcon className='product-add-icon' />
					Добавить
				</Button>
			</div>
		</div>
	)
}

export default ProductItem
