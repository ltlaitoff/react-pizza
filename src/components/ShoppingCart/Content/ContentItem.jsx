import React from 'react'

import Button from '../../Button'

import { useShoppingCartDispatch } from '../../../context/shopping-cart.jsx'

import { ReactComponent as Minus } from '../../../assets/images/favicon/minus.svg'
import { ReactComponent as Plus } from '../../../assets/images/favicon/plus.svg'
import { ReactComponent as Cross } from '../../../assets/images/favicon/cross.svg'

import styles from './ContentItem.scss'

const ContentItem = ({ apiItemData, itemData, doughs, sizes }) => {
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
		<>
			<div className='content-item' style={styles}>
				<div className='content-item-wrapper-first'>
					<img src={apiItemData.imageUrl} alt='pizza' className='content-img' />
					<div className='content-block-info'>
						<div className='content-item-title'>{apiItemData.name}</div>
						<div className='content-item-descr'>{descr}</div>
					</div>
				</div>

				<div className='content-item-wrapper-two'>
					<div className='content-block-count'>
						<Button
							className='content-minus'
							onClick={onRemoveClick(
								itemData.id,
								itemData.dough,
								itemData.size,
								1
							)}
						>
							<Minus className='content-minus-icon' />
						</Button>
						<div className='content-count'>{itemData.count}</div>
						<Button
							className='content-plus'
							onClick={onAddClick(
								itemData.id,
								itemData.dough,
								itemData.size,
								1
							)}
						>
							<Plus className='content-plus-icon' />
						</Button>
					</div>

					<div className='content-price'>{apiItemData.price} ₽</div>
					<Button
						className='content-delete'
						onClick={onRemoveClick(itemData.id, itemData.dough, itemData.size)}
					>
						<Cross className='content-delete-icon' />
					</Button>
				</div>
			</div>
		</>
	)
}

export default ContentItem
