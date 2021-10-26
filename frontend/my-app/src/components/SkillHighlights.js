import {
	FaHtml5,
	FaCss3,
	FaJs,
	FaReact,
	FaPython,
	FaGithub,
} from "react-icons/fa";
import { SiDjango, SiVisualstudiocode } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import classes from "./SkillHighlights.module.css";
import SkillItem from "./SkillItem";
import Subheader from "./Subheader";

function SkillHighlights() {
	const mainSubheaderText = "My Skills";
	const subSubheaderText = "Tools that make dreams a reality";
	return (
		<div className={classes.skillHighlights}>
			<Subheader mainText={mainSubheaderText} subText={subSubheaderText} />
			<SkillItem text={"HTML5"}>
				<FaHtml5
					className={`${classes.skillHighlightItemIcon} ${classes.html5}`}
					// style={{ color: "#e34c26" }}
				/>
			</SkillItem>
			<SkillItem text={"CSS"} className={classes.css}>
				<FaCss3
					className={`${classes.skillHighlightItemIcon} ${classes.css}`}
				/>
			</SkillItem>
			<SkillItem text={"Javascript"}>
				<FaJs className={` ${classes.skillHighlightItemIcon} ${classes.js}`} />
			</SkillItem>
			<SkillItem text={"Django"}>
				<SiDjango
					className={`${classes.skillHighlightItemIcon} ${classes.django}`}
				/>
			</SkillItem>
			<SkillItem text={"ReactJS"}>
				<FaReact
					className={`${classes.skillHighlightItemIcon} ${classes.react}`}
				/>
			</SkillItem>
			<SkillItem text={"Python"}>
				<FaPython
					className={`${classes.skillHighlightItemIcon} ${classes.python}`}
				/>
			</SkillItem>
			<SkillItem text={"Github"}>
				<FaGithub
					className={`${classes.skillHighlightItemIcon} ${classes.github}`}
				/>
			</SkillItem>
			<SkillItem text={"VS Code"}>
				<SiVisualstudiocode
					className={`${classes.skillHighlightItemIcon} ${classes.vsCode}`}
				/>
			</SkillItem>
			<SkillItem text={"MySQL"}>
				<GrMysql
					className={`${classes.skillHighlightItemIcon} ${classes.mySQL}`}
				/>
			</SkillItem>
		</div>
	);
}

export default SkillHighlights;
