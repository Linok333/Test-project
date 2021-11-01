import React from 'react';
import { images } from '../../../assets/images';
// import { BrowserRouter as withRouter } from 'react-router-dom';
import { ErrorPage } from '../../../pages/ErrorPage';

class ErrorBoundary extends React.PureComponent {
	constructor(props) {
		super(props);
		this.state = { error: false };
	}

	componentDidCatch() {
		this.setState({ error: true });
	}

	render() {
		if (this.state.error) {
			// this.props.history.push('/500');
			return (
				<ErrorPage image={images['500']} />
			);
		}
		return this.props.children;
	}
}

export default ErrorBoundary;
