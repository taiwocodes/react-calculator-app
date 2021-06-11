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

	const del = () => {
		setText(prev => prev.slice(0, prev.length - 1));
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
				<button onClick={clear} className='span-3 clear'>
					Clear
				</button>
				<button onClick={del} className=''>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='icon'
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={2}
							d='M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l6.414 6.414a2 2 0 001.414.586H19a2 2 0 002-2V7a2 2 0 00-2-2h-8.172a2 2 0 00-1.414.586L3 12z'
						/>
					</svg>
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
