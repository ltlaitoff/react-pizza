import React from 'react'
import Button from '../../Button/Button'
import { ReactComponent as ShoppingCartIcon } from '../../../assets/images/favicon/shopping-cart.svg'

import { useShoppingCartState } from '../../../context/shopping-cart.jsx'

import styles from './shoppingCartOpenButton.scss'

const ShoppingCartOpenButton = () => {
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
			href='/shopping-cart'
		>
			{shoppingPrice}
			{divider}
			<div className='shopping-cart-open-button-wrapper'>
				<ShoppingCartIcon className='shopping-cart-open-button-icon' />
				{count}
			</div>
		</Button>
	)
}

export default ShoppingCartOpenButton
