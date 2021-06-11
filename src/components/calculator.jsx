import { useState } from 'react';
import Button from './button';
import Output from './output';
import { sum, divide, multiply, subtract } from '../utils/math';
import { parser } from '../utils/parser';

const actionmap = {
	'+': sum,
	'-': subtract,
	'/': divide,
	x: multiply,
};

function Calculator() {
	const [text, setText] = useState('');
	const [currentAction, setCurrentAction] = useState(null);

	const updateText = e => {
		setText(prev => prev + e.target.value);
	};

	const actionHandler = e => {
		const action = e.target.value;

		if (currentAction) {
			let parsed = parser(text);
			let added_values = actionmap[currentAction](...parsed);
			setText(added_values);
			updateText(e);
			setCurrentAction(action);
		} else {
			setCurrentAction(action);
			updateText(e);
		}
	};

	const clear = () => {
		setText('');
		setCurrentAction(null);
	};

	return (
		<div>
			<div className='calc_layout'>
				<Output text={text} />
				<button onClick={clear} className='span-all clear'>
					Clear
				</button>
				<Button value='7' handler={updateText} />
				<Button value='8' handler={updateText} />
				<Button value='9' handler={updateText} />
				<Button value='x' handler={actionHandler} />
				<Button value='4' handler={updateText} />
				<Button value='5' handler={updateText} />
				<Button value='6' handler={updateText} />
				<Button value='-' handler={actionHandler} />
				<Button value='1' handler={updateText} />
				<Button value='2' handler={updateText} />
				<Button value='3' handler={updateText} />
				<Button value='+' handler={actionHandler} />
				<Button value='.' handler={updateText} />
				<Button value='0' handler={updateText} />
				<Button value='=' handler={actionHandler} />
				<Button value='/' handler={actionHandler} />
			</div>
		</div>
	);
}

export default Calculator;
