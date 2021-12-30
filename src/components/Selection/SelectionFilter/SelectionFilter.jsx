import React, { useEffect, useState } from 'react'
import Button from '../../Button/index.jsx'

import { getCategories } from '../../../api/api.js'

import styles from './SelectionFilter.scss'

const SelectionFilter = () => {
	const [categories, setCategories] = useState([])

	useEffect(() => {
		getCategories().then(categoriesList => setCategories(categoriesList))
	}, [])

	return (
		<div style={styles} className='selection-filter'>
			{categories.map((category, index) => {
				return (
					<Button
						className='selection-filter-button'
						active={index === 0}
						activeClass='selection-filter-button-active'
						key={index}
						backgroundColor='light-gray-60'
						textColor='dark-gray'
					>
						{category}
					</Button>
				)
			})}
		</div>
	)
}

export default SelectionFilter
