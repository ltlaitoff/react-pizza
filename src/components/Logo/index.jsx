import React from 'react'

import logo from '../../assets/images/logo.png'
import styles from "./logo.scss"

const Logo = ({ href }) => {
	return (
		<a href={href} className='logo' style={styles}>
			<img src={logo} alt='' className='logo-icon' />
			<div className='logo-text'>
				<h1 className='logo-title'>REACT PIZZA</h1>
				<div className='logo-descr'>самая вкусная пицца во вселенной</div>
			</div>
		</a>
	)
}

export default Logo
