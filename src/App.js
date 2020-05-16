import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import HomePage from './components/pages/Homepage.jsx';
import NavBar from './components/common/NavBar.jsx';

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div>
					<NavBar />
					<Switch>
						<Route exact path="/" component={HomePage} />
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
