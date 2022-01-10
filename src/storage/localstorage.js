const localStorageKey = 'react-pizza'

const localStorageSet = data => {
	localStorage.setItem(localStorageKey, data)
}

const localStorageGet = () => {
	return JSON.parse(localStorage.getItem(localStorageKey))
}

export { localStorageSet, localStorageGet }
