const domen = 'http://localhost:3000'

const getCategories = () => {
	return fetch(domen + '/categories').then(response => {
		return response.json()
	})
}

const getPizzas = (filterName = '', filterValue = '', sorting = '') => {
	const url = new URL(domen + '/pizzas')

	if (filterName !== '' && filterValue !== '-1') {
		url.searchParams.append(filterName + '_like', filterValue)
	}

	url.searchParams.append('_sort', sorting)
	url.searchParams.append('_order', 'desc')

	return fetch(url.toString()).then(response => {
		return response.json()
	})
}

const getPizzasByIds = ids => {
	const url = new URL(domen + '/pizzas')

	ids.map(id => url.searchParams.append('id', id))

	return fetch(url.toString()).then(response => {
		return response.json()
	})
}

const getSizes = () => {
	return fetch(domen + '/sizes').then(response => {
		return response.json()
	})
}

const getDoughs = () => {
	return fetch(domen + '/dough').then(response => {
		return response.json()
	})
}

export { getCategories, getPizzas, getSizes, getDoughs, getPizzasByIds }
