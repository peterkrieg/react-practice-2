import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './App';
import About from './About';
import PeopleTable from './PeopleTable';

const routes = (
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={PeopleTable} />
			<Route path="about" component={About} />
		</Route>
	</Router>
);

export default routes;