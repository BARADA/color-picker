import React, { useState } from 'react';
import tinycolor from 'tinycolor2';
import { ColorFormat, ColorPickerControl } from './colorPicker';
import './app.scss';

function App() {
	const [color, setColor] = useState(tinycolor.random());
	return (
		<div className="App">
			<header className="App-header">
				<ColorPickerControl
					value={color}
					onChange={setColor}
					colorFormat={ColorFormat.Hex}
				/>
			</header>
		</div>
	);
}

export default App;
