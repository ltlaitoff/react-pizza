/* eslint-disable */

import React from 'react'

import Button from '../../Button/Button.jsx'
import { ReactComponent as ArrowUpIcon } from '../../../assets/images/favicon/arrow-up.svg'

import styles from './SelectionSortingOrderButton.scss'

const reverseStatus = status => {
	return status === 'desc' ? 'asc' : 'desc'
}

const SelectionSortingOrderButton = ({ currentStatus, onClick }) => {
	const onButtonClick = () => {
		onClick(reverseStatus(currentStatus))
	}

	return (
		<Button
			className='selection-sorting-order'
			onClick={onButtonClick}
			style={styles}
		>
			<ArrowUpIcon
				className={
					'selection-sorting-order-icon ' +
					(currentStatus === 'desc' && 'selection-sorting-order-icon-reflect')
				}
			/>
		</Button>
	)
}

export default SelectionSortingOrderButton
