import ShortDescription from "./ShortDescription";
import classes from "../pages/Homepage.module.css";
import SkillHighlights from "./SkillHighlights";

function MainHighlight() {
	return (
		<section className={classes.mainHighlightsContainer}>
			<ShortDescription />
			<SkillHighlights />
		</section>
	);
}

export default MainHighlight;
