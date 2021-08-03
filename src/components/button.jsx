import React from 'react';

const Button = ({value, handler}) => {

	return(
<button value={value} onClick={handler}>
	{value}
</button>
	)
}


export default Button;