import React from 'react'
import SelectionFilter from './SelectionFilter/SelectionFilter.jsx'
import SelectionSortingOpenButton from './SelectionSorting/SelectionSortingOpenButton.jsx'

import styles from './Selection.scss'

const Selection = () => {
  return (
		<div className='selection' style={styles}>
			<SelectionFilter></SelectionFilter>
			<SelectionSortingOpenButton></SelectionSortingOpenButton>
		</div>
	)
}

export default Selection
