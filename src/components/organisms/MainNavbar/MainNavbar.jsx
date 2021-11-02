import React, { useState, useEffect, useCallback } from 'react';
import { Button } from '@mui/material';

import { ContainedButton } from '../../atoms/Buttons/ContainedButton';

const MainNavbar = ({ isBlue, logout, setIsBlue }) => {
	const [text, setText] = useState('Autumn is magical');
	const [counter, setCounter] = useState(0);
	const getHeader = useCallback(() => {
		isBlue ? setText('UseCallback is called') : setText('Autumn is magical');
	}, [isBlue]);

	useEffect(() => {
		getHeader();
	}, [getHeader]);

	return (
		<div className="navbar">
			<Button variant="contained" onClick={() => setCounter(counter + 1)}>
				{`Just click ${counter}`}
			</Button>
			<h2 onClick={() => setIsBlue(!isBlue)} style={{ cursor: 'pointer', color: isBlue ? 'blue' : 'black' }}>
				{text}
			</h2>
			<ContainedButton logout={logout} text="Logout" />
		</div>
	);
};

export default MainNavbar;
