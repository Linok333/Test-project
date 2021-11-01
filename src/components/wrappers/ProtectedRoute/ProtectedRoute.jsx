import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ children, path }) => (
	<Route path={path} component={() => (localStorage.getItem('token') ? children : <Redirect to="/login" />)} />
);
export default ProtectedRoute;
