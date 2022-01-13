import React from 'react'
import { useLocation } from 'react-router-dom'

import Logo from '../../components/Logo/Logo'
import ShoppingCartOpenButton from '../../components/ShoppingCart/ShoppingCartOpenButton/ShoppingCartOpenButton'

import styles from './Header.scss'

const Header = () => {
	const location = useLocation()
	return (
		<header className='header' style={styles}>
			<Logo />
			{location.pathname === '/' && (
				<ShoppingCartOpenButton></ShoppingCartOpenButton>
			)}
		</header>
	)
}

export default Header
