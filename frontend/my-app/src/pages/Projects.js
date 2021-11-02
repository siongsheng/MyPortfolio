import React, { useState } from "react";
import { Link } from "react-router-dom";

import classes from "./Projects.module.css";
import Subheader from "../components/Subheader";
import Card from "../components/Card";

function Projects(props) {
	const [isSkillMouseOver, setIsSkillMouseOver] = useState(-1);

	const mainSubheaderText = "My Projects";
	const subSubheaderText = "Where inspirations come to life";

	const projects = [
		{
			header: "Portfolio Website",
			tags: ["2021", "Personal", "2 Months"],
			skills: ["Django", "React", "MySQL"],
			description:
				"This is the website you are looking at :) My first official portfolio website!",
			image: "/MyPortfolio_Avatar.gif",
		},
		{
			header: "Options Trading Bot",
			tags: ["2020", "Personal", "1 Month"],
			skills: ["Python"],
			description:
				"A program that looks for and executes high ROI option trades and manages existing option trades.",
			image: "/Options_Trading_Bot.png",
		},
	];

	const skillColour = {
		html5: "#e34c26",
		css: "#2965f1",
		javascript: "#BDA81C", //#f0db4f
		django: "#092e20aa",
		python: "#4584b6",
		react: "#158FAF", //#61dbfb
		github: "#333",
		vscode: "#0078d7",
		mysql: "#00758f",
	};

	return (
		<div id="projects" className={classes.projectsContainer}>
			<Subheader mainText={mainSubheaderText} subText={subSubheaderText} />
			<div className={classes.projects}>
				{projects.map((p, i) => {
					return (
						<Link
							to={`/projectDetail/${p.header}`}
							onClick={() => {
								props.setScrollToProjects(false);
								props.setMenuClickCount((c) => c + 1);
							}}
							key={p.header}
						>
							<Card key={p.header} image={p.image}>
								<div
									className={classes.projectCardContainer}
									onMouseEnter={() => setIsSkillMouseOver(i)}
									onMouseLeave={() => setIsSkillMouseOver(-1)}
									key={p.header}
								>
									<div className={classes.projectCardTextContainer}>
										<div className={classes.projectCardTextHeader}>
											{p.header}
										</div>
										<div className={classes.projectCardTextTags}>
											{p.tags.map((t, i, arr) => {
												return (
													<>
														{t} {arr.length - 1 !== i ? " / " : ""}{" "}
													</>
												);
											})}
										</div>
										<div className={classes.projectCardTextSkillsContainer}>
											{p.skills.map((s) => {
												return (
													<div
														className={classes.projectCardTextSkillsItem}
														key={s}
														style={
															isSkillMouseOver === i
																? {
																		backgroundColor:
																			skillColour[s.toLowerCase()],
																		color: "white",
																  }
																: {}
														}
													>
														{s}
													</div>
												);
											})}
										</div>
										<div className={classes.projectCardTextDescription}>
											{p.description}
										</div>
									</div>
								</div>
							</Card>
						</Link>
					);
				})}
			</div>
		</div>
	);
}

export default Projects;
