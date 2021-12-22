import React from 'react'

import Button from '../../Button/index.jsx'

import arrowUp from '../../../assets/images/favicon/arrow-up.svg'
import styles from './SelectionSortingOpenButton.scss'

const SelectionSortingOpenButton = () => {
	const inner = (
		<>
			<img src={arrowUp} alt='arrowUP' className='selection-sorting-icon' />
			Сортировка по:
			<div className='selection-sorting-type'>популярности</div>
		</>
	)

	return (
		<Button
			className='selection-sorting-open-button'
			backgroundColor='transparent'
			textColor='dark-gray'
			style={styles}
		>
			{inner}
		</Button>
	)
}

export default SelectionSortingOpenButton
