import React, { useState } from 'react'
import PropTypes from 'prop-types'

import SelectionSortingOpenButton from './SelectionSortingOpenButton.jsx'
import SelectionSortingList from './SelectionSortingList.jsx'

import arrowUp from '../../../assets/images/favicon/arrow-up.svg'
import styles from './SelectionSorting.scss'

const SORT_TYPES = ['популярности', 'цене', 'алфавиту']

const SelectionSorting = ({ onChange }) => {
	const [listOpen, setListOpen] = useState(false)
	const [currentSortId, setCurrentSortId] = useState(0)

	const toggleListVisibility = () => setListOpen(!listOpen)

	const choiceCurrentSort = index => {
		toggleListVisibility()

		if (currentSortId === index) return
		setCurrentSortId(index)

		onChange(index, SORT_TYPES[index])
	}

	return (
		<div className='sorting' style={styles}>
			<img
				src={arrowUp}
				alt='arrowUP'
				className={'sorting-icon ' + (listOpen && 'sorting-icon-reflect')}
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
