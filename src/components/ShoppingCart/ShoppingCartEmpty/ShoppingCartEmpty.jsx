import React from 'react'

import Button from '../../Button/Button'

import { ReactComponent as EmptyIcon } from '../../../assets/images/favicon/shopping-cart-clear-bg.svg'

import styles from './ShoppingCartEmpty.scss'

const ShoppingCartEmpty = () => {
	return (
		<div className='shopping-cart-empty' style={styles}>
			<div className='shopping-cart-empty-title'>Корзина пустая 😕</div>
			<div className='shopping-cart-empty-descr'>
				Вероятней всего, вы не заказывали ещё пиццу.
				<br />
				Для того, чтобы заказать пиццу, перейди на главную страницу.
			</div>
			<EmptyIcon className='shopping-cart-empty-icon' />
			<Button className='shopping-cart-empty-button' borderRadius='lg' href='/'>
				Вернуться назад
			</Button>
		</div>
	)
}

export default ShoppingCartEmpty
