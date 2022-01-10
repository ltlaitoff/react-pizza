import React, { createContext, useContext, useReducer, useEffect } from 'react'

import { localStorageSet, localStorageGet } from '../storage/localstorage.js'

const ShoppingCartStateContext = createContext()
const ShoppingCartDispatchContext = createContext()

const useShoppingCartState = () => {
	const context = useContext(ShoppingCartStateContext)

	if (context === undefined) {
		throw new Error(
			'useShoppingCartState must be used within a ShoppingCartProvider'
		)
	}

	return context
}

const useShoppingCartDispatch = () => {
	const context = useContext(ShoppingCartDispatchContext)

	if (context === undefined) {
		throw new Error(
			'useShoppingCartDispatch must be used within a ShoppingCartProvider'
		)
	}

	return context
}

const useShoppingCart = () => {
	return [useShoppingCartState(), useShoppingCartDispatch()]
}

const shoppingCartReducer = (state, action) => {
	switch (action.type) {
		case 'set': {
			const newState = [...action.value]

			return newState
		}

		case 'add': {
			const stateCopy = [...state]

			for (let itemId in stateCopy) {
				if (
					stateCopy[itemId].id === action.id &&
					stateCopy[itemId].dough === action.dough &&
					stateCopy[itemId].size === action.size
				) {
					stateCopy[itemId] = {
						...stateCopy[itemId],
						count: stateCopy[itemId].count + action.count
					}

					localStorageSet(JSON.stringify(stateCopy))

					return stateCopy
				}
			}

			const newState = [
				...state,
				{
					id: action.id,
					dough: action.dough,
					size: action.size,
					price: action.price,
					count: action.count
				}
			]

			localStorageSet(JSON.stringify(newState))

			return newState
		}

		case 'remove': {
			const newState = state.flatMap(item => {
				if (
					item.id === action.id &&
					item.dough === action.dough &&
					item.size === action.size
				) {
					if (action.count === undefined || action.count >= item.count) {
						return []
					}

					return { ...item, count: item.count - action.count }
				}

				return item
			})

			localStorageSet(JSON.stringify(newState))
			return newState
		}

		case 'remove-all': {
			localStorageSet(JSON.stringify([]))
			return []
		}

		default: {
			throw new Error(`Unhandled action type: ${action.type}`)
		}
	}
}

const ShoppingCartProvider = ({ children }) => {
	const [state, dispatch] = useReducer(shoppingCartReducer, [])

	useEffect(() => {
		const localStorageValue = localStorageGet()

		if (localStorageValue !== undefined) {
			dispatch({ type: 'set', value: localStorageGet() })
		}
	}, [])

	return (
		<ShoppingCartStateContext.Provider value={state}>
			<ShoppingCartDispatchContext.Provider value={dispatch}>
				{children}
			</ShoppingCartDispatchContext.Provider>
		</ShoppingCartStateContext.Provider>
	)
}

export {
	ShoppingCartProvider,
	useShoppingCartDispatch,
	useShoppingCartState,
	useShoppingCart
}
