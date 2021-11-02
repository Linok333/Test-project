// Library
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// Route
import { ROUTE } from '../../../core/routes';

const ProtectedRoute = ({ children, path }) => (
	<Route path={path} component={() => (localStorage.getItem('token') ? children : <Redirect to={ROUTE.login} />)} />
);
export default ProtectedRoute;
