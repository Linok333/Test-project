// Library
import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import {
	BrowserRouter as Router, Route, Switch, Redirect,
} from 'react-router-dom';

// Components
import ProtectedRoute from './components/wrappers/ProtectedRoute/ProtectedRoute';
import ErrorBoundary from './components/wrappers/ErrorBoundary/ErrorBoundary';

// Route
import { ROUTE } from './core/routes';

// Assets
import { images } from './assets/images';

// Styles
import './index.scss';

// Pages
const MainPage = lazy(() => import('./pages/MainPage/MainPage'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const ErrorPage = lazy(() => import('./pages/ErrorPage/ErrorPage'));

const App = () => (
	<Router>
		<ErrorBoundary>
			<Suspense fallback={<> Loading... </>}>
				<Switch>
					<Route path={ROUTE.login} component={LoginPage} />
					<Route path={ROUTE.home} exact>
						<Redirect to={ROUTE.dashboard} />
					</Route>
					<ProtectedRoute path={ROUTE.dashboard}>
						<MainPage dataImages={images.autumn} />
					</ProtectedRoute>
					<Route
						path={ROUTE.errorPage}
						render={() => (
							<ErrorPage image={images['500']} />
						)}
					/>
					<Route
						path={ROUTE.notFound}
						render={() => (
							<ErrorPage image={images['404']} />
						)}
					/>
				</Switch>
			</Suspense>
		</ErrorBoundary>
	</Router>
);
ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root'),
);
