import React from 'react'

import Home from './pages/Home'
import Main from './components/Main'

import { ShoppingCartProvider } from './context/shopping-cart.jsx'
const App = () => {
	return (
		<>
			<Main>
				<ShoppingCartProvider>
					<Home />
				</ShoppingCartProvider>
			</Main>
		</>
	)
}

export default App
