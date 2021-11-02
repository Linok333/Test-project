// Library
import React, { lazy } from 'react';

// Assets
import { images } from '../../../assets/images';

// Pages
const ErrorPage = lazy(() => import('../../../pages/ErrorPage/ErrorPage'));

class ErrorBoundary extends React.PureComponent {
	constructor(props) {
		super(props);
		this.state = { error: false };
	}

	componentDidCatch() {
		this.setState({ error: true });
	}

	render() {
		return this.state.error ? <ErrorPage image={images['500']} /> : this.props.children;
	}
}

export default ErrorBoundary;
