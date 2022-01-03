import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import styles from './button.scss'

/*
 * FIX:
 * [ ] move variables with colors to the global and make one function that will return classes
 */
const backgroudColorClass = color => {
	const avalibleColors = [
		'orange',
		'white',
		'dark-gray',
		'light-gray-60',
		'transparent'
	]
	if (avalibleColors.includes(color)) return `button-bg-${color}`
	return `button-bg-${avalibleColors[0]}`
}

const borderColorClass = color => {
	const avalibleColors = ['orange', 'gray-70', 'gray-85', 'transparent']
	if (avalibleColors.includes(color)) return `button-border-${color}`
	return `button-border-${avalibleColors[0]}`
}

const textColorClass = color => {
	const avalibleColors = ['orange', 'white', 'dark-gray', 'transparent']
	if (avalibleColors.includes(color)) return `button-text-${color}`
	return `button-text-${avalibleColors[0]}`
}

const borderWidthClass = width => {
	const avalibleWidths = [1, 2]
	if (avalibleWidths.includes(width)) return `button-border-${width}`
	return `button-border-${width[0]}`
}

const roundedClass = size => {
	const avalibleSizes = ['none', 'sm', 'md', 'lg']
	if (avalibleSizes.includes(size)) return `button-rounded-${size}`
	return `button-rounded-${size[0]}`
}

const Button = ({
	onClick,
	children,
	disabled,
	className,
	active,
	activeClass,
	backgroundColor,
	borderColor,
	textColor,
	borderWidth,
	borderRadius,
	style,
	...attrs
}) => {
	const onClickHandler = e => {
		if (disabled) {
			e.preventDefault()
			return
		}

		return onClick(e)
	}

	const classes = classNames(
		'button',
		className,
		{ [activeClass]: active },
		backgroudColorClass(backgroundColor),
		borderColorClass(borderColor),
		textColorClass(textColor),
		borderWidthClass(borderWidth),
		roundedClass(borderRadius)
	)

	return (
		<button
			{...attrs}
			style={(styles, style)}
			className={classes}
			disabled={disabled}
			onClick={onClickHandler}
		>
			{children}
		</button>
	)
}

Button.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	onClick: PropTypes.func,
	disabled: PropTypes.bool,
	active: PropTypes.bool,
	activeClass: PropTypes.string,
	backgroundColor: PropTypes.string,
	textColor: PropTypes.string,
	borderColor: PropTypes.string,
	borderWidth: PropTypes.number,
	borderRadius: PropTypes.string
}

Button.defaultProps = {
	children: 'Button text',
	className: '',
	onClick: () => {},
	disabled: false,
	active: false,
	activeClass: '',
	backgroundColor: 'orange',
	textColor: 'white',
	borderColor: 'transparent',
	borderWidth: 1,
	borderRadius: 'lg'
}

export default Button
