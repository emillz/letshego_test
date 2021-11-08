import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeContaner from './components/HomeComponent';
import React from 'react';

function App() {
	return (
		<div>
			<Router>
				<Route path="/" component={HomeContaner} exact />
			</Router>
		</div>
	);
}

export default App;
