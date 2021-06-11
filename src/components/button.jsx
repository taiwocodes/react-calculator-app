import React from 'react';

function Button({ value, handler }) {
	return (
		<button value={value} onClick={handler}>
			{value}
		</button>
	);
}

export default Button;
