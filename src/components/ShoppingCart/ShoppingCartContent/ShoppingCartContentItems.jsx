import React, { useEffect, useState } from 'react'

import ShoppingCartContentItem from './ShoppingCartContentItem'

import { useShoppingCartState } from '../../../context/shopping-cart.jsx'
import { getSizes, getDoughs, getPizzasByIds } from '../../../api/api.js'

import styles from './ShoppingCartContentItems.scss'

const ShoppingCartContentItems = () => {
	const state = useShoppingCartState()
	const [sizes, setSizes] = useState({})
	const [doughs, setDoughs] = useState({})
	const [pizzas, setPizzas] = useState({})

	useEffect(() => {
		getDoughs().then(value => setDoughs(value))
		getSizes().then(value => setSizes(value))
	}, [])

	const transformPizzasInDict = pizzas => {
		const obj = {}
		for (const item of pizzas) {
			obj[item.id] = item
		}

		return obj
	}

	useEffect(() => {
		const ids = state.reduce((prev, current) => [...prev, current.id], [])
		getPizzasByIds(ids).then(value => setPizzas(transformPizzasInDict(value)))
	}, [state])

	return (
		<div className='content-items' style={styles}>
			{state.map(item => {
				if (Object.keys(pizzas).length === 0) {
					return 'Загрузка...'
				}

				const apiItem = pizzas[item.id]

				return (
					<ShoppingCartContentItem
						key={`${item.id}-${item.size}-${item.dough}`}
						apiItemData={apiItem}
						itemData={item}
						doughs={doughs}
						sizes={sizes}
					/>
				)
			})}

			<div className='content-items-footer'>
				<div className='content-all-count'>
					Всего пицц:{' '}
					<span className='content-all-count-bold'>
						{Object.values(state).reduce(
							(prev, current) => prev + current.count,
							0
						)}
					</span>
				</div>
				<div className='content-all-price'>
					Сумма заказа:{' '}
					<span className='content-all-price-bold'>
						{Object.values(state).reduce(
							(prev, current) => prev + current.price * current.count,
							0
						) + ' ₽'}
					</span>
				</div>
			</div>
		</div>
	)
}

export default ShoppingCartContentItems
