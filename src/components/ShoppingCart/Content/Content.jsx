import React from 'react'

import { ReactComponent as BasketIcon } from '../../../assets/images/favicon/shopping-cart.svg'
import { ReactComponent as TrashIcon } from '../../../assets/images/favicon/trash.svg'
import Button from '../../Button'
import ContentItems from './ContentItems/ContentItems.jsx'

import styles from './Content.scss'

const ShoppingCartContent = () => {
	return (
		<div className='content' style={styles}>
			<div className='content-header'>
				<div className='content-title'>
					<BasketIcon className='content-title-icon' />
					<div className='content-title-text'>Корзина</div>
				</div>

				<Button className='content-clear'>
					<TrashIcon className='content-clear-icon' />
					<div className='content-clear-text'>Очистить корзину</div>
				</Button>
			</div>

			<ContentItems />
		</div>
	)
}

export default ShoppingCartContent
