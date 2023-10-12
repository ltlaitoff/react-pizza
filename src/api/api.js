import data from './database.json'
// const domen = 'http://localhost:3000'

const getCategories = async () => {
	return await data.categories
	// return fetch(domen + '/categories').then(response => {
	// 	return response.json()
	// })
}

const getPizzas = async (
	filterName = '',
	filterValue = '',
	sorting = '',
	sortingOrder = 'asc'
) => {
	return await data.pizzas
		.filter(item => {
			if (filterName !== '' && filterValue !== '-1') {
				return item[filterName].includes(filterValue)
			}

			return true
		})
		.sort((a, b) => {
			const aElement = a[sorting]
			const bElement = b[sorting]

			if (sortingOrder === 'asc') return aElement - bElement

			return bElement - aElement
		})
	// const url = new URL(domen + '/pizzas')

	// if (filterName !== '' && filterValue !== '-1') {
	// 	url.searchParams.append(filterName + '_like', filterValue)
	// }

	// url.searchParams.append('_sort', sorting)
	// url.searchParams.append('_order', sortingOrder)

	// return fetch(url.toString()).then(response => {
	// 	return response.json()
	// })
}

const getPizzasByIds = async ids => {
	return await data.pizzas.filter(item => {
		return ids.includes(item.id)
	})
	// const url = new URL(domen + '/pizzas')

	// ids.map(id => url.searchParams.append('id', id))

	// return fetch(url.toString()).then(response => {
	// 	return response.json()
	// })
}

const getSizes = async () => {
	return await data.sizes

	// return fetch(domen + '/sizes').then(response => {
	// 	return response.json()
	// })
}

const getDoughs = async () => {
	return await data.dough

	// return fetch(domen + '/dough').then(response => {
	// 	return response.json()
	// })
}

export { getCategories, getPizzas, getSizes, getDoughs, getPizzasByIds }
