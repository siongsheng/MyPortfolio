import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import Homepage from "./pages/Homepage";
import MainNavigation from "./components/nav/MainNavigation";
import Footer from "./components/footer/Footer";
import Contact from "./pages/Contact";
import ModalBackground from "./components/nav/ModalBackground";
import SideNavigationBar from "./components/nav/SideNavigationBar";
import ProjectDetail from "./pages/ProjectDetail";

function App() {
	const [isOpenSideMenu, setIsOpenSideMenu] = useState(true);
	const [isScrollProjectSection, setIsScrollProjectSection] = useState(false);
	const [menuClickCount, setMenuClickCount] = useState(0);

	const scrollToProjects = () => {
		const anchor = document.getElementById("projects");
		const winY = window.scrollY;
		const y = winY + anchor.getBoundingClientRect().top;
		window.scrollTo({ top: y, behavior: "smooth", block: "center" });
	};

	useEffect(() => {
		if (isScrollProjectSection === true) {
			scrollToProjects();
		} else {
			window.scrollTo({ top: 0, behavior: "smooth" });
		}
	}, [isScrollProjectSection, menuClickCount]);

	return (
		<div>
			{isOpenSideMenu && (
				<>
					<SideNavigationBar
						close={setIsOpenSideMenu}
						setScrollToProjects={setIsScrollProjectSection}
						setMenuClickCount={setMenuClickCount}
					/>
					<ModalBackground close={setIsOpenSideMenu} />
				</>
			)}
			<div className="navigation">
				<MainNavigation
					IsOpenSideMenu={isOpenSideMenu}
					setIsOpenSideMenu={setIsOpenSideMenu}
					setScrollToProjects={setIsScrollProjectSection}
					setMenuClickCount={setMenuClickCount}
				/>
			</div>
			<main className="main">
				<Switch>
					<Route exact path="/">
						<Homepage
							scrollToProjects={isScrollProjectSection}
							setScrollToProjects={setIsScrollProjectSection}
							setMenuClickCount={setMenuClickCount}
						/>
					</Route>
					<Route exact path="/projectDetail/:projectName">
						<ProjectDetail />
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
