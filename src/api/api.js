const domen = 'http://localhost:3000'

const getCategories = () => {
	return fetch(domen + '/categories').then(response => {
		return response.json()
	})
}

const getPizzas = (filterName = '', filterValue = '', sorting = '') => {
	const url = new URL(domen + '/pizzas')
	let params = new URLSearchParams(url.search)
	params.append(filterName, filterValue)
	params.append('_sort', sorting)

	return fetch(url).then(response => {
		return response.json()
	})
}

const getSizes = () => {
	return fetch(domen + '/sizes').then(response => {
		return response.json()
	})
}

export { getCategories, getPizzas, getSizes }
