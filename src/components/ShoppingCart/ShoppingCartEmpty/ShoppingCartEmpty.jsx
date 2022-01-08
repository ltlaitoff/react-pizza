import React from 'react'

import Button from '../../Button'

import { ReactComponent as EmptyIcon } from '../../../assets/images/favicon/shopping-cart-clear-bg.svg'

import styles from './ShoppingCartEmpty.scss'

const ShoppingCartEmpty = () => {
	return (
		<div className='empty' style={styles}>
			<div className='empty-title'>Корзина пустая 😕</div>
			<div className='empty-descr'>
				Вероятней всего, вы не заказывали ещё пиццу.
				<br />
				Для того, чтобы заказать пиццу, перейди на главную страницу.
			</div>
			<EmptyIcon className='empty-icon' />
			<Button className='empty-button' borderRadius='lg' href='/'>
				Вернуться назад
			</Button>
		</div>
	)
}

export default ShoppingCartEmpty
