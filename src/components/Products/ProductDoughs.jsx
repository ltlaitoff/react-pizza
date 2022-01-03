import React, { useState } from 'react'

import Button from '../Button'

import styles from './ProductDoughs.scss'

const ProductDoughs = ({ doughsList, currentDoughs, onChange }) => {
	const [activeDough, setActiveDough] = useState(currentDoughs[0])

	const buttonSize = `${100 / doughsList.length}%`

	const onClick = (e, dough) => {
		setActiveDough(dough)
		onChange(currentDoughs.indexOf(dough))
	}

	return (
		<div className='product-doughs' style={styles}>
			{doughsList.map(dough => {
				return (
					<Button
						className='product-doughs-button'
						disabledClass='product-doughs-button-disabled'
						disabled={!currentDoughs.includes(dough)}
						active={dough === activeDough}
						activeClass='product-doughs-button-active'
						style={{ width: buttonSize }}
						borderRadius='sm'
						backgroundColor='white'
						textColor='dark-gray'
						onClick={e => onClick(e, dough)}
					>
						{dough}
					</Button>
				)
			})}
		</div>
	)
}

export default ProductDoughs
