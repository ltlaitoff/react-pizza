import React from 'react'
import Button from '../Button/index.jsx'

import styles from './SelectionFilter.scss'

const categories = ['Meat', 'Vegetarian', 'Grill', 'Sharp', 'Closed']

const SelectionFilter = () => {
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
