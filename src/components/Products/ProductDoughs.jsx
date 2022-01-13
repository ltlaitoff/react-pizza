import React from 'react'

import Button from '../Button/Button'

import styles from './ProductDoughs.scss'

const ProductDoughs = ({ allDoughs, productDoughs, activeDough, onChange }) => {
	const buttonSize = `${100 / Object.keys(allDoughs).length}%`

	const onClick = key => {
		return () => onChange(key)
	}

	return (
		<div className='product-doughs' style={styles}>
			{Object.entries(allDoughs).map(([key, dough]) => {
				return (
					<Button
						key={key}
						className='product-doughs-button'
						disabledClass='product-doughs-button-disabled'
						disabled={!productDoughs.includes(key)}
						active={key === activeDough}
						activeClass='product-doughs-button-active'
						style={{ width: buttonSize }}
						borderRadius='sm'
						backgroundColor='white'
						textColor='dark-gray'
						onClick={onClick(key)}
					>
						{dough}
					</Button>
				)
			})}
		</div>
	)
}

export default ProductDoughs
