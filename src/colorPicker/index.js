import ColorPicker from './ColorPicker';
import ColorPickerControl from './ColorPickerControl';

/**
 * @readonly
 * @enum {Type}
 */
const ColorFormat = {
	Hex: 'hex', // string
	OldHue: 'oldHue', // number
	Hsl: 'hsl', // object
	Rgb: 'rgb', // object
	Hsv: 'hsv' // object
}

export { ColorPicker, ColorPickerControl, ColorFormat };