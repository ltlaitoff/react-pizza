import React from 'react'

import { useShoppingCartState } from '../../context/shopping-cart.jsx'
import ShoppingCartEmpty from './ShoppingCartEmpty/ShoppingCartEmpty'
import ShoppingCartContent from './ShoppingCartContent/ShoppingCartContent.jsx'

import styles from './ShoppingCart.scss'

const ShoppingCart = () => {
	const shoppingCartState = useShoppingCartState()

	return (
		<div className='shopping-cart' style={styles}>
			{shoppingCartState.length === 0 ? (
				<ShoppingCartEmpty />
			) : (
				<ShoppingCartContent />
			)}
		</div>
	)
}

export default ShoppingCart
