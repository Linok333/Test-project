import React from 'react';
import { Form } from 'react-bootstrap';
import { useField } from 'formik';

const FormInputText = ({ ...props }) => {
	const [field, meta] = useField(props);
	return (
		<div>
			<Form.Group className="d-flex search-field">
				<Form.Control
					size="lg"
					// className="h-auto"
					{...field}
					{...props}
					className={`h-auto ${meta.touched && meta.error ? 'border-danger' : ''}`}
				/>
			</Form.Group>
		</div>
	);
};
export default FormInputText;
