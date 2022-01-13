import React from 'react'
import PropTypes from 'prop-types'

import Button from '../../Button/Button'

import styles from './SelectionSortingOpenButton.scss'

const SelectionSortingOpenButton = ({ onClick, children }) => {
	return (
		<Button
			className='selection-sorting-open-button'
			backgroundColor='transparent'
			textColor='dark-gray'
			style={styles}
			onClick={onClick}
		>
			{children}
		</Button>
	)
}

SelectionSortingOpenButton.propTypes = {
	onClick: PropTypes.func,
	children: PropTypes.node
}

export default SelectionSortingOpenButton
