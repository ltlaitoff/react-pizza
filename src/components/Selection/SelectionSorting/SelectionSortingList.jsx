import React from 'react'

import Button from '../../Button/index.jsx'

import styles from './SelectionSortingList.scss'

const sortingTypes = ['популярности', 'по цене', 'по алфавиту']

const SelectionSortingList = () => {
  return (
		<div className='sorting-list' style={styles}>
			{sortingTypes.map((item, index) => {
				return (
					<Button
						key={index}
						className='sorting-list-item'
						backgroundColor='transparent'
						textColor='dark-gray'
					>
						{item}
					</Button>
				)
			})}
		</div>
	)
}

export default SelectionSortingList
