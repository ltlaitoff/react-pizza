import React from 'react'
import Button from '../../Button'
import { ReactComponent as ShoppingCartIcon } from '../../../assets/images/favicon/shopping-cart.svg'
import PropTypes from 'prop-types'

import { useShoppingCartState } from '../../../context/shopping-cart.jsx'

import styles from './shoppingCartOpenButton.scss'

const ShoppingCartOpenButton = ({ onClick, disabled, active }) => {
	const shoppingCartState = useShoppingCartState()

	const [summaryPrice, count] = shoppingCartState.reduce(
		(prev, item) => {
			return [prev[0] + item.price * item.count, prev[1] + item.count]
		},
		[0, 0]
	)

	const shoppingPrice = `${summaryPrice} ₽`
	const divider = <div className='shopping-cart-open-button-divider'></div>

	return (
		<Button
			className='shopping-cart-open-button'
			style={styles}
			onClick={onClick}
			disabled={disabled}
			active={active}
		>
			{shoppingPrice}
			{divider}
			<div className='shopping-cart-open-button-wrapper'>
				<ShoppingCartIcon />
				{count}
			</div>
		</Button>
	)
}

ShoppingCartOpenButton.propTypes = {
	onClick: PropTypes.func,
	disabled: PropTypes.bool,
	active: PropTypes.bool
}

ShoppingCartOpenButton.defaultProps = {
	onClick: () => {},
	disabled: false,
	active: false
}

export default ShoppingCartOpenButton
