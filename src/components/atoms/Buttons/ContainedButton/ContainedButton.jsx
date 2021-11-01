import React from 'react';
import { Button } from '@mui/material';

const ContainedButton = ({ text, logout }) => (
	<div>
		<Button variant="contained" onClick={logout}>
			{text}
		</Button>
	</div>
);

export default ContainedButton;
