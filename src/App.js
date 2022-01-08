import React from 'react'
import { Routes, Route } from 'react-router-dom'

import HomePage from './pages/HomePage'
import ShoppingCartPage from './pages/ShoppingCartPage'
import NotFoundPage from './pages/NotFoundPage'
import Main from './components/Main'
import Header from './containers/Header'

import { ShoppingCartProvider } from './context/shopping-cart.jsx'
const App = () => {
	return (
		<>
			<Main>
				<ShoppingCartProvider>
					<Header />
					<Routes>
						<Route path='/' element={<HomePage />} />
						<Route path='/shopping-cart' element={<ShoppingCartPage />} />
						<Route path='/*' element={<NotFoundPage />} />
					</Routes>
				</ShoppingCartProvider>
			</Main>
		</>
	)
}

export default App
