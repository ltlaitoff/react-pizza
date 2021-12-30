import React, { useState } from 'react'

import Selection from '../Selection/Selection.jsx'
import Products from '../Products/Products.jsx'

import styles from './ContentWrapper.scss'

const ContentWrapper = () => {
	const [filter, setFilter] = useState(0)
	const [sorting, setSorting] = useState(0)

	const onFilterChange = (filterId, filterName) => {
		setFilter(filterId)
	}

	const onSortingChange = (sortingId, sortingName) => {
		setSorting(sortingId)
	}

	return (
		<div className='content-wrapper' style={styles}>
			<Selection
				onFilterChange={onFilterChange}
				onSortingChange={onSortingChange}
			/>
			<Products filter={filter} sorting={sorting} />
		</div>
	)
}

export default ContentWrapper
