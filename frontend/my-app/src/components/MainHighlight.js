import { useEffect, useState } from "react";
import classes from "../pages/Homepage.module.css";
import MyAvatar from "./MyAvatar";

function MainHighlight() {
	const [visibility, setVisibility] = useState("visible");
	useEffect(() => {
		window.addEventListener("scroll", listenScroll);
		return () => window.removeEventListener("scroll", listenScroll);
	}, []);

	// let opacity = 1;
	const fadeDistance = 200;

	const listenScroll = () => {
		// let heightToHideFrom = document
		// 	.getElementById("shortDescription")
		// 	.getBoundingClientRect().top;
		// const winScroll =
		// 	document.body.scrollTop || document.documentElement.scrollTop;
		// if (winScroll > heightToHideFrom) {
		// 	if (heightToHideFrom + fadeDistance < winScroll) {
		// 		opacity = 0;
		// 	} else {
		// 		opacity =
		// 			1 - ((winScroll - heightToHideFrom) / fadeDistance).toFixed(1);
		// 	}
		// } else {
		// 	opacity = 1;
		// }
		if (window.scrollY > fadeDistance) {
			setVisibility("hidden");
		} else {
			setVisibility("visible");
		}
	};

	return (
		<section className={classes.mainHighlightsContainer}>
			<MyAvatar />
			<div
				className={classes.test}
				style={
					visibility === "hidden" ? { visibility: visibility, opacity: 0 } : {}
				}
			>
				<div>ABOUT ME</div>
				<div className={classes.arrow}>
					<div className={classes.leftArrow}></div>
					<div className={classes.rightArrow}></div>
				</div>
			</div>
		</section>
	);
}

export default MainHighlight;
