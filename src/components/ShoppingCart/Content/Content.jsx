import React from 'react'

import { ReactComponent as BasketIcon } from '../../../assets/images/favicon/shopping-cart.svg'
import { ReactComponent as TrashIcon } from '../../../assets/images/favicon/trash.svg'
import { ReactComponent as ArrowLeft } from '../../../assets/images/favicon/arrow_left.svg'
import { useShoppingCartDispatch } from '../../../context/shopping-cart.jsx'

import Button from '../../Button'
import ContentItems from './ContentItems.jsx'

import styles from './Content.scss'

const ShoppingCartContent = () => {
	const shoppingCartDispatch = useShoppingCartDispatch()

	return (
		<div className='content' style={styles}>
			<div className='content-header'>
				<div className='content-title'>
					<BasketIcon className='content-title-icon' />
					<div className='content-title-text'>Корзина</div>
				</div>

				<Button
					className='content-clear'
					onClick={() => shoppingCartDispatch({ type: 'remove-all' })}
				>
					<TrashIcon className='content-clear-icon' />
					<div className='content-clear-text'>Очистить корзину</div>
				</Button>
			</div>

			<ContentItems />
			<div className='content-footer'>
				<Button className='content-return-back' href='/'>
					<ArrowLeft className='content-return-back-icon' />
					Вернуться назад
				</Button>
				<Button className='content-pay'>Оплатить сейчас</Button>
			</div>
		</div>
	)
}

export default ShoppingCartContent
