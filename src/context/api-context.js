import React, { createContext, useContext } from 'react'

const APIContext = createContext(null)

const useAPI = () => {
	const context = useContext(APIContext)

	if (!context) {
		throw new Error('useAPI must be used within a APIProvider')
	}

	return context
}

const APIProvider = props => {
	return <APIContext.Provider {...props} />
}

export { useAPI, APIProvider }
