import React from 'react'

import { Link } from 'react-router-dom'

import logo from '../../assets/images/logo.png'
import styles from './logo.scss'

const Logo = () => {
	return (
		<Link to='/' className='logo' style={styles}>
			<img src={logo} alt='' className='logo-icon' />
			<div className='logo-text'>
				<h1 className='logo-title'>REACT PIZZA</h1>
				<div className='logo-descr'>самая вкусная пицца во вселенной</div>
			</div>
		</Link>
	)
}

export default Logo
