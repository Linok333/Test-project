import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = ({ image }) => (
	<Link to="/dashboard">
		<img className="containerImage" alt="Error..." src={image} />
	</Link>
);
export default ErrorPage;
