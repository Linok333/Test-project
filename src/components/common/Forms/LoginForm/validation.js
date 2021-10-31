import * as Yup from 'yup';

export const loginSchema = Yup.object().shape({
	userName: Yup.string().min(2).required('Please enter your name'),
	password: Yup.string().min(5).required('Please enter your password'),
});
