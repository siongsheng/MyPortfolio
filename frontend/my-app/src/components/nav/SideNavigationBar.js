import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub, FaHammer } from "react-icons/fa";
import { MdMail } from "react-icons/md";

import classes from "./SideNavigationBar.module.css";

function SideNavigationBar(props) {
	const closeSidebar = () => {
		props.close(false);
	};

	return (
		<div className={classes.sidebarContainer}>
			<Link to="/projects" onClick={() => closeSidebar()}>
				<div className={classes.sidebarItem}>
					<div className={classes.sidebarItemText}>Projects</div>
					<FaHammer className={classes.sidebarItemText} />
				</div>
			</Link>
			<Link to="/#" onClick={() => closeSidebar()}>
				<div className={classes.sidebarItem}>
					<div className={classes.sidebarItemText}>LinkedIn</div>
					<FaLinkedin className={classes.sidebarItemText} />
				</div>
			</Link>
			<Link to="/#" onClick={() => closeSidebar()}>
				<div className={classes.sidebarItem}>
					<div className={classes.sidebarItemText}>Github</div>
					<FaGithub className={classes.sidebarItemText} />
				</div>
			</Link>
			<Link to="/contact" onClick={() => closeSidebar()}>
				<div className={classes.sidebarItem}>
					<div className={classes.sidebarItemText}>Contact Me</div>
					<MdMail className={classes.sidebarItemText} />
				</div>
			</Link>
		</div>
	);
}

export default SideNavigationBar;
