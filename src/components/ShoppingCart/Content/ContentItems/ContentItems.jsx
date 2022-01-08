import React, { useEffect, useState } from 'react'

import Button from '../../../Button'

import { useShoppingCart } from '../../../../context/shopping-cart.jsx'
import { getSizes, getDoughs, getPizzasByIds } from '../../../../api/api.js'
import { ReactComponent as Minus } from '../../../../assets/images/favicon/minus.svg'
import { ReactComponent as Plus } from '../../../../assets/images/favicon/plus.svg'
import { ReactComponent as Cross } from '../../../../assets/images/favicon/cross.svg'

import styles from './ContentItems.scss'

const ContentItems = () => {
	const [state, dispatch] = useShoppingCart()
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
				const descr = `${doughs[item.dough]} тесто, ${sizes[item.size]} см.`

				return (
					<>
						<hr className='content-item-divider' />
						<div className='content-item'>
							<div className='content-item-wrapper-first'>
								<img
									src={apiItem.imageUrl}
									alt='pizza'
									className='content-img'
								/>
								<div className='content-block-info'>
									<div className='content-item-title'>{apiItem.name}</div>
									<div className='content-item-descr'>{descr}</div>
								</div>
							</div>

							<div className='content-item-wrapper-two'>
								<div className='content-block-count'>
									<Button className='content-minus'>
										<Minus className='content-minus-icon' />
									</Button>
									<div className='content-count'>{item.count}</div>
									<Button className='content-plus'>
										<Plus className='content-plus-icon' />
									</Button>
								</div>

								<div className='content-price'>{apiItem.price} ₽</div>
								<Button className='content-delete'>
									<Cross className='content-delete-icon' />
								</Button>
							</div>
						</div>
					</>
				)
			})}

			<div className='content-items-footer'>
				<div className='content-all-count'>
					Всего пицц:{' '}
					<span className='content-all-count-bold'>
						{Object.keys(state).length}
					</span>
				</div>
				<div className='content-all-price'>
					Сумма заказа:{' '}
					<span className='content-all-price-bold'>
						{Object.values(state).reduce(
							(prev, current) => prev + current.price,
							0
						) + ' ₽'}
					</span>
				</div>
			</div>
		</div>
	)
}

export default ContentItems
