import React from 'react';
import { CustomPicker } from 'react-color';
import { Saturation, Hue, EditableInput as Input } from 'react-color/lib/components/common';
import ColorPreviewBox from './ColorPreviewBox';
import HsvSwatches from './HsvSwatches';
import './colorPicker.scss';

function HuePointer() {
	return (<div className="hue-pointer"></div>);
}

const inputTypeMap = { h: 'h', s: 's', v: 'v' };
const labels = { [inputTypeMap.h]: 'H', [inputTypeMap.s]: 'S', [inputTypeMap.v]: 'V', hex: 'Hex' };

/**
 * Component is wrapped to CustomPicker, watch CustomPicker docs
 * @param {Object} props
 * @param {string|Object} props.color - tinycolor color object
 * @param {function} props.onChange
 */

function ColorPicker(props) {
	const { hsv, hex, onChange } = props;

	const hsvInputs = Object.values(inputTypeMap).map(type => {
		const _onChange = (data, target, event) => onChange({ ...hsv, [target]: data[labels[target]] }, event);
		return <Input
			key={type}
			label={labels[type]}
			value={type == inputTypeMap.h ? Math.round(hsv.h) : Math.round(hsv[type] * 100)}
			onChange={(data, e) => _onChange(data, type, e)}
		/>
	});

	return (
		<div className="color-picker">
			<div className="body">
				<div>
					<div className="saturation-wrap">
						<Saturation {...props} />
					</div>
					<div className="values">
						<ColorPreviewBox hex={hex} />
						{hsvInputs}
						<Input
							label={labels.hex}
							value={hex.replace('#', '')}
							onChange={(data, e) => onChange({
								hex: data[labels.hex],
								source: 'hex'
							}, e)}
						/>
					</div>
				</div>
				<div className="hue-group">
					<div className='hue-wrap'>
						<Hue width={20} {...props} pointer={HuePointer} direction='vertical' />
					</div>
					<HsvSwatches hsv={hsv} className="v" axis="v" onClick={onChange} />
				</div>
			</div>
			<HsvSwatches hsv={hsv} className="h" axis="h" quantity={28} onClick={onChange} />
		</div>
	);
}

export default CustomPicker(ColorPicker);