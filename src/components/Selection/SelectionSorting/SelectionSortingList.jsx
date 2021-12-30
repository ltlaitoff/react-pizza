import React from 'react'
import PropTypes from 'prop-types'

import Button from '../../Button/index.jsx'

import styles from './SelectionSortingList.scss'

const SelectionSortingList = ({ source, onClick, current }) => {
	return (
		<div className='sorting-list' style={styles}>
			{source.map((item, index) => {
				return (
					<Button
						key={index}
						className={
							'sorting-list-item ' +
							(index === current && 'sorting-list-item-active')
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
