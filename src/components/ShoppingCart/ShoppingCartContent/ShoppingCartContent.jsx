import React from 'react'

import { ReactComponent as BasketIcon } from '../../../assets/images/favicon/shopping-cart.svg'
import { ReactComponent as TrashIcon } from '../../../assets/images/favicon/trash.svg'
import { ReactComponent as ArrowLeft } from '../../../assets/images/favicon/arrow_left.svg'
import { useShoppingCartDispatch } from '../../../context/shopping-cart.jsx'

import Button from '../../Button/Button'
import ShoppingCartContentItems from './ShoppingCartContentItems.jsx'

import styles from './ShoppingCartContent.scss'

const ShoppingCartContent = () => {
	const shoppingCartDispatch = useShoppingCartDispatch()

	return (
		<div className='shopping-cart-content' style={styles}>
			<div className='shopping-cart-content-header'>
				<div className='shopping-cart-content-title'>
					<BasketIcon className='shopping-cart-content-title-icon' />
					<div className='shopping-cart-content-title-text'>Корзина</div>
				</div>

				<Button
					className='shopping-cart-content-clear'
					onClick={() => shoppingCartDispatch({ type: 'remove-all' })}
				>
					<TrashIcon className='shopping-cart-content-clear-icon' />
					<div className='shopping-cart-content-clear-text'>
						Очистить корзину
					</div>
				</Button>
			</div>

			<ShoppingCartContentItems />
			<div className='shopping-cart-content-footer'>
				<Button className='shopping-cart-content-return-back' href='/'>
					<ArrowLeft className='shopping-cart-content-return-back-icon' />
					Вернуться назад
				</Button>
				<Button className='shopping-cart-content-pay'>Оплатить сейчас</Button>
			</div>
		</div>
	)
}

export default ShoppingCartContent
