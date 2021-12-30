import React from 'react'

import PropTypes from 'prop-types'

import SelectionFilter from './SelectionFilter/SelectionFilter.jsx'
import SelectionSorting from './SelectionSorting/SelectionSorting.jsx'

import styles from './Selection.scss'

const Selection = ({ onFilterChange, onSortingChange }) => {
	return (
		<div className='selection' style={styles}>
			<SelectionFilter onChange={onFilterChange}></SelectionFilter>
			<SelectionSorting onChange={onSortingChange}></SelectionSorting>
		</div>
	)
}

Selection.propTypes = {
	onFilterChange: PropTypes.func,
	onSortingChange: PropTypes.func
}

export default Selection
