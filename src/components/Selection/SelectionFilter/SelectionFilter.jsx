import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import Button from '../../Button/index.jsx'

import { getCategories } from '../../../api/api.js'

import styles from './SelectionFilter.scss'

const sortById = (a, b) => {
	return Number(a[0]) - Number(b[0])
}

const SelectionFilter = ({ onChange }) => {
	const [categories, setCategories] = useState({})
	const [currentActiveId, setCurrentActiveId] = useState('-1')

	useEffect(() => {
		getCategories().then(categoriesDict => {
			categoriesDict['-1'] = 'All'
			setCategories(categoriesDict)
			onChange('-1', categoriesDict['-1'])
		})
	}, [])

	const onClick = (event, index) => {
		event.preventDefault()

		if (currentActiveId === index) return

		setCurrentActiveId(index)
		onChange(index, categories[index])
	}

	return (
		<div style={styles} className='selection-filter'>
			{Object.entries(categories)
				.sort(sortById)
				.map(([categoryId, categoryName]) => {
					return (
						<Button
							key={categoryId}
							className='selection-filter-button'
							active={categoryId === currentActiveId}
							activeClass='selection-filter-button-active'
							backgroundColor='light-gray-60'
							textColor='dark-gray'
							onClick={event => onClick(event, categoryId)}
						>
							{categoryName}
						</Button>
					)
				})}
		</div>
	)
}

SelectionFilter.propTypes = {
	onChange: PropTypes.func
}

SelectionFilter.defaultProps = {
	onChange: (categoryId, categoryName) => {}
}

export default SelectionFilter
