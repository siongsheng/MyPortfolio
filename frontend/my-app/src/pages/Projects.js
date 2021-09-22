import classes from "./Projects.module.css";
import Subheader from "../components/Subheader";

function Projects() {
	const mainSubheaderText = "My Projects";
	const subSubheaderText = "Where inspirations come to life";

	return (
		<div id="projects" className={classes.projectsContainer}>
			<Subheader mainText={mainSubheaderText} subText={subSubheaderText} />
		</div>
	);
}

export default Projects;
