import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './App';
import About from './About';
import History from './History';

import PeopleTable from './PeopleTable';

class NotFound extends Component {
	render() {
		return(
			<div>not found</div>
		)
	}
}

const routes = (
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={PeopleTable} />
			<Route path="about" component={About}>
				<Route path="*" component={NotFound} />
				<IndexRoute component={History} />
			</Route>
		</Route>
	</Router>
);

export default routes;