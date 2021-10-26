import React from "react";

import MainHighlight from "../components/MainHighlight";
import ShortDescription from "../components/ShortDescription";
import SkillHighlights from "../components/SkillHighlights";
import Projects from "./Projects";

function Homepage(props) {
	return (
		<>
			<MainHighlight />
			<ShortDescription />
			<SkillHighlights />
			<Projects
				setScrollToProjects={props.setScrollToProjects}
				setMenuClickCount={props.setMenuClickCount}
			/>
		</>
	);
}

export default Homepage;
