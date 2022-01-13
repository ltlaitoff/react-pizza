import React from 'react'
import PropTypes from 'prop-types'

import Button from '../../Button/Button'

import styles from './SelectionSortingList.scss'

const SelectionSortingList = ({ source, onClick, current }) => {
	return (
		<div className='selection-sorting-list' style={styles}>
			{source.map((item, index) => {
				return (
					<Button
						key={index}
						className={
							'selection-sorting-list-item ' +
							(index === current && 'selection-sorting-list-item-active')
						}
						backgroundColor='transparent'
						textColor='dark-gray'
						onClick={() => onClick(index)}
					>
						{item}
					</Button>
				)
			})}
		</div>
	)
}

SelectionSortingList.propTypes = {
	source: PropTypes.array,
	onClick: PropTypes.func,
	current: PropTypes.number
}

export default SelectionSortingList
