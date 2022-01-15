const localStorageKey = 'react-pizza'

const localStorageSet = data => {
	localStorage.setItem(localStorageKey, data)
}

const localStorageGet = () => {
	const value = localStorage.getItem(localStorageKey)
	if (!value) return null

	return JSON.parse(value)
}

export { localStorageSet, localStorageGet }
