import React from 'react';
import './colorPreviewBox.scss';

/**
 * Renders area for color preview
 * @param {Object} props
 * @param {string} [props.hex]
 */

function ColorPreviewBox({hex}) {
	return (<div
		className='color-preview-box'
		style={{ backgroundColor: hex || 'none' }}>
	</div>);
}

export default ColorPreviewBox;