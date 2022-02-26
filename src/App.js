import React from "react";
import {
	BrowserRouter as Router,
	Route,
	Routes
} from "react-router-dom";

import { Header } from "./components/Layout";
import { CreateTeam } from "./views";
import UserProfile from "./views/userProfile"

function App() {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={null} />
				<Route path="/createteam" element={<CreateTeam />} />
				<Route path='/userProfile' element={<UserProfile />} />
			</Routes>
		</Router>
	);
}

export default App