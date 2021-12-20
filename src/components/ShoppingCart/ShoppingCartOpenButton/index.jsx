import React from 'react'
import Button from '../../Button'
import ShoppingCartIcon from '../../../assets/images/favicon/shopping-cart.svg'

import styles from './shoppingCartOpenButton.scss';

const ShoppingCartOpenButton = ({ price, count }) => {
	const shoppingPrice = `${price} ₽`
	const divider = <div className='shopping-cart-open-button-divider'></div>

	return (
		<Button className='shopping-cart-open-button' style={styles}>
			{shoppingPrice}
			{divider}
			<div className='shopping-cart-open-button-wrapper'>
				<img src={ShoppingCartIcon} alt='ShoppingCartIcon' />
				{count}
			</div>
		</Button>
	)
}

export default ShoppingCartOpenButton
