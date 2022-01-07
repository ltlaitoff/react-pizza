import React, { createContext, useContext, useReducer } from 'react'

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
	console.log(state, action.count)
	switch (action.type) {
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

					return stateCopy
				}
			}

			return [
				...state,
				{
					id: action.id,
					dough: action.dough,
					size: action.size,
					price: action.price,
					count: action.count
				}
			]
		}

		case 'remove': {
			return state.filter(item => item.id !== action.id)
		}

		// case 'remove-count': {
		// }

		default: {
			throw new Error(`Unhandled action type: ${action.type}`)
		}
	}
}

const ShoppingCartProvider = ({ children }) => {
	const [state, dispatch] = useReducer(shoppingCartReducer, [])
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
