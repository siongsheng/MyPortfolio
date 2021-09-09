import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import Homepage from "./pages/Homepage";
import MainNavigation from "./components/nav/MainNavigation";
import Footer from "./components/footer/Footer";

function App() {
	return (
		<div>
			<main className="main">
				<MainNavigation />
				<Switch>
					<Route exact path="/">
						<Homepage />
					</Route>
				</Switch>
				<Footer />
			</main>
		</div>
	);
}

export default App;
