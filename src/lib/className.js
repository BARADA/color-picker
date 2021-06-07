import classNames from 'classnames';

/**
 * As for now it's just an alias for 'classnames' library.
 * The reason is to make on point of possible future modifications.
 */

export const className = classNames;

/**
 * Extracts className or classNames from react props
 * @param {Object} props react component props
 * @param {string} [props.className]
 * @param {Array.<string>} [props.classNames]
 * @returns array of class name strings
 */

export function fromProps(props) {
	const classes = [];
	if (props.className != null) {
		classes.push(props.className);
	} else if (Array.isArray(props.classNames)) {
		classes.push(...props.classNames);
	}
	return classes;
}