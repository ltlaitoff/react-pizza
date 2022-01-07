import React from 'react'
import Logo from '../../components/Logo'
import ShoppingCartOpenButton from '../../components/ShoppingCart/ShoppingCartOpenButton'

import styles from './header.scss'

const Header = () => {
	return (
		<header className='header' style={styles}>
			<Logo />
			<ShoppingCartOpenButton></ShoppingCartOpenButton>
		</header>
	)
}

export default Header
