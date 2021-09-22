import { Link } from "react-router-dom";

import classes from "./Footer.module.css";
import "../../App.css";
import { FaLinkedin, FaGithub, FaHammer } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { DiCss3, DiReact, DiDjango } from "react-icons/di";

function Footer() {
	return (
		<div className={classes.footerContainer}>
			<div className={classes.footer}>
				<div className={classes.footerMainText}>
					If you think I’d be a good fit for your team,{" "}
					<Link className={classes.footerMainTextLink} to="/">
						{" "}
						drop me a line
					</Link>{" "}
					and let’s meet.
				</div>
				<div className={classes.footerIcons}>
					<Link className={classes.footerIcons} to="/contact">
						<MdMail size={31} />
					</Link>
					<Link className={classes.footerIcons} to="/projects">
						<FaHammer size={27} />
					</Link>
					<Link className={classes.footerIcons} to="/#">
						<FaLinkedin size={27} />
					</Link>
					<Link className={classes.footerIcons} to="/#">
						<FaGithub size={27} />
					</Link>
				</div>
				<div className={classes.footerMainSubText}>
					{" "}
					Made with <DiReact size={20} /> <DiCss3 size={20} />{" "}
					<DiDjango size={20} />
				</div>
			</div>
		</div>
	);
}

export default Footer;
