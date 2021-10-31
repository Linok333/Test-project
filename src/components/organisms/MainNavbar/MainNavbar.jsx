import React, { memo } from 'react';
import { EmptyBlock } from '../../atoms/EmptyBlock';
import { ContainedButton } from '../../atoms/Buttons/ContainedButton';

const MainNavbar = ({ isBlue, logout, setIsBlue }) => (
	<div className="navbar">
		<EmptyBlock />
		<h2 onClick={() => setIsBlue(!isBlue)} style={{ cursor: 'pointer', color: isBlue ? 'blue' : 'black' }}> Autumn is magical </h2>
		<ContainedButton logout={logout} text="Logout" />
	</div>
);

export default memo(MainNavbar);
