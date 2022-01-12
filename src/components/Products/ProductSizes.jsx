import React from 'react'

import Button from '../Button'

import styles from './ProductSizes.scss'

const ProductSizes = ({ allSizes, productSizes, activeSize, onChange }) => {
	const buttonSize = `${100 / Object.keys(allSizes).length}%`

	const onClick = size => {
		return () => onChange(size)
	}

	return (
		<div className='product-sizes' style={styles}>
			{Object.entries(allSizes).map(([key, size]) => {
				return (
					<Button
						key={key}
						className='product-sizes-button'
						disabledClass='product-sizes-button-disabled'
						disabled={!productSizes.includes(key)}
						active={activeSize === key}
						activeClass='product-sizes-button-active'
						style={{ width: buttonSize }}
						borderRadius='sm'
						backgroundColor='white'
						textColor='dark-gray'
						onClick={onClick(key)}
					>
						{size} см.
					</Button>
				)
			})}
		</div>
	)
}

export default ProductSizes
