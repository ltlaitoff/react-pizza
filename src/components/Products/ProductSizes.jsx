import React, { useState } from 'react'

import Button from '../Button'

import styles from './ProductSizes.scss'

const ProductSizes = ({ sizesList, currentSizes, onChange }) => {
	const [activeSize, setActiveSize] = useState(currentSizes[0])

	const entries = Object.entries(sizesList)
	const buttonSize = `${100 / entries.length}%`

	console.log(entries)

	const onClick = (e, size) => {
		setActiveSize(size)
		onChange(currentSizes.indexOf(size))
	}

	return (
		<div className='product-sizes' style={styles}>
			{entries.map(size => {
				return (
					<Button
						className='product-sizes-button'
						disabledClass='product-sizes-button-disabled'
						disabled={!currentSizes.includes(size[0])}
						active={size[0] === activeSize}
						activeClass='product-sizes-button-active'
						style={{ width: buttonSize }}
						borderRadius='sm'
						backgroundColor='white'
						textColor='dark-gray'
						onClick={e => onClick(e, size[0])}
					>
						{size[1]}
					</Button>
				)
			})}
		</div>
	)
}

export default ProductSizes
