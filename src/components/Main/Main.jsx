import React from 'react'
import PropTypes from 'prop-types'

import styles from './Main.scss'

const Main = ({children}) => {
	return (
		<main className='main' style={styles}>
			{children}
		</main>
	)
}

Main.propTypes = {
	children: PropTypes.node
}

export default Main
