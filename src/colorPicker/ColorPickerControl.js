import React, { useState, useEffect } from 'react';
import tinycolor from 'tinycolor2';
import classNames from 'classnames';
import ColorPreviewBox from './ColorPreviewBox';
import ColorPicker from './ColorPicker';
import './colorPickerControl.scss';

const isEscapeButton = (event) => {
	return (event.key && event.key == 'Escape') || (event.keyCode && event.keyCode == 27);
}

/**
 * @param {Object} props
 * @param {string} props.value
 * @param {function} props.onChange
 * @param {ColorFormat} [props.colorFormat] by default tinycolor object should be used
 * @param {string} [props.label]
 * @param {boolean} [props.disabled]
 * @param {function} [props.onOpenChange]
 */

function ColorPickerControl(props) {
	const [display, setDisplay] = useState(false);
	const [color, setColor] = useState({});

	const onDisplayHandler = (value) => {
		if (props.onOpenChange) props.onOpenChange(value);
		setDisplay(value);
	}

	useEffect(() => {
		const hex = props.value ? tinycolor(props.value).toHexString() : '#ffffff';
		setColor({ hex });
	}, [props]);

	useEffect(() => {
		const escapeHandler = (event) => {
			if (isEscapeButton(event)) onDisplayHandler(false);
		}
		if (props.onOpenChange) props.onOpenChange(display);
		if (display) window.addEventListener('keydown', escapeHandler);
		return () => {
			if (display) window.removeEventListener('keydown', escapeHandler);
		}
	}, [display]);

	const onChange = (color) => {
		if (!props.disabled) {
			setColor(color);
			const result = props.colorFormat && color[props.colorFormat];
			props.onChange(result || color);
		}
	}

	return (
		<div className={classNames('color-picker-control', props.className)}>
			{props.label && <label>{props.label}</label>}
			<div className="color-control-wrap">
				<div className={classNames('swatch', { 'disabled': props.disabled })} onClick={() => !props.disabled && onDisplayHandler(!display)}>
					<ColorPreviewBox hex={color.hex} className={classNames({ 'disabled': props.disabled })} />
				</div>
				{display &&
					<div className={classNames('popup', props.className)}>
						<ColorPicker color={props.value} onChange={onChange} />
					</div>
				}
			</div>
		</div>
	);
}

export default ColorPickerControl;