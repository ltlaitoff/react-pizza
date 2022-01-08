import React, { useState } from 'react'

import Selection from '../components/Selection/Selection.jsx'
import Products from '../components/Products/Products.jsx'

const HomePage = () => {
	const [filter, setFilter] = useState({})
	const [sorting, setSorting] = useState({})

	const onFilterChange = (filterId, filterName) => {
		setFilter({ id: filterId, name: filterName })
	}

	const onSortingChange = (sortingId, sortingName) => {
		setSorting({ id: sortingId, name: sortingName })
	}

	return (
		<div className='home'>
			<Selection
				onFilterChange={onFilterChange}
				onSortingChange={onSortingChange}
			/>
			<Products filter={filter} sorting={sorting} />
		</div>
	)
}

export default HomePage
