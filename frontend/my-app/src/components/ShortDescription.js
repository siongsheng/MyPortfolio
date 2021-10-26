import React from "react";
import classes from "../pages/Homepage.module.css";

function ShortDescription() {
	return (
		<div className={classes.shortDescriptionContainer}>
			<div className={classes.shortDescription}>
				I’m an full-stack software engineer who is passionate about leveraging
				on IT to build solutions for real-world issues. I graduated in 2019 from
				the School of Computing, National University of Singapore (NUS). Other
				than my interest in software engineering, I am quite a fitness
				enthusiast and am also into finance/wealth creation. In my spare time, I
				will usually be deepening my knowledge in either of my passions or
				thinking and implementing ways to integrate my passions together, mainly
				finance and IT. Do drop me a message in the contact page and I’d love to
				work with you.
			</div>
		</div>
	);
}

export default ShortDescription;
