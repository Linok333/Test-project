import React from 'react';
import { BrowserRouter as Route, withRouter } from 'react-router-dom';

class ErrorBoundary extends React.PureComponent {
	constructor(props) {
		super(props);
		this.state = { error: false };
	}

	componentDidCatch(error) {
		this.setState({ error: true });
	}

	render() {
		if (this.state.error) {
			this.props.history.push('/500');
			return null;
		}
		return this.props.children;
	}
}

export default withRouter(ErrorBoundary);
