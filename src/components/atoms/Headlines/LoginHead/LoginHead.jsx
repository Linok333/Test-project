import React, { memo } from 'react';

const LoginHead = ({ header, text }) => (
	<>
		<h4>
			{ header }
		</h4>
		<h6 className="font-weight-light">{text}</h6>
	</>
);

export default memo(LoginHead);
