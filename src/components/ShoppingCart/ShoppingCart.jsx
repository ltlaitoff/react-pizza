import React from 'react'

import { useShoppingCartState } from '../../context/shopping-cart.jsx'
import ShoppingCartEmpty from './ShoppingCartEmpty/ShoppingCartEmpty'

import styles from './ShoppingCart.scss'

const ShoppingCart = () => {
	const shoppingCartState = useShoppingCartState()

	let inner = <></>

	if (shoppingCartState.length === 0) {
		inner = <ShoppingCartEmpty />
	}

	return (
		<div className='shopping-cart' style={styles}>
			{inner}
		</div>
	)
}

export default ShoppingCart
