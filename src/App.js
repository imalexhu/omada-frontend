import React from "react";
import {
	BrowserRouter as Router,
	Route,
	Routes
} from "react-router-dom";

import { Header } from "./components/Layout";
import { Teams } from "./views";

function App() {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={null} />
				<Route path="/teams" element={<Teams />} />
			</Routes>
		</Router>
	);
}

export default App;