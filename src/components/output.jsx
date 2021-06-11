function Output({ text }) {
	return (
		<input
			className='output span-all'
			type='text'
			disabled
			value={text}
			placeholder='0'
		/>
	);
}

export default Output;
