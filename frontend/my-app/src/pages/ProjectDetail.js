import React from "react";
import { useParams } from "react-router";
import Subheader from "../components/Subheader";
import classes from "./ProjectDetail.module.css";

function ProjectDetail() {
	let { projectName } = useParams();
	const projects = {
		"portfolio website": {
			Subtext:
				"This is the website you are looking at :) My first official portfolio website!",
			Languages: ["Javascript", "Python", "HTML5", "CSS"],
			Frameworks: ["React", "Django"],
			Platforms: ["VSCode", "Git"],
			Description:
				"This portfolio site is a platform for me to showcase some of my past work and projects. As well as describing a little more about myself :)\n\nThis site is built on React on the frontend and Django for the backend, with Git as version control. A mixture of usage of traditional CSS media queries and React's react-media package were used to create responsive layouts that adapts to various screen sizes.",
			Motivation:
				"As of this writing (2021), the portfolio website serves as a personal platform for me to satify my interest in creating IT solutions for my personal needs. The motivation also stems from the urge to upgrade my programming skills outside of my current job. While doing such projects, I hope to also explore other new technologies and sharpen existing skills along the way.\n\nEven after completing this website, learning never stops. I have learnt to enjoy the process.",
			Challenges:
				"One of the many hurdles was that this was my first 'major' personal project related to web development, hence, the learning curve was steep. I had no prior experience in Django and limited experience in React and practically needed to learn them scratch. Fortunately, Pluralsight was offering a discount at that time (not sponsored) in their subscription and I immediately pounced on it. Together with a healthy dose of consistency, it wasn't long before I felt adequate to complete the project.\n\nTechnicals aside, design was also another huge hurdle for me. Though the Design Principles can be learnt, I found the application of those principles to be challenging. Perhaps a late bloomer in this department, like Einstein ;)",
			Quote:
				"Improving by just 1 percent isn't notable. But it can be just as meaningful, especially in the long run.",
			Author: "James Clear",
		},
		"options bot": {
			Subtext: "A program that manages my options portfolio!",
			Languages: ["Python"],
			Frameworks: [],
			Platforms: ["TD Ameritrade For Developer", "Telegram APIs"],
			Description: `The programs aims profit from the stock market by executing and managing a special type of Options strategy in my brokerage account. It does this by retrieving Options information from TD Ameritrade's Developer API. This information is then used to find trades with the best return of capital and that meets a certain threshold. It is also used to close existing trades that meet a certain set of rules. I have to declare that program's algorithm is not my own. It is through my interest in financing/investing that I came across a company called TastyTrade that specialises in and teaches Options trading. Hence, the backbone of the program is based off one of their strategies in TastyTrade. However, I have added layer of precaution on top of the algorithm to cater for unforeseen circumstances (i.e. Black Swan events), where variables can be conveniently changed to adjust the risks of future trades.\n\nThe icing on the cake is the Telegram API, where the program automatically sends exception messages directly to you on Telegram in an event that anything goes wrong.
				`,
			Motivation:
				"Trading in the US market is not ideal for me, considering that I live in a country that is almost 12 hours ahead. Hence, the motivation stems from the desire to implement this strategy even while I am asleep. Despite developing a program that trades, I am a Value Investor at heart.\n\nThere is a famous quote by my idol and mentor, Warren Buffett, that I keep close to my heart:",
			Challenges:
				"There were many challanges faced when developing this program. Some were to ensure a high accuracy between my calculation of the margin required (Buying Power Reduction) and the amount provided by the broker for each trade. Another challenge, for example, was to determine how much of a return would be sufficient to compensate for the risk taken, for each trade. Along those lines, the biggest challenge I feel is to be able to manage on a portfolio level.",
			Quote:
				"If you don't find a way to make money while you sleep, you will work until you die.",
			Author: "Warren Buffett",
		},
	};
	const project = projects[projectName.toLowerCase()];

	return (
		<div className={classes.ProjectDetailContainer}>
			<Subheader mainText={projectName} subText={project.Subtext} />
			<div className={classes.ProjectDetailHeaderContainer}>
				<div className={classes.ProjectDetailHeaderImg}>[Image]</div>
			</div>
			<div className={classes.ProjectDetailSubheader}>TECHNOLOGY</div>
			<div className={classes.ProjectDetailToolsContainer}>
				{project.Languages.length > 0 && (
					<div className={classes.ProjectDetailSubSubheaderContainer}>
						<div className={classes.ProjectDetailSubSubheader}>Languages</div>
						<div className={classes.ProjectDetailSubSubHighlights}>
							{project.Languages.map((l) => {
								return (
									<div
										className={classes.ProjectDetailSubSubHighlightItem}
										key={l}
									>
										{l}
									</div>
								);
							})}
						</div>
					</div>
				)}
				{project.Frameworks.length > 0 && (
					<div className={classes.ProjectDetailSubSubheaderContainer}>
						<div className={classes.ProjectDetailSubSubheader}>Frameworks</div>
						<div className={classes.ProjectDetailSubSubHighlights}>
							{project.Frameworks.map((f) => {
								return (
									<div
										className={classes.ProjectDetailSubSubHighlightItem}
										key={f}
									>
										{f}
									</div>
								);
							})}
						</div>
					</div>
				)}
				{project.Platforms.length > 0 && (
					<div className={classes.ProjectDetailSubSubheaderContainer}>
						<div className={classes.ProjectDetailSubSubheader}>Platforms</div>
						<div className={classes.ProjectDetailSubSubHighlights}>
							{project.Platforms.map((p) => {
								return (
									<div
										className={classes.ProjectDetailSubSubHighlightItem}
										key={p}
									>
										{p}
									</div>
								);
							})}
						</div>
					</div>
				)}
			</div>
			<div className={classes.ProjectDetailSubheader}>ABOUT</div>
			<div className={classes.ProjectDetailAboutContainer}>
				<div className={classes.ProjectDetail_ProjectDetailAboutSubheader}>
					Description
				</div>
				<div className={classes.ProjectDetail_ProjectDetailAboutItemText}>
					{project.Description}
				</div>
				<div className={classes.ProjectDetail_ProjectDetailAboutSubheader}>
					Challenges
				</div>
				<div className={classes.ProjectDetail_ProjectDetailAboutItemText}>
					{project.Challenges}
				</div>
				<div className={classes.ProjectDetail_ProjectDetailAboutSubheader}>
					Motivation
				</div>
				<div className={classes.ProjectDetail_ProjectDetailAboutItemText}>
					{project.Motivation}
				</div>
				<div className={classes.ProjectDetail_ProjectDetailAboutQuoteContainer}>
					<div className={classes.ProjectDetail_ProjectDetailAboutQuote}>
						{project.Quote}
					</div>
					<div className={classes.ProjectDetail_ProjectDetailAboutQuoteAuthor}>
						{"- " + project.Author}
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProjectDetail;
