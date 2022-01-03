import React from 'react'

import Button from '../Button'

import styles from './ProductSizes.scss'

const ProductSizes = ({ allSizes, productSizes, activeSize, onChange }) => {
	const buttonSize = `${100 / allSizes.length}%`

	const onClick = size => {
		return () => onChange(size)
	}

	return (
		<div className='product-sizes' style={styles}>
			{allSizes.map(([size, sizeNumber]) => {
				return (
					<Button
						className='product-sizes-button'
						disabledClass='product-sizes-button-disabled'
						disabled={!productSizes.includes(size)}
						active={
							size !== undefined &&
							activeSize !== undefined &&
							activeSize.includes(size)
						}
						activeClass='product-sizes-button-active'
						style={{ width: buttonSize }}
						borderRadius='sm'
						backgroundColor='white'
						textColor='dark-gray'
						onClick={onClick(size)}
					>
						{sizeNumber}
					</Button>
				)
			})}
		</div>
	)
}

export default ProductSizes
