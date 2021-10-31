import React from 'react';
import LoginHead from '../../components/atoms/Headlines/LoginHead/LoginHead';
import { LoginForm } from '../../components/common/Forms/LoginForm';

const LoginPage = () => (
	<div className="loginPage">
		<div className="col-lg-3 mx-auto">
			<LoginHead header="Hello! lets get started" text="Sign in to continue." />
			<LoginForm />
		</div>
	</div>
);

export default LoginPage;
