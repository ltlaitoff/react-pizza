const domen = 'http://localhost:3000'

const getCategories = () => {
	return fetch(domen + '/categories').then(response => {
		return response.json()
	})
}

const getPizzas = (filterName = '', filterValue = '', sorting = '') => {
	const url = new URL(domen + '/pizzas')
	url.searchParams.append(filterName + '_like', filterValue)
	url.searchParams.append('_sort', sorting)

	return fetch(url.toString()).then(response => {
		return response.json()
	})
}

const getSizes = () => {
	return fetch(domen + '/sizes').then(response => {
		return response.json()
	})
}

export { getCategories, getPizzas, getSizes }
