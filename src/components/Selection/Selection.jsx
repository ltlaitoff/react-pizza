import React from 'react'
import SelectionFilter from './SelectionFilter.jsx'
import SelectionSorting from './SelectionSorting.jsx'

import styles from './Selection.scss'

const Selection = () => {
  return (
		<div className='selection' style={styles}>
			<SelectionFilter></SelectionFilter>
			<SelectionSorting></SelectionSorting>
		</div>
	)
}

export default Selection
