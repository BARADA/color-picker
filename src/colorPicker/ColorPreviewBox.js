import React from 'react';
import classNames from 'classnames';
import './colorPreviewBox.scss';

/**
 * Renders area for color preview
 * @param {Object} props
 * @param {string} [props.hex]
 * @param {function} [props.onClick]
 */

function ColorPreviewBox(props) {
	return (
		<div
			className={classNames('color-preview-box', props.className)}
			style={{ backgroundColor: props.hex || 'none' }}
			onClick={props.onClick}
		>
		</div>
	);
}

export default ColorPreviewBox;