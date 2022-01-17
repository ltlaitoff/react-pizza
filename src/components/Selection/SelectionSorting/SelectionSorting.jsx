import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import SelectionSortingOrderButton from './SelectionSortingOrderButton.jsx'
import SelectionSortingOpenButton from './SelectionSortingOpenButton.jsx'
import SelectionSortingList from './SelectionSortingList.jsx'

import styles from './SelectionSorting.scss'

const SORT_TYPES = ['популярности', 'цене', 'алфавиту']

const SelectionSorting = ({ onChange }) => {
	const [listOpen, setListOpen] = useState(false)
	const [orderStatus, setOrderStatus] = useState('desc')
	const [currentSortId, setCurrentSortId] = useState(0)

	useEffect(() => {
		onChange(0, SORT_TYPES[currentSortId], orderStatus)
	}, [])

	const toggleListVisibility = () => setListOpen(!listOpen)

	const choiceCurrentSort = index => {
		toggleListVisibility()

		if (currentSortId === index) return
		setCurrentSortId(index)

		onChange(index, SORT_TYPES[index], orderStatus)
	}

	const orderStatusChange = state => {
		setOrderStatus(state)
		onChange(currentSortId, SORT_TYPES[currentSortId], state)
	}

	return (
		<div className='selection-sorting' style={styles}>
			<SelectionSortingOrderButton
				currentStatus={orderStatus}
				onClick={orderStatusChange}
			/>
			Сортировка по:
			<SelectionSortingOpenButton onClick={toggleListVisibility}>
				{SORT_TYPES[currentSortId]}
			</SelectionSortingOpenButton>
			{listOpen && (
				<SelectionSortingList
					source={SORT_TYPES}
					onClick={choiceCurrentSort}
					current={currentSortId}
				/>
			)}
		</div>
	)
}

SelectionSorting.propTypes = {
	onChange: PropTypes.func
}

SelectionSorting.defaultProps = {
	onChange: (sortingId, sortingName) => {}
}

export default SelectionSorting
