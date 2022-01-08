import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import ShoppingCart from './pages/ShoppingCart'
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
						<Route path='/' element={<Home />} />
						<Route path='/shopping-cart' element={<ShoppingCart />} />
						<Route path='/*' element={<NotFoundPage />} />
					</Routes>
				</ShoppingCartProvider>
			</Main>
		</>
	)
}

export default App
