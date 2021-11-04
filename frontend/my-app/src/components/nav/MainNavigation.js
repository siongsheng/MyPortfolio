import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub, FaHammer } from "react-icons/fa";
import Media from "react-media";

import classes from "./MainNavigation.module.css";
import Hamburger from "./Hamburger";

function MainNavigation(props) {
	return (
		<header className={classes.header}>
			<nav>
				<Link className={classes.shaun} to="/">
					<div className={classes.shaunNameWrapper}>SHAUN</div> SIONG
				</Link>
				<Media
					queries={{
						small: "(max-width: 500px)",
						large: "(min-width: 501px)",
					}}
					onChange={() => props.setIsOpenSideMenu(false)}
				>
					{(matches) => (
						<>
							{matches.small && (
								<div
									className={classes.menuParent}
									style={{ justifyContent: "flex-end" }}
								>
									<Hamburger
										IsOpenSideMenu={props.IsOpenSideMenu}
										onClick={props.setIsOpenSideMenu}
									/>
								</div>
							)}

							{matches.large && (
								<div className={classes.menuParent}>
									<Link
										className={classes.navLink}
										to="/#"
										onClick={() => {
											props.setScrollToProjects((s) => !s);
											props.setMenuClickCount((i) => i + 1);
										}}
									>
										<FaHammer className={classes.contactFont} />
									</Link>
									<Link
										className={classes.navLink}
										to={{ pathname: "https://www.linkedin.com/in/shaunsiong/" }}
										onClick={() => {
											props.setScrollToProjects(false);
										}}
										target="_blank"
									>
										<FaLinkedin className={classes.contactFont} />
									</Link>
									<Link
										className={classes.navLink}
										to={{ pathname: "https://github.com/siongsheng" }}
										onClick={() => {
											props.setScrollToProjects(false);
										}}
										target="_blank"
									>
										<FaGithub className={classes.contactFont} />
									</Link>
									<Link
										className={classes.contact + " " + classes.contactFont}
										to="/contact"
										onClick={() => {
											props.setScrollToProjects(false);
										}}
									>
										Contact
									</Link>
								</div>
							)}
						</>
					)}
				</Media>
			</nav>
		</header>
	);
}

export default MainNavigation;
