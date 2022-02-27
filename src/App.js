import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Header, Footer } from "./components/Layout";
import {
	CreateTeam,
	Home,
	CreateURL,
	UserOnboarding
} from "./views";
import UserProfile from "./components/Users/UserProfile";
import Members from "./components/Users/Members";

function App() {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/createteam" element={<CreateTeam />} />
				<Route path="/profile" element={<UserProfile user={0} />} />
				<Route path="/members" element={<Members />} />
				<Route path="/createurl" element={<CreateURL />} />
				<Route path="/user_onboarding" element={<UserOnboarding />} />
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
