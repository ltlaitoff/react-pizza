import React from 'react'

import Button from '../../Button/Button'

import { useShoppingCartDispatch } from '../../../context/shopping-cart.jsx'

import { ReactComponent as Minus } from '../../../assets/images/favicon/minus.svg'
import { ReactComponent as Plus } from '../../../assets/images/favicon/plus.svg'
import { ReactComponent as Cross } from '../../../assets/images/favicon/cross.svg'

import styles from './ShoppingCartContentItem.scss'

const ShoppingCartContentItem = ({ apiItemData, itemData, doughs, sizes }) => {
	const dispatch = useShoppingCartDispatch()

	const onRemoveClick = (id, dough, size, count) => {
		return () =>
			dispatch({
				type: 'remove',
				id,
				dough,
				size,
				count: count
			})
	}

	const onAddClick = (id, dough, size, count) => {
		return () =>
			dispatch({
				type: 'add',
				id,
				dough,
				size,
				count
			})
	}

	const descr = `${doughs[itemData.dough]} тесто, ${sizes[itemData.size]} см.`

	return (
		<div className='shopping-cart-content-item' style={styles}>
			<div className='shopping-cart-content-item-wrapper-first'>
				<img
					src={apiItemData.imageUrl}
					alt='pizza'
					className='shopping-cart-content-item-img'
				/>
				<div className='shopping-cart-content-item-block-info'>
					<div className='shopping-cart-content-item-title'>
						{apiItemData.name}
					</div>
					<div className='shopping-cart-content-item-descr'>{descr}</div>
				</div>
			</div>

			<div className='shopping-cart-content-item-wrapper-two'>
				<div className='shopping-cart-content-item-block-count'>
					<Button
						className='shopping-cart-content-item-minus'
						onClick={onRemoveClick(
							itemData.id,
							itemData.dough,
							itemData.size,
							1
						)}
					>
						<Minus className='shopping-cart-content-item-minus-icon' />
					</Button>
					<div className='shopping-cart-content-item-count'>
						{itemData.count}
					</div>
					<Button
						className='shopping-cart-content-item-plus'
						onClick={onAddClick(itemData.id, itemData.dough, itemData.size, 1)}
					>
						<Plus className='shopping-cart-content-item-plus-icon' />
					</Button>
				</div>

				<div className='shopping-cart-content-item-price'>
					{apiItemData.price} ₽
				</div>
				<Button
					className='shopping-cart-content-item-delete'
					onClick={onRemoveClick(itemData.id, itemData.dough, itemData.size)}
				>
					<Cross className='shopping-cart-content-item-delete-icon' />
				</Button>
			</div>
		</div>
	)
}

export default ShoppingCartContentItem
