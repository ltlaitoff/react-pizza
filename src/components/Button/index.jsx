import React from 'react'

import styles from './button.scss'

const Button = ({ onClick, outline, children }) => {
	return (
		<button
			className={'button' + (outline ? ' button-outline' : '')}
			style={styles}
			onClick={onClick}
		>
			{children}
		</button>
	)
}

export default Button
