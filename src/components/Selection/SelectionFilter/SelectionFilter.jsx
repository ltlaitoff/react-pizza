import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import Button from '../../Button/index.jsx'

import { getCategories } from '../../../api/api.js'

import styles from './SelectionFilter.scss'

const SelectionFilter = ({ onChange }) => {
	const [categories, setCategories] = useState([])
	const [currentActiveId, setCurrentActiveId] = useState(0)

	useEffect(() => {
		getCategories().then(categoriesList => setCategories(categoriesList))
	}, [])

	const onClick = (event, index) => {
		event.preventDefault()

		if (currentActiveId === index) return

		setCurrentActiveId(index)
		onChange(index, categories[index])
	}

	return (
		<div style={styles} className='selection-filter'>
			{categories.map((category, index) => {
				return (
					<Button
						key={index}
						className='selection-filter-button'
						active={index === currentActiveId}
						activeClass='selection-filter-button-active'
						backgroundColor='light-gray-60'
						textColor='dark-gray'
						onClick={event => onClick(event, index)}
					>
						{category}
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
