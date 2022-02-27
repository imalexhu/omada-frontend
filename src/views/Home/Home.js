import React from "react";

import {
	WelcomeHero,
	GetStarted,
	Improvements
} from "./sections";

const Home = () => {
	return (
		<React.Fragment>
			<WelcomeHero />			
			<GetStarted />
			<Improvements />
		</React.Fragment>
	);
}

export default Home;