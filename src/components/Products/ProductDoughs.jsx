import React from 'react'
import PropTypes from 'prop-types'

import Button from '../Button/Button'

import styles from './ProductDoughs.scss'

const ProductDoughs = ({ allDoughs, productDoughs, activeDough, onChange }) => {
	const buttonSize = `${100 / Object.keys(allDoughs).length}%`

	const onClick = key => {
		return () => onChange(key)
	}

	return (
		<div className='products-item-doughs' style={styles}>
			{Object.entries(allDoughs).map(([key, dough]) => {
				return (
					<Button
						key={key}
						className='products-item-doughs-button'
						disabledClass='products-item-doughs-button-disabled'
						disabled={!productDoughs.includes(key)}
						active={key === activeDough}
						activeClass='products-item-doughs-button-active'
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

ProductDoughs.propTypes = {
	allDoughs: PropTypes.object,
	productDoughs: PropTypes.array,
	activeDough: PropTypes.string,
	onChange: PropTypes.func
}

export default ProductDoughs
