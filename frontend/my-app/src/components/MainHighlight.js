import classes from "../pages/Homepage.module.css";
import MyAvatar from "./MyAvatar";

function MainHighlight() {
	return (
		<section className={classes.mainHighlightsContainer}>
			<MyAvatar />
		</section>
	);
}

export default MainHighlight;
