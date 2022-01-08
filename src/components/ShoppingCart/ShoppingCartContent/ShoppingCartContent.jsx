import React from 'react'

import { ReactComponent as BasketIcon } from '../../../assets/images/favicon/shopping-cart.svg'
import { ReactComponent as TrashIcon } from '../../../assets/images/favicon/trash.svg'
import Button from '../../Button'

import styles from './ShoppingCartContent.scss'

const ShoppingCartContent = () => {
	return (
		<div className='basket' style={styles}>
			<div className='basket-header'>
				<div className='basket-title'>
					<BasketIcon className='basket-title-icon' />
					<div className='basket-title-text'>Корзина</div>
				</div>

				<Button className='basket-clear'>
					<TrashIcon className='basket-clear-icon' />
					<div className='basket-clear-text'>Очистить корзину</div>
				</Button>
			</div>
			<div className='basket-items'></div>
		</div>
	)
}

export default ShoppingCartContent
