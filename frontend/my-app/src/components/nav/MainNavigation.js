import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdMail } from "react-icons/md";

import classes from "./MainNavigation.module.css";

function MainNavigation() {
	return (
		<header className={classes.header}>
			<nav>
				<Link className={classes.shaun} to="/">
					{"{ Shaun Siong }"}
				</Link>

				<div className={classes.menuParent}>
					<Link
						className={classes.navLink + " " + classes.contact}
						to="/contact"
					>
						<MdMail size={31} />
					</Link>
					<Link className={classes.navLink} to="/#">
						<FaLinkedin size={27} />
					</Link>
					<Link className={classes.navLink} to="/#">
						<FaGithub size={27} />
					</Link>
				</div>
			</nav>
		</header>
	);
}

export default MainNavigation;
