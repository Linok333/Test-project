import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { Formik } from 'formik';
import { Form } from 'react-bootstrap';
import { FormInputText } from '../../Formik';
import { loginSchema } from './validation';

const LoginForm = () => {
	const history = useHistory();

	const login = useCallback(() => {
		localStorage.setItem('token', '1wfer2tgs7');
		history.push('/dashboard');
	}, []);

	return (
		<Formik
			initialValues={
				{
					userName: '',
					password: '',
				}
			}
			validateOnBlur
			validationSchema={loginSchema}
			onSubmit={login}
		>
			{({
				handleSubmit,
			}) => (
				<Form className="pt-3" onSubmit={handleSubmit}>
					<FormInputText name="userName" type="text" placeholder="Name" />
					<FormInputText name="password" type="password" placeholder="Password" />
					<div className="mt-3">
						<button
							type="submit"
							className="btn btn-block btn-primary btn-lg font-weight-semibold auth-form-btn"
						>
							SIGN IN
						</button>
					</div>
				</Form>
			)}
		</Formik>
	);
};

export default LoginForm;
