import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import {
	BrowserRouter as Router, Route, Switch, Redirect,
} from 'react-router-dom';
import { ProtectedRoute } from './components/wrappers/ProtectedRoute';
import './index.scss';
import { ErrorPage } from './pages/ErrorPage';
import { LoginPage } from './pages/LoginPage';
import { images } from './assets/images';
import ErrorBoundary from './components/wrappers/ErrorBoundary/ErrorBoundary';

const MainPage = lazy(() => import('./pages/MainPage/MainPage'));

const App = () => (
	<Router>
		<ErrorBoundary>
			<Switch>
				<Route path="/login" component={LoginPage} />
				<Route path="/" exact>
					<Redirect to="/dashboard" />
				</Route>
				<ProtectedRoute path="/dashboard">
					<Suspense fallback={<></>}>
						<MainPage dataImages={images.autumn} />
					</Suspense>
				</ProtectedRoute>
				<Route
					path="/500"
					render={(props) => (
						<ErrorPage {...props} image={images['500']} />
					)}
				/>
				<Route
					path="*"
					render={(props) => (
						<ErrorPage {...props} image={images['404']} />
					)}
				/>
			</Switch>
		</ErrorBoundary>
	</Router>
);
ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root'),
);
