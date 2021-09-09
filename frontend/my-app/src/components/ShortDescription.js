import classes from "../pages/Homepage.module.css";
import ReactTypingEffect from "react-typing-effect";

function ShortDescription() {
	return (
		<section className={classes.shortDescriptionContainer}>
			<div className={classes.shortDescription}>
				I’m an{" "}
				<strong>
					<ReactTypingEffect
						text={["Software Engineer", "Sports Enthusiast"]}
						speed={100}
						eraseSpeed={100}
						eraseDelay={3000}
					/>
				</strong>{" "}
				who is passionate about helping designers and developers ship their very
				best work. I lead projects from initial briefing to launch day and
				beyond, with direct responsibility for day-to-day management of process
				and workflow. I’ve overseen dot coms, digital experiences and a home
				screen’s worth of apps and I’d love to work with you.
			</div>
		</section>
	);
}

export default ShortDescription;
