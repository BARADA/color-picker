import classNames from 'classnames';
import React from 'react';
import tinycolor from 'tinycolor2';
import './hsvSwatches.scss';

/**
 * @param {Object} props
 * @param {Object} [props.hsv]
 * @param {function} props.onClick
 * @param {boolean} [props.active]
 */

function HsvSwatch({ hsv, onClick, active }) {
	return (<div
		className={classNames('swatch', { 'active': active })}
		style={{ background: hsv ? tinycolor(hsv).toHslString() : 'none' }}
		onClick={(event) => onClick(hsv, event)}
	>
	</div>);
}

/**
 * @param {Object} props
 * @param {Object} props.hsv
 * @param {string} props.axis 'h'|'s'|'v'
 * @param {number=5} [props.quantity] number of swatches to render
 * @param {function} props.onClick
 */

function HsvSwatches({ hsv, axis, quantity = 5, onClick, className }) {
	const swatches = [];
	const ranges = { h: 360, s: 1, v: 1 };
	const interval = ranges[axis] / quantity;
	let axisValue = interval / 2;
	for (let i = 0; i < quantity; ++i) {
		const active = Math.abs(hsv[axis] - axisValue).toFixed(4) < interval / 2;
		const swatchHsv = {
			...hsv,
			[axis]: axisValue,
			source: 'hsv'
		};
		swatches.push(<HsvSwatch key={i} hsv={swatchHsv} onClick={onClick} active={active} />);
		axisValue = axisValue + interval;
	}
	return (<div className={classNames('swatches', className)}>{swatches}</div>);
}

export default HsvSwatches;