import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import Homepage from "./pages/Homepage";
import MainNavigation from "./components/nav/MainNavigation";
import Footer from "./components/footer/Footer";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import ModalBackground from "./components/nav/ModalBackground";
import SideNavigationBar from "./components/nav/SideNavigationBar";

function App() {
	const [isOpenSideMenu, setIsOpenSideMenu] = useState(true);
	const [isScrollProjectSection, setIsScrollProjectSection] = useState(false);

	const scrollToProjects = () => {
		const anchor = document.querySelector("#projects");
		anchor.scrollIntoView({ behavior: "smooth", block: "center" });
	};

	useEffect(() => {
		if (isScrollProjectSection === true) {
			scrollToProjects();
		} else {
			window.scrollTo({ top: 0, behavior: "smooth" });
		}
	}, [isScrollProjectSection]);

	return (
		<div>
			{isOpenSideMenu && (
				<>
					<SideNavigationBar close={setIsOpenSideMenu} />
					<ModalBackground close={setIsOpenSideMenu} />
				</>
			)}
			<div className="navigation">
				<MainNavigation
					IsOpenSideMenu={isOpenSideMenu}
					setIsOpenSideMenu={setIsOpenSideMenu}
					setScrollToProjects={setIsScrollProjectSection}
				/>
			</div>
			<main className="main">
				<Switch>
					<Route exact path="/">
						<Homepage scrollToProjects={isScrollProjectSection} />
					</Route>
					<Route exact path="/#projects">
						<Projects />
					</Route>
					<Route exact path="/contact">
						<Contact />
					</Route>
				</Switch>
			</main>
			<Footer />
		</div>
	);
}

export default App;
