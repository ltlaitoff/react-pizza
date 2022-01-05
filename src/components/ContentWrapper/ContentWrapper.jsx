import React, { useState } from 'react'

import Selection from '../Selection/Selection.jsx'
import Products from '../Products/Products.jsx'

import styles from './ContentWrapper.scss'

const ContentWrapper = () => {
	const [filter, setFilter] = useState({ id: -1, name: '' })
	const [sorting, setSorting] = useState({})

	const onFilterChange = (filterId, filterName) => {
		setFilter({ id: filterId, name: filterName })
	}

	const onSortingChange = (sortingId, sortingName) => {
		setSorting({ id: sortingId, name: sortingName })
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
