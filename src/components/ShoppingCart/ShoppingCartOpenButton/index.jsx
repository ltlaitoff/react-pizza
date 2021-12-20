import React from 'react'
import Button from '../../Button'
import ShoppingCartIcon from '../../../assets/images/favicon/shopping-cart.svg'
import PropTypes from 'prop-types'

import styles from './shoppingCartOpenButton.scss';

const ShoppingCartOpenButton = ({ price, count, onClick, disabled, active }) => {
	const shoppingPrice = `${price} ₽`
	const divider = <div className='shopping-cart-open-button-divider'></div>
	return (
		<Button
			className='shopping-cart-open-button'
			style={styles}
			onClick={onClick}
			disabled={disabled}
			active={active}
		>
			{shoppingPrice}
			{divider}
			<div className='shopping-cart-open-button-wrapper'>
				<img src={ShoppingCartIcon} alt='ShoppingCartIcon' />
				{count}
			</div>
		</Button>
	)
}

ShoppingCartOpenButton.propTypes = {
	price: PropTypes.number,
	count: PropTypes.number,
	onClick: PropTypes.func,
	disabled: PropTypes.bool,
	active: PropTypes.bool
}

ShoppingCartOpenButton.defaultProps = {
	price: 0,
	count: 0,
	onClick: () => {},
	disabled: false,
	active: false
}

export default ShoppingCartOpenButton
